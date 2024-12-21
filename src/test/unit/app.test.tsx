import { render, screen } from "../test-util";
import userEvent from "@testing-library/user-event";

import App from "../../app";

test("app component", async () => {
  render(<App />);
  await userEvent.click(screen.getByRole("button"));
  expect(screen.getByRole("button")).toHaveTextContent(`count:1`);
});
