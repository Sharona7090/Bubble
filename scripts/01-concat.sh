#!/bin/bash
cat src/application.config.txt | xargs cat > dist/application.js
cat src/email.config.txt | xargs cat > dist/email.js