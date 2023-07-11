import { Header } from "./Header";
import { render, screen } from "@testing-library/react";

describe("header component tests", () => {
  const columns = ["hello", "world"];
  beforeAll(() => {
    render(<Header columns={columns} />);
  });

  it("headers contain correct values", () => {
    const columnHeaderElement = screen.getAllByRole("columnheader");
    columnHeaderElement.forEach((header, index) => {
      expect(header).toHaveTextContent(columns[index]);
    });
  });

  it("header row has expected class", () => {
    // is there much point test this
    const columns = ["hello", "world"];
    render(<Header columns={columns} />);
    const headerRow = screen.getByRole("row");
    expect(headerRow).toHaveClass(
      "border-b border-blue-gray-100 bg-blue-gray-50 p-4"
    );
  });

  it("Test each header cell has the expected class", () => {
    // is there much point test this
    const columns = ["hello", "world"];
    render(<Header columns={columns} />);
    const columnHeaderElement = screen.getAllByRole("columnheader");
    columnHeaderElement.forEach((header, index) => {
      expect(header).toHaveClass(
        "text-left py-3 px-4 uppercase font-semibold text-sm"
      );
    });
  });
});
