import { render } from "@testing-library/react";
import * as reduxHook from "react-redux";
import * as reactRouterHooks from "react-router-dom";
import userEvent from "@testing-library/user-event";
import PostPage from "../PostPage";

jest.mock("react-redux");
jest.mock("react-router-dom");

describe("Post Page tests", () => {
  const useDispatchMock = jest.spyOn(reduxHook, "useDispatch");
  const useSelectorMock = jest.spyOn(reduxHook, "useSelector");
  const useParamsMock = jest.spyOn(reactRouterHooks, "useParams");

  beforeEach(() => {
    useDispatchMock.mockClear();
    useSelectorMock.mockClear();
    useParamsMock.mockClear();
  });

  it("should call dispatch on cart click", () => {
    useParamsMock.mockReturnValue({ code: "4604049097549" });
    useSelectorMock.mockReturnValue([
      {
        imageUrl: "post-2.png",
        name: "Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        type: "weight",
        code: 4604049097549,
        maker: "Нэфис",
        brand: "ARIEL",
        description:
          "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
        price: 215,
        tags: [],
      },
    ]);
    let component = render(<PostPage />);

    userEvent.click(component.getByText("В КОРЗИНУ"));
    expect(useDispatchMock).toBeCalledTimes(1);
  });
});
