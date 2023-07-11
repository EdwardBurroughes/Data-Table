import { useState } from "react";
import { Search } from "../Search";
import { Header } from "../Header";
import { Content } from "../Content";
import { ExportButton } from "../ExportButton";

type TableData = { [key: string]: string }[];

// TODO fix button flex
// TODO fix filter
// TODO add tests for the export

const filterDataBySearchTerm = (
  searchTerm: string,
  tableData: TableData
): TableData => {
  if (!searchTerm) return tableData;
  const clenedSearchTerm = searchTerm.trim().toLowerCase();
  return tableData.filter((tableRow) => {
    for (let objectKey in tableRow) {
      return tableRow[objectKey]
        .trim()
        .toLowerCase()
        .includes(clenedSearchTerm);
    }
  });
};

type TableProps = {
  headers: string[];
  tableData: { [key: string]: string }[];
};

export const Table = ({ headers, tableData }: TableProps) => {
  const [search, setSearch] = useState("");
  const filterData = filterDataBySearchTerm(search, tableData);

  return (
    <div className="dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12 border-solid border-2 border-slate-200 rounded-xl p-4">
        <div className="flex justify-end items-center py-3">
          <Search onChange={(searchInput) => setSearch(searchInput)} />
          {/* class ml-auto */}
          <div className="ml-auto">
            <ExportButton tableData={filterData} exportType="CSV" />
          </div>
        </div>
        <table className="min-w-full bg-white border-solid border-2 border-slate-200 rounded-xl">
          <Header columns={headers} />
          <Content entries={filterData} />
        </table>
      </div>
    </div>
  );
};
