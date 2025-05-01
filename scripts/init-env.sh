#!/usr/bin/env bash
set -e

# Copy the app’s env example into its .env.local
cp mvp-app/.env.example mvp-app/.env.local
echo "mvp-app/.env.local populated from mvp-app/.env.example"
