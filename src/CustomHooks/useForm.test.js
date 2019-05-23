import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import useForm from "./useForm";
import HookWrapper from "../TestUtils/Hooks";
import validate from "../Utils/FormValidation";

Enzyme.configure({ adapter: new Adapter() });

describe("useForm", () => {
  it("should render", () => {
    const myMock = jest.fn();
    let wrapper = shallow(
      <HookWrapper hook={() => useForm(myMock, validate)} />
    );

    expect(wrapper.exists()).toBeTruthy();
  });

  it("should init values as valid", () => {
    const myMock = jest.fn();
    let wrapper = shallow(
      <HookWrapper hook={() => useForm(myMock, validate)} />
    );
    let { hook } = wrapper.find("div").props();
    const { values, errors } = hook;
    expect(values.email).toBe("");
    expect(values.password).toBe("");
    expect(values.text).toBe("");
    expect(errors.email).toBe("");
    expect(errors.password).toBe("");
    expect(errors.text).toBe("");
  });
});

it("should handle change", () => {
  const myMock = jest.fn();
  let wrapper = shallow(<HookWrapper hook={() => useForm(myMock, validate)} />);
  let { hook } = wrapper.find("div").props();
  let { values, errors, handleChange, handleSubmit } = hook;

  const event = {
    target: { name: "email", value: "cagdas" },
    persist: () => {},
    preventDefault: () => {}
  };

  handleChange(event);
  // destructuring objects - {} should be inside brackets - () to avoid syntax error
  ({ hook } = wrapper.find("div").props());
  ({ values, errors, handleChange, handleSubmit } = hook);
  expect(values.email).toBe("cagdas");

  handleSubmit(event);
  ({ hook } = wrapper.find("div").props());
  ({ values, errors, handleChange, handleSubmit } = hook);
  expect(errors.email).toBe("Email address is invalid");

  event.target.value = "cagdas.essiz@gmail.com";
  handleChange(event);
  ({ hook } = wrapper.find("div").props());
  ({ values, errors, handleChange, handleSubmit } = hook);
  expect(values.email).toBe("cagdas.essiz@gmail.com");

  handleSubmit(event);
  ({ hook } = wrapper.find("div").props());
  ({ values, errors, handleChange, handleSubmit } = hook);
  expect(errors.email).toBe("");
});
