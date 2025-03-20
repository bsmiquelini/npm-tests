const github = require('@actions/github');
const core = require('@actions/core');
const exec = require('@actions/exec');

function getInputs() {
  const bucketName = core.getInput('bucket-name');
  const distPath = core.getInput('dist-path');
  const region = core.getInput('region');
}

function deployToS3(bucketName, distPath, region) {
  // Deploy to S3
  exec.exec(`echo aws s3 sync ${distPath} s3://${bucketName} --recursive --region ${region}`);
  core.notice('Deploy do path ' + distPath + ' para o bucket ' + bucketName + ' na região ' + region);
}

getInputs();
deployToS3(bucketName, distPath, region);