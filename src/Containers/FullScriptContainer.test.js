import React from "react";
import FullScriptContainer from "./FullScriptContainer";
import renderer from "react-test-renderer";

describe("Tests for fullscript container", () => {
  it("renders correctly", () => {
    const photoRendered = renderer.create(<FullScriptContainer />).toJSON();
    expect(photoRendered).toMatchSnapshot();
  });

});
