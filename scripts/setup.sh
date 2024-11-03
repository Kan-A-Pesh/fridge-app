if [ -d "ext_modules/openfoodfacts-nodejs" ]; then
    echo "Warning: ./ext_modules/openfoodfacts-nodejs folder already exists."
    echo "Are you sure you want to overwrite it? (y/n)"
    read answer

    if [ "$answer" != "y" ]; then
        exit 1
    fi

    rm -rf ext_modules/openfoodfacts-nodejs
fi

# Create ext_modules folder if it doesn't exist
mkdir -p ext_modules
cd ext_modules

# Clone the openfoodfacts-nodejs module
git clone https://github.com/openfoodfacts/openfoodfacts-nodejs.git

# Install the openfoodfacts-nodejs module
cd openfoodfacts-nodejs
yarn install
yarn build
yarn test

echo "Done!"
