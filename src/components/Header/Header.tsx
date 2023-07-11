type HeaderProps = {
  columns: string[];
};

export const Header = ({ columns }: HeaderProps) => (
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
