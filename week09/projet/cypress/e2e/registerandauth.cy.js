describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("register and auth", () => {
    cy.get('a[href="/signup"]').click();
    cy.get("h1").should("contain", "Inscription");
    cy.get("p").should("contain", "Rejoignez-nous");
    cy.get("#lastname").type("Test");
    cy.get("#firstname").type("Vanessa");
    cy.get("#birthday").type("1988-02-03");
    cy.get("#email").type("vanessa.test@gmail.com");
    cy.get("#password").type("123456789");
    cy.get("#confirmPassword").type("123456789");
    cy.get("#terms").check();
    cy.contains("button", "Je M'inscris").click();
    cy.url().should("contain", "http://localhost:3000/login").wait(5000);
    cy.get("#email").type("vanessa.test@gmail.com");
    cy.get("#password").type("123456789");
    cy.contains("button", "Se Connecter").click();
    cy.url().should("contain","http://localhost:3000");
    cy.get("h1").should("contain", "Participez à la plus belle aventure football jamais connue");
 });
});
