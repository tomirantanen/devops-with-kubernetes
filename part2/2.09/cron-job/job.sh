#!/usr/bin/env bash

echo "Getting random wikipedia page url"

headers=$(curl --silent --head https://en.wikipedia.org/wiki/Special:Random)
randomUrl=$(echo "$headers" | grep location | tr -d '\r' | awk '{print $2}')

echo "Received $randomUrl"

echo "$randomUrl" | xargs -I % curl --silent --request POST "todo-api-service:2346/todos?todo=%"

echo "Created new todo for the url"
