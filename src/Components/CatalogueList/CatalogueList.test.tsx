import { render, screen } from "@testing-library/react";
import CatalogueList from "./CatalogueList";
import "@testing-library/jest-dom";
import { PostI } from "../../Types/defaultTypes";
import * as reduxHooks from "react-redux";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

// Mocks

let posts: Array<PostI> = [
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
  {
    imageUrl: "post-3.png",
    name: "Порошок стиральный Автомат 100 пятен COMPACT",
    type: "weight",
    code: 4604049097550,
    maker: "Нэфис",
    brand: "BiMAX",
    description:
      "Labore tempor commodo commodo tempor ea pariatur aliquip ea occaecat.",
    price: 20,
    tags: ["hands"],
  },
];

jest.mock("react-redux");

const useDispatchMock = jest.spyOn(reduxHooks, "useDispatch");

describe("Catalogue List test", () => {
  beforeEach(() => {
    useDispatchMock.mockClear();
  });

  it("Should render null posts", () => {
    const component = render(<CatalogueList posts={[]} />);

    expect(component.getByTestId("catalogue-error")).toBeInTheDocument();
    expect(useDispatchMock).toBeCalledTimes(0);
  });
  it("should render 1 post", () => {
    let mockFn = jest.fn();
    useDispatchMock.mockReturnValue(mockFn);

    const component = render(
      <MemoryRouter>
        <CatalogueList posts={[posts[0]]} />
      </MemoryRouter>
    );

    expect(component).not.toBeNull();

    let cartButton = component.getAllByTestId("cart-btn-testid");
    expect(cartButton.length).toBe(1);

    userEvent.click(cartButton[0]);
    expect(mockFn).toBeCalledTimes(1);
  });
});
