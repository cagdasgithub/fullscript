import validate from "./FormValidation";

describe("validation should work as intended", () => {
  it("should handle empty text", () => {
    const values = { email: "", password: "", text: "" };
    const errors = validate(values);
    expect(errors.email).toBe("Email address is required");
    expect(errors.password).toBe("Password is required");
    expect(errors.text).toBe("Text is required");
  });

  it("it should set an error if email is invalid", () => {
    const values = { email: "cagdas" };
    const errors = validate(values);
    expect(errors.email).toBe("Email address is invalid");
  });
  it("it should set an error if password is invalid", () => {
    const values = { password: "cagdas" };
    const errors = validate(values);
    expect(errors.password).toBe("Password must be 8 or more characters");
  });
  it("should work if password is longer than 8 chars", () => {
    const values = { password: "cagdasessiz" };
    const errors = validate(values);
    expect(errors.password).toBe("");
  });
  it("should work if email is correct", () => {
    const values = { email: "cagdasessiz@gmail.com" };
    const errors = validate(values);
    expect(errors.email).toBe("");
  });
});
