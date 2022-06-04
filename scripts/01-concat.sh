#!/bin/bash
echo "build application script"
cat src/application.config.txt | xargs -I{} sh -c "cat {}; echo ''" > dist/application.js

echo "build email script"
cat src/email.config.txt | xargs -I{} sh -c "cat {}; echo ''" > dist/email.js

echo "build prosecution script"
cat src/prosecution.config.txt | xargs -I{} sh -c "cat {}; echo ''" > dist/prosecution.js