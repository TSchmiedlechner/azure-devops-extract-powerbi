import tl = require('azure-pipelines-task-lib/task');
import { Extractor } from './extractor';

async function run() {
  try {
    const sourceFolder: string = tl.getInput('sourceFolder', true);
    const destinationFolder: string = tl.getInput('destinationFolder', true);

    let extractor = new Extractor();
    extractor.extract(sourceFolder, destinationFolder);
  }
  catch (err) {
    console.error(err);
    tl.setResult(tl.TaskResult.Failed, err.message);
  }
}

run();