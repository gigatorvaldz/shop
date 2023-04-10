import { render } from "@testing-library/react";
import * as reduxHook from "react-redux";
import PageList from "./PageList";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux");

describe("Page List tests", () => {
  const useSelectorMock = jest.spyOn(reduxHook, "useSelector");

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it("Should call props onNextClick", () => {
    useSelectorMock.mockReturnValue(3);
    let onClick = jest.fn();
    let onPrevClick = jest.fn();
    let onNextClick = jest.fn();

    let component = render(
      <PageList
        pageArray={[1, 2, 3]}
        onClick={onClick}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
    );

    userEvent.click(component.getByTestId("next-button"));
    expect(onNextClick).toBeCalledTimes(1);
  });

  it("Should call props onClick", () => {
    useSelectorMock.mockReturnValue(3);
    let onClick = jest.fn();
    let onPrevClick = jest.fn();
    let onNextClick = jest.fn();

    let component = render(
      <PageList
        pageArray={[1, 2, 3]}
        onClick={onClick}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
    );

    userEvent.click(component.getAllByTestId("page-button")[0]);
    expect(onClick).toBeCalledTimes(1);
  });

  it("Should call props onPrevClick", () => {
    useSelectorMock.mockReturnValue(3);
    let onClick = jest.fn();
    let onPrevClick = jest.fn();
    let onNextClick = jest.fn();

    let component = render(
      <PageList
        pageArray={[1, 2, 3]}
        onClick={onClick}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
      />
    );

    userEvent.click(component.getByTestId("prev-button"));
    expect(onPrevClick).toBeCalledTimes(1);
  });
});
