#!/bin/bash 

yarn build && curl --netrc -T build/index.html ftp://stromik.cz@hosting8.livebox.cz/www/ && curl --netrc -T build/index.js ftp://stromik.cz@hosting8.livebox.cz/www/