import { fireEvent, render, screen } from "@testing-library/react";
import { Table } from "./Table";

describe("table component", () => {
  const headers = ["id", "Name"];
  const data = [{ name: "Jon" }, { name: "Sam" }];

  it("data no search term", () => {
    render(<Table headers={headers} tableData={data} />);

    data.forEach((rowData) => {
      const cellElement = screen.getByText(rowData["name"]);
      expect(cellElement).toBeInTheDocument();
    });
  });

  it("data with a search term", () => {
    render(<Table headers={headers} tableData={data} />);

    const searchInput = screen.getByPlaceholderText("Search");
    fireEvent.change(searchInput, { target: { value: "Jon" } });

    expect(screen.queryByText("Jon")).toBeInTheDocument();
    expect(screen.queryByText("Sam")).not.toBeInTheDocument();
  });
});
