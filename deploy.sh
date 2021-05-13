#!/bin/bash

#
# Shell script for remote deployment.
#
# Notes:
# - Git is assumed
# - Composer is assumed
# - NPM is assumed
# - Windows host and Cygwin environment is assumed
# - UNIX target environment with SSH+rsync is assumed
#

NAME="wp_starter_boilerplate"
ORIGIN_DIRECTORY="deploy_tmp"
GIT_URI="https://github.com/jjpeleato/wp-starter-boilerplate.git"
HOOK="https://hooks.slack.com/services/[KEY]"

# Answer to continue
echo
echo "Do you want to deploy on production or pre production environment?. (pro/pre/dev): "
read -r answer

if [ "$answer" = "pro" ] ; then
    echo
    echo "Production environment"
    ENVIRONMENT="pro"
    SSH_DIRECTORY="[user]@[ip]:/[path]"
    SSH_PORT="22"

    echo "Not deploy"
    exit
elif [ "$answer" = "pre" ] ; then
    echo
    echo "Pre production environment"
    ENVIRONMENT="pre"
    SSH_DIRECTORY="[user]@[ip]:/[path]"
    SSH_PORT="22"

    echo "Not deploy"
    exit
elif [ "$answer" = "dev" ] ; then
    echo
    echo "Development environment"
    ENVIRONMENT="dev"
    SSH_DIRECTORY="[user]@[ip]:/[path]"
    SSH_PORT="22"

    echo "Not deploy"
    exit
else
    echo
    echo "Bad selection"
    echo "Good bye!"
    exit
fi

# Slack notification
curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"Deploy on \`$ENVIRONMENT\` :v:\",\"username\":\"$NAME\"}" "$HOOK"
echo

# Download project according repository GIT
echo "Download project and save into temporary directory"
if [ "$ENVIRONMENT" = "pro" ] ; then
    echo
    cd "$HOME" && rm -rf "$ORIGIN_DIRECTORY"
    cd "$HOME" && git clone "$GIT_URI" "$ORIGIN_DIRECTORY" --verbose
elif [ "$ENVIRONMENT" = "pre" ] ; then
    echo
    cd "$HOME" && rm -rf "$ORIGIN_DIRECTORY"
    cd "$HOME" && git clone "$GIT_URI" "$ORIGIN_DIRECTORY" --verbose --single-branch --branch develop
elif [ "$ENVIRONMENT" = "dev" ] ; then
    echo
    cd "$HOME" && rm -rf "$ORIGIN_DIRECTORY"
    cd "$HOME" && git clone "$GIT_URI" "$ORIGIN_DIRECTORY" --verbose --single-branch --branch develop
fi

if [ "$?" != "0" ] ; then
    echo
    echo "ERROR: Download project."
    cd "$HOME" && rm -rf "$ORIGIN_DIRECTORY"
	curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"ERROR on \`$ENVIRONMENT\`: Download project :x:\",\"username\":\"$NAME\"}" "$HOOK"
	echo
    exit
fi

# Execute composer and install packages
echo
echo "Execute composer and install packages"
cd "$HOME/$ORIGIN_DIRECTORY" && composer install --no-dev --no-scripts

if [ "$?" != "0" ] ; then
    echo
    echo "ERROR: Composer install."
    cd "$HOME" && rm -rf "$ORIGIN_DIRECTORY"
	curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"ERROR on \`$ENVIRONMENT\`: Composer install :x:\",\"username\":\"$NAME\"}" "$HOOK"
	echo
    exit
fi

# Execute NPM and install packages
echo
echo "Execute NPM and install packages"
cd "$HOME/$ORIGIN_DIRECTORY" && npm install --save-dev

if [ "$?" != "0" ] ; then
    echo
    echo "ERROR: NPM install."
    cd "$HOME" && rm -rf "$ORIGIN_DIRECTORY"
	curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"ERROR on \`$ENVIRONMENT\`: NPM install :x:\",\"username\":\"$NAME\"}" "$HOOK"
	echo
    exit
fi

# Execute GULP
echo
echo "Execute GULP process"
if [ "$ENVIRONMENT" = "pro" ] ; then
    cd "$HOME/$ORIGIN_DIRECTORY" && npm run gulp:prod
elif [ "$ENVIRONMENT" = "pre" ] ; then
    cd "$HOME/$ORIGIN_DIRECTORY" && npm run gulp:dev
elif [ "$ENVIRONMENT" = "dev" ] ; then
    cd "$HOME/$ORIGIN_DIRECTORY" && npm run gulp:dev
fi

if [ "$?" != "0" ] ; then
    echo
    echo "ERROR: GULP process."
    cd "$HOME" && rm -rf "$ORIGIN_DIRECTORY"
	curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"ERROR on \`$ENVIRONMENT\`: GULP process :x:\",\"username\":\"$NAME\"}" "$HOOK"
	echo
    exit
fi

# Deploy local to production environment
echo
echo "Deploying with dry-run"
if [ "$ENVIRONMENT" = "pro" ] ; then
    rsync --progress --exclude-from="$HOME/$ORIGIN_DIRECTORY/deploy-exclude-list.txt" -avzh "$HOME/$ORIGIN_DIRECTORY/public/" -e "ssh -p $SSH_PORT" "$SSH_DIRECTORY" --dry-run
elif [ "$ENVIRONMENT" = "pre" ] ; then
    rsync --delete --progress --exclude-from="$HOME/$ORIGIN_DIRECTORY/deploy-exclude-list.txt" -avzh "$HOME/$ORIGIN_DIRECTORY/public/" -e "ssh -p $SSH_PORT" "$SSH_DIRECTORY" --dry-run
elif [ "$ENVIRONMENT" = "dev" ] ; then
    rsync --delete --progress --exclude-from="$HOME/$ORIGIN_DIRECTORY/deploy-exclude-list.txt" -avzh "$HOME/$ORIGIN_DIRECTORY/public/" -e "ssh -p $SSH_PORT" "$SSH_DIRECTORY" --dry-run
fi

if [ "$?" != "0" ] ; then
    echo
    echo "ERROR: Deploying with --dry-run."
    cd "$HOME" && rm -rf "$ORIGIN_DIRECTORY"
	curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"ERROR on \`$ENVIRONMENT\`: Deploying with --dry-run :x:\",\"username\":\"$NAME\"}" "$HOOK"
	echo
    exit
fi

# Answer to continue
echo
echo "Deploying with dry-run successfully"
echo "Do you want to continue the execution without dry-run? (y/n)?: "
read -r answer

if [ "$answer" != "${answer#[Yy]}" ] ; then
    echo "Yes! senseless! cross your fingers and wait"
    sleep 5
else
    echo
    echo "Good bye! Stop deployment"
    cd "$HOME" && rm -rf "$ORIGIN_DIRECTORY"
	curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"Good bye! Stop deployment on \`$ENVIRONMENT\` :thinking_face:\",\"username\":\"$NAME\"}" "$HOOK"
	echo
    exit
fi

# Deploy local to production environment
echo
echo "Deploying..."
if [ "$ENVIRONMENT" = "pro" ] ; then
  rsync --progress --exclude-from="$HOME/$ORIGIN_DIRECTORY/deploy-exclude-list.txt" -avzh "$HOME/$ORIGIN_DIRECTORY/public/" -e "ssh -p $SSH_PORT" "$SSH_DIRECTORY"
elif [ "$ENVIRONMENT" = "pre" ] ; then
  rsync --delete --progress --exclude-from="$HOME/$ORIGIN_DIRECTORY/deploy-exclude-list.txt" -avzh "$HOME/$ORIGIN_DIRECTORY/public/" -e "ssh -p $SSH_PORT" "$SSH_DIRECTORY"
elif [ "$ENVIRONMENT" = "dev" ] ; then
  rsync --delete --progress --exclude-from="$HOME/$ORIGIN_DIRECTORY/deploy-exclude-list.txt" -avzh "$HOME/$ORIGIN_DIRECTORY/public/" -e "ssh -p $SSH_PORT" "$SSH_DIRECTORY"
fi

if [ "$?" != "0" ] ; then
    echo
    echo "ERROR: Deploying"
    cd "$HOME" && rm -rf "$ORIGIN_DIRECTORY"
	curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"ERROR on \`$ENVIRONMENT\`: Deploying :x:\",\"username\":\"$NAME\"}" "$HOOK"
	echo
    exit
fi

# Delete the temporal directory
echo
echo "Delete the temporal directory"
cd "$HOME" && rm -rf "$ORIGIN_DIRECTORY"

# Finish
echo
echo "Finished! Deploy successfully."
curl -X POST -H 'Content-type: application/json' --data "{\"text\":\"Finished! Deploy successfully on \`$ENVIRONMENT\` :white_check_mark:\",\"username\":\"$NAME\"}" "$HOOK"
echo
exit
