import { render, screen } from "@testing-library/react";
import CartButton from "./CartButton";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

test("Cart Button test", () => {
  let mockFunction = jest.fn(() => {});

  render(<CartButton onClick={mockFunction} />);
  let cartButton = screen.getByTestId("cart-btn-testid");

  expect(cartButton).toBeInTheDocument();
  userEvent.click(cartButton);
  expect(mockFunction).toBeCalledTimes(1);
  userEvent.click(cartButton);
  expect(mockFunction).toBeCalledTimes(2);
});
