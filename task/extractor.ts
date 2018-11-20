import tl = require('azure-pipelines-task-lib/task');
import path from 'path';
const FileHound = require('filehound');
var SevenZip = require('node-7z');

export class Extractor {

  async extract(sourceFolder: string, destinationFolder: string): Promise<void> {
    console.log(sourceFolder);
    try {
      const files = await FileHound.create()
        .paths(sourceFolder)
        .ext('pbit')
        .find();
      for (let file of files) {
        await this.extractTemplate(file, destinationFolder);
      }
    } catch (error) {
      console.error(error);
    }
  }

  private async extractTemplate(filename: string, destinationFolder: string): Promise<void> {
    let zip = new SevenZip();
    let subfolder = path.join(destinationFolder, path.parse(filename).name);
    try {
      await zip.extractFull(filename, subfolder);
      await zip.extractFull(path.join(subfolder, 'DataMashup'), path.join(subfolder, 'DataMashupContent'));
    } catch (error) {
      console.error(`An error occured while extracting the file '${filename}'.`)
      console.error(error);
    }
  }
}