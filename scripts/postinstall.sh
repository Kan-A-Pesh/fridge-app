#!/bin/bash
set -e
cd $(dirname "$0")/../

# Run patch-package
npx patch-package

# Check if ./ext_modules/openfoodfacts-nodejs exists
if [ ! -d "ext_modules/openfoodfacts-nodejs" ]; then
    echo "Warning: ./ext_modules/openfoodfacts-nodejs folder not found."
    echo "Please run 'npm run setup' to install the openfoodfacts-nodejs module."
    exit 1
fi
