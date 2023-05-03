describe("Example to demonstrate how to upload the file in cypress", function () {
  it("Upload the file using .selectFile with select mode", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").selectFile(
      "cypress/fixtures/images/nature_evening.png"
    );
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").contains("nature_evening.png");
    cy.get("h3", { timeout: 30000 }).should("have.text", "File Uploaded!");
  });
  it("Upload the file using .selectFile with with drag and drop mode", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").selectFile(
      "cypress/fixtures/images/nature_night.png",
      { action: "drag-drop" }
    );
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").contains("nature_night.png");
    cy.get("h3", { timeout: 30000 }).should("have.text", "File Uploaded!");
  });
  it("Another example Upload the File Using SelectFile Command", () => {
    cy.visit("http://www.autopract.com/#/home/fashion");
    cy.get("button[aria-label='Close'] ").click();
    cy.get(".btn.btn-success").scrollIntoView();
    cy.get('input[type="file"]').selectFile("cypress/fixtures/images/nature_night.png", {force: true});
  });
  it("Upload multiple file using selectFile", () => {
    cy.visit("https://postimages.org/");
      cy.get("#uploadFile").selectFile(["cypress/fixtures/images/nature_evening.png","cypress/fixtures/images/nature_night.png"],{ action: "drag-drop" });
      cy.origin('https://postimg.cc/', () => {
      cy.get('.controls', { timeout: 20000 }).contains('Upload completed!');
      cy.get(".imagetitle").eq(0).should("have.text", "nature_evening");
      cy.get(".imagetitle").eq(1).should("have.text", "nature_night");
    });
  })
  })
describe('Upload the file using the plugin cypress-file-upload', function () {
    it('File Upload using cypress-file-upload npm package', () => {
      cy.visit('https://the-internet.herokuapp.com/upload')
        const filePath = 'images/nature_evening.png'
        cy.get('input[type="file"]').attachFile(filePath)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').contains('nature_evening.png')
        cy.get("h3", { timeout: 30000 }).should("have.text", "File Uploaded!");
    })
})