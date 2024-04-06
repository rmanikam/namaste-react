import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Case", () => {
  // beforeAll(() => {
  //   console.log("Before All");
  // });

  // beforeEach(() => {
  //   console.log("Before Each");
  // });

  // afterAll(() => {
  //   console.log("After All");
  // });

  // afterEach(() => {
  //   console.log("After Each");
  // });

  it("Should load contact us Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    // Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    //   const button = screen.getByText("submit");

    // Assertion
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact Component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");
    //   const button = screen.getByText("button");

    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes on the Contact Component", () => {
    render(<Contact />);

    // Querying
    const inputBoxes = screen.getAllByRole("textbox");

    //   console.log(inputBoxes);

    // Assertion
    //   expect(inputBoxes).toBeInTheDocument();

    expect(inputBoxes.length).toBe(2);
  });
});
