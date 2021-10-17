import { render, screen } from "@testing-library/react";
import AddAccount from "../pages/home/accounts/AddAcount";
import AccountsItem from "../pages/home/accounts/AccountsItem";

test("account is showing", () => {
  render(
    <App>
      <AccountsItem>
        <AddAccount />
      </AccountsItem>
    </App>
  );
  const copyrightText = screen.getByText("Account type: *");
  expect(copyrightText).toBeInTheDocument();
});
