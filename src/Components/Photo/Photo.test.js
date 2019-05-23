import React from "react";
import renderer from "react-test-renderer";
import Photo from "./Photo";

it("renders correctly", () => {
  const photo = {
    id: "1",
    urls: { regular: "www.google.com" },
    links: { download: "www.google.com" },
    description: "test",
    user: { name: "Cagdas", location: "Ottawa" }
  };
  const photoRendered = renderer.create(<Photo photo={photo} />).toJSON();
  expect(photoRendered).toMatchSnapshot();
});
