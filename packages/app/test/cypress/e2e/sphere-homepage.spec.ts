// todo: actually seed the db instead of asserting state from test sphere

describe("/", () => {
  beforeEach(() => {
    cy.visit("/?__dev_sphere_domain=kobolds.club");
  });

  it("does not show meetings that are not published yet", () => {
    cy.findAllByText("This Meeting Will Be Published in the Year 3000").should(
      "not.exist"
    );
  });

  it("does not show meetings which are not confirmed", () => {
    cy.findAllByText(
      "Really Offensive Meeting, Which Won't Be Confirmed"
    ).should("not.exist");
  });

  it("unlogged visitor sees festival agenda, intro text and footer text", () => {
    cy.findAllByRole("heading")
      // there is a heading with meeting name
      .should("contain.text", "Popkulturowe motywy na sesjach RPG")
      // and there is also a heading with room name
      .should("contain.text", "Sesje RPG");

    // an hour is displayed
    cy.findAllByText(/\d\d:\d\d/g);
  });
});
