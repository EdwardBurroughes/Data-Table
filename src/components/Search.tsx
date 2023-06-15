import { useEffect, useState } from "react";
import { SearchIcon } from "./SearchIcon";

type SearchProps = {
  onChange: (searchInput: string) => void;
};

export const Search = ({ onChange }: SearchProps) => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    onChange(search);
  }, [search]);
  return (
    <div className="w-full md:w-1/3">
      <form className="flex items-center py-4">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <SearchIcon />
          </div>
          <input
            type="text"
            data-testid="search-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Search"
            required={true}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
