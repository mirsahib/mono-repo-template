#!/bin/bash

# Check if package name is provided
if [ -z "$1" ]; then
  echo "Usage: $0 <package-name>"
  exit 1
fi

PACKAGE_NAME=$1
SERVER_DIR="apps/server"

# Check if the apps/server directory exists
if [ ! -d "$SERVER_DIR" ]; then
  echo "Error: Directory $SERVER_DIR does not exist."
  exit 1
fi

# Change to the server directory
cd "$SERVER_DIR" || exit

# Install the package using Poetry
echo "Installing package: $PACKAGE_NAME in $SERVER_DIR"
poetry add "$PACKAGE_NAME"

echo "Installation complete."
