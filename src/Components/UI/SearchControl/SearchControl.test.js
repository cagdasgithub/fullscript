import React from "react";
import renderer from "react-test-renderer";
import {
  render,
  fireEvent,
  cleanup
} from "react-testing-library";
import SearchControl from "./SearchControl";

afterEach(cleanup);

describe("Tests for Search controls", () => {
  it("renders correctly", () => {
    const queryHandle = jest.fn();
    const loading = false;
    const photoRendered = renderer
      .create(
        <SearchControl updateQueryHandle={queryHandle} isLoading={loading} />
      )
      .toJSON();
    expect(photoRendered).toMatchSnapshot();
  });

  it("calls back right amount of times", () => {
    const queryHandle = jest.fn();
    const loading = false;
    const { getByLabelText } = render(
      <SearchControl updateQueryHandle={queryHandle} isLoading={loading} />
    );
    const searchInput = getByLabelText(/Search Query/i);
    fireEvent.change(searchInput, { target: { value: "a" } });

    expect(queryHandle).toHaveBeenCalledTimes(1);
    fireEvent.change(searchInput, { target: { value: "ab" } });
    expect(queryHandle).toHaveBeenCalledTimes(2);
  });

  it("calls back with right values on search by typing", () => {
    const queryHandle = jest.fn(x => x);
    const loading = false;
    const { getByLabelText } = render(
      <SearchControl updateQueryHandle={queryHandle} isLoading={loading} />
    );
    const searchInput = getByLabelText(/Search Query/i);
    fireEvent.change(searchInput, { target: { value: "cagdas" } });
    expect(queryHandle).toBeCalledWith("cagdas");
  });

  it("calls back with right values on search by clicking button", () => {
    const queryHandle = jest.fn(x => x);
    const loading = false;
    const { getByDisplayValue, getByLabelText, getByText } = render(
      <SearchControl updateQueryHandle={queryHandle} isLoading={loading} />
    );
    const switchButton = getByDisplayValue(/immediateSearch/i);

    fireEvent.click(switchButton);

    const searchInput = getByLabelText(/Search Query/i);
    fireEvent.change(searchInput, { target: { value: "cagdas" } });

    fireEvent.click(getByText("Search"));
    expect(queryHandle).toHaveBeenLastCalledWith("cagdas");
  });
});
