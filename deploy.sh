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

# Caddy (snap) is sandboxed and can't read ~/projects/... directly, so copy
# the built output into the snap's accessible site root.
SNAP_SITE=/var/snap/caddy/common/sites/yankvasya-landing
mkdir -p "$SNAP_SITE"
cp -r dist/* "$SNAP_SITE/"

echo "Deploy complete: yankvasya.dev"

