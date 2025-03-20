const github = require('@actions/github');
const core = require('@actions/core');
const exec = require('@actions/exec');

function Deploy() {
  // Coleta parametros de entrada
  const bucketName = core.getInput('bucket-name');
  const distPath = core.getInput('dist-path');
  const region = core.getInput('region');
  
  // Deploy to S3
  exec.exec(`echo Listando arquivos do diretório ${distPath}`);

  exec.exec(`ls -la`);

  exec.exec(`echo aws s3 sync ${distPath} s3://${bucketName} --recursive --region ${region}`);
  core.notice('Deploy do path ' + distPath + ' para o bucket ' + bucketName + ' na região ' + region);
}

Deploy();