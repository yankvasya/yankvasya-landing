#!/bin/bash
# Deploy script for yankvasya.dev
# Runs on the VPS after `git pull`. Builds the Astro site and copies
# the output to the Caddy site root.
#
# NOTE: git pull happens in the GitHub Actions workflow's SSH command,
# BEFORE this script is invoked — not in here. bash reads a script from
# disk as it executes it; if this script pulled its own new content
# mid-run, later lines would be read from the wrong file offset.
set -e

# Non-interactive SSH sessions (like this one) don't source ~/.bashrc,
# so nvm's PATH setup never runs and npm isn't found — load it explicitly
# and select the default version.
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm use default

cd ~/projects/yankvasya-landing

npm ci
npm run build

# Caddy serves the site directly from ~/projects/yankvasya-landing/dist
echo "Deploy complete: yankvasya.dev"
