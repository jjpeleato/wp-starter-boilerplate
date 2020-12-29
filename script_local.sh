#!/bin/bash

#
# Shell script for PHP validate.
#
# Notes:
# - Lando is assumed
# - Console is assumed
# - Composer is assumed
#

# Execute PHP validate
echo
echo "PHP validate"
lando composer cs

if [ "$?" != "0" ] ; then
    echo
    echo "ERROR: PHP validate."
    exit
fi

# Finish
echo "Finish"
exit
