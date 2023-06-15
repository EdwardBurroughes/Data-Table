import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Search } from "./Search";

describe("search component", () => {
  //TODO rm onlys
  it.only("has a search icon", async () => {
    render(<Search onChange={() => null} />);
    // find by if it's there
    const searchIconElement = await screen.findByTestId("search-icon");
    expect(searchIconElement).toBeInTheDocument();
  });

  it.only("call onChange with search input", async () => {
    const mockOnChange = jest.fn();
    render(<Search onChange={mockOnChange} />);
    userEvent.type(screen.getByTestId("search-input"), "A");
    expect(mockOnChange).toBeCalledWith("A");
  });
});
