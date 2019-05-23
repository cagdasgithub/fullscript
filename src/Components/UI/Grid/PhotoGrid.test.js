import React from "react";
import PhotoGrid from "./PhotoGrid";
import renderer from "react-test-renderer";
import { render, queryAllByAltText, cleanup } from "react-testing-library";
afterEach(cleanup);
describe("Tests for Search controls", () => {
  it("renders correctly", () => {
    const grid = renderer.create(<PhotoGrid />).toJSON();
    expect(grid).toMatchSnapshot();
  });

  it("shows valid data", () => {
    const data = {
      photos: [
        {
          id: "1",
          urls: { regular: "small image 1" },
          links: { download: "download" },
          description: "test",
          user: { name: "Cagdas", location: "Ottawa" }
        },
        {
          id: "2",
          urls: { regular: "small image 2" },
          links: { download: "download" },
          description: "test",
          user: { name: "Cagdas", location: "Ottawa" }
        }
      ]
    };
    const { queryAllByAltText } = render(<PhotoGrid data={data} />);
    const download = queryAllByAltText(/complex/i);
    expect(download.length).toEqual(2);
  });
});
