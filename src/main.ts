import * as core from '@actions/core';
import * as exec from '@actions/exec'

async function run() {
  try {
    await exec.exec('julia', ['--color=yes', '-e', 'using Pkg; Pkg.activate("juliaformatter", shared=true); Pkg.add(["DocumentFormat", "FilePaths"]); using DocumentFormat, FilePaths; DocumentFormat.format(p".")'])    
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
