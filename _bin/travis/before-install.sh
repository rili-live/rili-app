#!/bin/bash

set -e

openssl aes-256-cbc -K $encrypted_9f3b5599b056_key -iv $encrypted_9f3b5599b056_iv -in service-account.json.enc -out service-account.json -d
curl https://sdk.cloud.google.com | bash > /dev/null;
source $HOME/google-cloud-sdk/path.bash.inc
gcloud components update kubectl
gcloud auth activate-service-account --key-file service-account.json
gcloud config set project rili-main
gcloud config set compute/zone us-central1-a
gcloud container clusters get-credentials rili-app
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_ID" --password-stdin
# docker build -t riliadmin/testing -f ./client/Dockerfile.dev ./client