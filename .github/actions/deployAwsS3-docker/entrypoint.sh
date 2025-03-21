#!/bin/bash

AWS_ACCESS_KEY_ID="$1"
AWS_SECRET_ACCESS_KEY="$2"    
AWS_BUCKET_NAME="$3"
AWS_REGION="$4"
AWS_DIST_PATH="$5"

echo "Deploying to AWS S3"
echo "aws s3 sync ${AWS_DIST_PATH} s3://${AWS_BUCKET_NAME} --recursive --region ${AWS_REGION}"
siteUrl="https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com"  
echo "site-url=${siteUrl}" >> $GITHUB_OUTPUT
echo "::notice::site-url=${siteUrl}" 