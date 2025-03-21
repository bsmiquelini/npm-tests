#!/bin/bash

# Aqui é um script, mas poderia ser qualquer linguagem que queira trabalhar, nesse caso precisaria apenas ajustar o Dockerfile e a aplicação
echo "Deploying to AWS S3"
echo "aws s3 sync ${AWS_DIST_PATH} s3://${AWS_BUCKET_NAME} --recursive --region ${AWS_REGION}"
siteUrl="https://${AWS_BUCKET_NAME}.s3.${AWS_REGION}.amazonaws.com"  
echo "site-url=${siteUrl}" >> $GITHUB_OUTPUT
echo "::notice::site-url=${siteUrl}" 