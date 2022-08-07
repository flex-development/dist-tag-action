#!/bin/sh

# Local Release Workflow

# 1. run tests
# 2. get new package version
# 3. get release branch name
# 4. switch to release branch
# 5. stage changes
# 6. commit changes
# 7. push release branch to origin

yarn test
VERSION=$(fx package.json .version)
RELEASE_BRANCH=release/$VERSION
git switch -c $RELEASE_BRANCH
git add .
git commit -s -m "release: $(fx package.json .name)@$VERSION" --no-verify
git push origin -u --no-verify $RELEASE_BRANCH
