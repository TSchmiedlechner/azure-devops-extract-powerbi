# Extract-Power BI templates
## An Azure Pipelines task
Azure DevOps task to extract Power BI templates (useful for versioning them).
- Extracts the *.pbit file
- Extracts the `DataMashup` file, which is an archive as well
- Add the `.json` file extension to `DataModelSchema`, `DiagramState`, and `Report/Layout`. This allows them to be compared in the diff view of Azure DevOps.

This extension is based on the [*Extract Files*](https://github.com/Microsoft/azure-pipelines-tasks) task from Microsoft and uses [7-Zip](https://www.7-zip.org/) to extract the files.