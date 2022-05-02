import React from "react";
import Users, { Props } from "../Users";
import { cleanup, render, fireEvent, screen } from "@testing-library/react";

describe("test the Users component", () => {
  afterEach(cleanup);
  const props: Props = {
    setSelectedUser: () => null,
    selectedUser: 3070,
  };
  it("should render the Users component", () => {
    const view = render(<Users {...props} />);
    expect(view).toMatchSnapshot();
  });
  it("should render the histoyBox styles", () => {
    const firstInitialState = [
      {
        id: 3684,
        name: "Ganak Varma",
        email: "varma_ganak@stanton.io",
        gender: "female",
        status: "inactive",
      },
    ];
    jest
      .spyOn(React, "useState")
      .mockImplementationOnce(() => [firstInitialState, () => null]);

    const view = render(<Users {...props} />);
    const converButton = screen.getByTestId("getUsersButton");
    expect(converButton).toBeTruthy();
    fireEvent.click(converButton);
    expect(view).toMatchSnapshot();
  });
});
