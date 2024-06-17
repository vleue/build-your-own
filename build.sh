#!/bin/bash

zola build
mkdir graph-ui/generated || true
cp public/training/index.html graph-ui/generated/nodes.ts
cd graph-ui
npm run build
cd ..
cp -r graph-ui/dist/index.html public/training/index.html
cp -r graph-ui/dist/_next public/_next
