import { useState } from "react";
import { Search } from "./Search";

const data = [
  {
    id: "E07000111+18/03171/FUL",
    address: "Wilburton Leydenhatch Lane Swanley KENT BR8 7PS",
    type: "Full Application",
    classification: "RESIDENTIAL",
  },
  {
    id: "E09000008+20/03876/FUL",
    address: "112 Grange Park Road Thornton Heath CR7 8QB",
    type: "Full planning permission",
    classification: "RESIDENTIAL",
  },
  {
    id: "E07000242+3/12/0688/FP",
    address:
      "Haileybury And Is College, College Road, Hertford Heath, Hertford, Hertfordshire, SG13 7NU",
    type: "Full Application",
    classification: "RESIDENTIAL",
  },
  {
    id: "E09000008+13/02969/P",
    address: "2A & 3 Central Place, South Norwood, London, SE25 4PR",
    type: "Full planning permission",
    classification: "RESIDENTIAL",
  },
  {
    id: "E09000017+45099/APP/2013/2163",
    address: "15 REGENTS CLOSE HAYES",
    type: "Full planning permission",
    classification: "RESIDENTIAL",
  },
  {
    id: "E09000026+3349/14",
    address: "10, Danehurst Gardens, Ilford, IG4 5HQ",
    type: "Householder",
    classification: "RESIDENTIAL",
  },
  {
    id: "E09000033+14/06200/LBC",
    address: "33 Eaton Terrace London SW1W 8TP",
    type: "Listed Building Consent Application",
    classification: "RESIDENTIAL",
  },
  {
    id: "E09000008+19/00491/FUL",
    address: "1 Abingdon Road Norbury London SW16 5QP",
    type: "Full planning permission",
    classification: "RESIDENTIAL",
  },
  {
    id: "E08000001+01092/17",
    address: "LEA GATE FARM, LEA GATE, BOLTON, BL2 4BG",
    type: "Full Planning Application",
    classification: "RESIDENTIAL",
  },
  {
    id: "E06000045+20/00574/FUL",
    address: "3 Burgess Gardens Southampton SO16 7AN",
    type: "Full Application",
    classification: "RESIDENTIAL",
  },
];

type tableData = Array<{ [key: string]: any }>;

const filterDataBySearchTerm = (
  searchTerm: string,
  data: tableData
): tableData => {
  if (!searchTerm) {
    return data;
  }
  const clenedSearchTerm = searchTerm.toLowerCase();
  return data.filter((row) => {
    for (let key in row) {
      if (row[key].toLowerCase().includes(clenedSearchTerm)) {
        return true;
      }
    }
    return false;
  });
};

type HeaderProps = {
  columns: string[];
};

type ContentProps = {
  entries: Array<{ [key: string]: any }>;
};

export function Header({ columns }: HeaderProps) {
  return (
    <tr className="bg-gray-100 border-b rounded-md border-blue-gray-100 bg-blue-gray-50 p-4">
      {columns.map((column) => (
        <th
          className="text-left py-3 px-4 uppercase font-semibold text-sm"
          key={column}
        >
          {column}
        </th>
      ))}
    </tr>
  );
}

function ObjectRow({ obj }: { [key: string]: any }) {
  return (
    <tr className="even:bg-gray-50">
      {Object.keys(obj).map((column, columnIndex: number) => (
        // is there a nice library that hashes a unique key i.e. uuid
        <td key={columnIndex} className="px-4 py-3">
          {obj[column]}
        </td>
      ))}
    </tr>
  );
}

function Content({ entries }: ContentProps) {
  return (
    <tbody>
      {entries.map((entry) => (
        <ObjectRow obj={entry} />
      ))}
    </tbody>
  );
}

export function Table() {
  const headers = Object.keys(data[0]);
  const [search, setSearch] = useState("");
  const filterData = filterDataBySearchTerm(search, data);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <Search onChange={(searchInput) => setSearch(searchInput)} />
        <table className="min-w-full bg-white ">
          <Header columns={headers} />
          <Content entries={filterData} />
        </table>
      </div>
    </section>
  );
}
