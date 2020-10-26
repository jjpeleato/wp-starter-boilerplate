#!/bin/bash

#
# Shell script to install latest version of git.
#
# Notes:
# - Lando is assumed
# - Debian target environment with apt and wget is assumed
#
GIT_LATEST="https://github.com/git/git/archive/v2.29.1.zip"

apt update
apt install make libssl-dev libghc-zlib-dev libcurl4-gnutls-dev libexpat1-dev gettext unzip -y
wget "$GIT_LATEST" -O git.zip && unzip git.zip && cd git-*
make prefix=/usr/local all
make prefix=/usr/local install
cd /app && rm -rf git-* && rm -rf git.zip
