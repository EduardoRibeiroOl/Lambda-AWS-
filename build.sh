#!/bin/bash

echo "Building project..."
cd handlers/user
npm install
npm run build
cd ../..


echo "Build completed."