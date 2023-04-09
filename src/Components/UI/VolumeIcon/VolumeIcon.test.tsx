import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import VolumeIcon from "./VolumeIcon";

test("Volume icon test", () => {
  render(
    <VolumeIcon sizeType="volume">
      <p>test mock</p>
    </VolumeIcon>
  );
  let childElement = screen.getByText("test mock");
  expect(childElement).toBeInTheDocument();
});
