#!/bin/bash

# build application in dist folder
npm run build

DIR=dist
BUCKET=ngx-starter-kit.fashion.cloud

# configure aws cli
aws configure set default.region eu-central-1
aws configure set default.output json

# sync app folder with s3 bucket
aws  s3  sync $DIR s3://$BUCKET/ --delete
