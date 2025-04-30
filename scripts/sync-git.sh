#!/usr/bin/env bash
set -e

# If the repo already exists, pull latest; otherwise clone fresh
if [ -d ".git" ]; then
  git pull origin main
else
  git clone git@github.com:rchopra009/trisha-ai-mvp.git .
fi
