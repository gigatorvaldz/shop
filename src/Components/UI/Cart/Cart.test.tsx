import { render, screen } from "@testing-library/react";
import Cart from "./Cart";

test("Cart component snapshot test", () => {
  render(<Cart total={123} price={12400} />);
  let cart = screen.getByTestId("cart-test-id");

  expect(cart).toMatchSnapshot();
});

test("Cart component input test", () => {
  render(<Cart total={123321} price={12400} />);
  let total = screen.getByText("123321");
  let price = screen.getByText("12400 ₸");

  expect(total).toBeInTheDocument;
  expect(price).toBeInTheDocument;
});
