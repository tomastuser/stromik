#!/bin/bash 

yarn build && 
curl --netrc -T build/index.html ftp://stromik.cz@hosting8.livebox.cz/www/ && 
curl --netrc -T "$(find ./build -type f -name "*.js")" ftp://stromik.cz@hosting8.livebox.cz/www/assets/ &&
curl --netrc -T "$(find ./build -type f -name "*.css")" ftp://stromik.cz@hosting8.livebox.cz/www/assets/