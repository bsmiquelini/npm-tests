const github = require('@actions/github');
const core = require('@actions/core');
const exec = require('@actions/exec');

function getPrNumber() {
  const pullRequest = github.context.payload.pull_request;
  if (!pullRequest) {
    return '';
  }

  return pullRequest.number;
}

getPrNumber();
core.notice('PR number is: ' + getPrNumber());