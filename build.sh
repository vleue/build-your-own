#!/bin/bash

zola build
cp public/training/index.html graph-ui/pages/index.tsx
cd graph-ui
npm run build
cd ..
cp -r graph-ui/dist/index.html public/training/index.html
cp -r graph-ui/dist/_next public/_next
# just for current way of publish on github page, should not run locally
# it works without a condition because this command fails on macos
sed -i 's/\/_next/\/build-your-own\/_next/g' public/training/index.html
