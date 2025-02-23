#!/bin/bash
for dir in apps/server; do
  echo "Installing Python dependencies in $dir"
  (cd $dir && poetry install --no-root)
done
