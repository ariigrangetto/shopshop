/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, screen } from "@testing-library/react";

import Filter from "./Filter";
import FilterProvider from "../context/FilterContext";

test("find select category button", () => {
  render(
    <FilterProvider>
      <Filter />
    </FilterProvider>
  );

  const button = screen.getByLabelText(/select category/i);
  fireEvent.click(button);
});
