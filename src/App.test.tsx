import { act, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import "@testing-library/jest-dom";

describe("App routes test", () => {
  it("error and catalogue pages test", () => {
    const currentRender = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    let errorLink = screen.getByTestId("error-link-testid");
    expect(currentRender.getByTestId("error-page-testid")).toBeInTheDocument();

    act(() => {
      userEvent.click(errorLink);
    });

    expect(currentRender.getByTestId("catalogue-page-testid")).toBeInTheDocument();
  });
});
