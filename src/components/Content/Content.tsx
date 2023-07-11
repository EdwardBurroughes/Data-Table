type ContentProps = {
  entries: { [key: string]: string }[];
};

// any failing when switched to string
function ObjectRow({ rowObj }: { [key: string]: any }) {
  return (
    <tr className="even:bg-gray-50">
      {Object.keys(rowObj).map((column: string, columnIndex: number) => (
        <td key={columnIndex} className="px-4 py-3">
          {rowObj[column]}
        </td>
      ))}
    </tr>
  );
}

export function Content({ entries }: ContentProps) {
  return (
    <tbody>
      {entries.map((entry) => (
        <ObjectRow rowObj={entry} />
      ))}
    </tbody>
  );
}
