type ExportTypes = "CSV" | "JSON";

type ExportButtonProps = {
  tableData: { [key: string]: string }[];
  exportType: ExportTypes;
};

type ExportTypeMeta = {
  content: string;
  fileName: string;
  dataStringify: (data: { [key: string]: string }[]) => string;
};

const convertDataToCsvString = (data: { [key: string]: string }[]): string => {
  const headers = Object.keys(data[0]);
  const headerString = headers.join(",").concat("\n");

  const dataString = data
    .map((dataRow) => {
      return Object.values(dataRow).join(",");
    })
    .join("\n");

  return `${headerString}${dataString}`;
};

const generateURL = (dataString: string, mimeType: string): string => {
  const blob = new Blob([dataString], { type: mimeType });
  return URL.createObjectURL(blob);
};

const retrieveExportTypeMeta = (exportType: ExportTypes): ExportTypeMeta => {
  const DataTypeMap = {
    CSV: {
      content: "text/csv;charset=utf-8;",
      fileName: "data.csv",
      dataStringify: convertDataToCsvString,
    },
    JSON: {
      content: "application/json",
      fileName: "data.json",
      dataStringify: JSON.stringify,
    },
  };
  return DataTypeMap[exportType];
};

const CreateDownloadElement = (url: string, fileName: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(url);
};

const exportData = (
  data: { [key: string]: string }[],
  exportType: ExportTypes
) => {
  const exportTypeMeta = retrieveExportTypeMeta(exportType);
  const stringedData = exportTypeMeta.dataStringify(data);
  const url = generateURL(stringedData, exportTypeMeta.content);
  // is this slow - check with Deniz
  CreateDownloadElement(url, exportTypeMeta.fileName);
};

export const ExportButton = ({ tableData, exportType }: ExportButtonProps) => {
  return (
    <button
      onClick={() => exportData(tableData, exportType)}
      className="flex flex-col items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
    >
      Export Data
    </button>
  );
};
