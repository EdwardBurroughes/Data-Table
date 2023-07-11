import { useState } from "react";
import { Search } from "../Search";
import { Header } from "../Header";
import { Content } from "../Content";

type TableData = { [key: string]: string }[];

const filterDataBySearchTerm = (
  searchTerm: string,
  tableData: TableData
): TableData => {
  if (!searchTerm) return tableData;

  const clenedSearchTerm = searchTerm.toLowerCase();
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
    <section className="dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <Search onChange={(searchInput) => setSearch(searchInput)} />
        <table className="min-w-full bg-white ">
          <Header columns={headers} />
          <Content entries={filterData} />
        </table>
      </div>
    </section>
  );
};
