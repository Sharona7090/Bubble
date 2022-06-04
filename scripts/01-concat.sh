#!/bin/bash
echo "build application script"
cat src/application.config.txt | xargs cat > dist/application.js
echo "build email script"
cat src/email.config.txt | xargs cat > dist/email.js