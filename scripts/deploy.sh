#!/usr/bin/env bash
# Build the static export and publish it to the gh-pages branch.
# GitHub Pages serves that branch directly, so no GitHub Actions are needed.
set -euo pipefail

cd "$(dirname "$0")/.."

remote="$(git remote get-url origin)"
commit="$(git rev-parse --short HEAD)"

npm run build

if [ ! -f out/index.html ]; then
  echo "Build did not produce out/index.html, aborting." >&2
  exit 1
fi

# Without .nojekyll, Pages runs Jekyll and drops the _next folder.
touch out/.nojekyll
cp CNAME out/CNAME

tmp="$(mktemp -d)"
trap 'rm -rf "$tmp"' EXIT

cp -R out/. "$tmp"
find "$tmp" -name .DS_Store -delete

cd "$tmp"
git init -q -b gh-pages
git add -A
git commit -q -m "Deploy $commit"
git push -f "$remote" gh-pages

echo "Published $commit to gh-pages."
