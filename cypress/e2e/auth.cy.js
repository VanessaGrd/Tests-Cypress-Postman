beforeEach(() => {
  cy.visit("http://localhost:3000/");
});
it("register and auth", () => {
  cy.get('a[href="/login"]').click();
  cy.get("h1").should("contain", "Se Connecter");
  cy.get("#email").type("vanessa.test@gmail.com");
  cy.get("#password").type("123456789");
  cy.contains("button", "Se Connecter").click();
  cy.url().should("contain","http://localhost:3000");
  cy.get("h1").should("contain", "Participez à la plus belle aventure football jamais connue");
});

