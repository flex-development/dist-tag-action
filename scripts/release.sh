#!/bin/sh

# Local Release Workflow

# 1. run tests
# 2. pack project
# 3. get new package version
# 4. get release branch name
# 5. switch to release branch
# 6. stage changes
# 7. commit changes
# 8. push release branch to origin
# 9. cleanup

yarn test
yarn pack
VERSION=$(fx package.json .version)
RELEASE_BRANCH=release/$VERSION
git switch -c $RELEASE_BRANCH
git add .
git commit -s -m "release: $(fx package.json .name)@$VERSION" --no-verify
git push origin -u --no-verify $RELEASE_BRANCH
yarn clean:pack
