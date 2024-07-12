describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/workshops");
  });
  it("selected a workshop", () => {
    cy.get("h1").should("contain", "Workshop");
    cy.get("p").should("contain", "Venez découvrir nos ateliers !");
    cy.get("div div button div img").first().trigger('mouseover')
    cy.get("p").should("contain", "Atelier Tir 1");
    cy.contains("p", "Atelier Tir 1").click();
    cy.get("h2").should("contain", "Atelier Tir 1");
    cy.get('button img[alt="close"]').click()
 });
});
