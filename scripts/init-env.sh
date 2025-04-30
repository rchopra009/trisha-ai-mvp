#!/usr/bin/env bash
set -e

# Copy example env into .env.local
cp .env.example .env.local
echo ".env.local populated from .env.example"
