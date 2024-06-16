#!/bin/bash

zola build
cp public/training/index.html graph-ui/pages/index.tsx
cd graph-ui
npm run build
cd ..
cp -r graph-ui/dist/index.html public/training/index.html
cp -r graph-ui/dist/_next public/_next
