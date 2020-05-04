describe("/", () => {
  it("unverified user sees email confirmation screen and user menu", () => {
    cy.login("UNVERIFIED");
    cy.findByText("Verify Your Account");
    cy.get("header details");
  });
});
