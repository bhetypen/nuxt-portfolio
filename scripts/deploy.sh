#!/usr/bin/env bash
set -euo pipefail

BRANCH="deploy"                # branch for GitHub Pages
OUT_DIR=".output/public"       # Nuxt generate output
ORIGIN_URL="$(git config --get remote.origin.url)"

echo "▶️ Build Nuxt static site..."
npm ci
npm run build
npm run generate

# Required for GitHub Pages (_nuxt assets would be hidden otherwise)
touch "$OUT_DIR/.nojekyll"

echo "📦 Deploying to branch: $BRANCH..."
cd "$OUT_DIR"

# 🧹 Clean old git history if it exists
rm -rf .git

# Initialize fresh repo and push
git init
git checkout -b "$BRANCH"
git add .
git commit -m "Deploy $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
git remote add origin "$ORIGIN_URL"
git push -f origin "$BRANCH"

echo "✅ Deployment complete. Check GitHub Pages settings → Source = deploy branch."
