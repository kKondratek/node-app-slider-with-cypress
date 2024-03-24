describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "London" and "United Kingdom""', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris" and "France"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
  });
});

describe('Swiper Gallery Test with Keyboard Arrows', function () {
  it('Checks if third slide contains "Paris" and "France" using keyboard arrows', function () {
    cy.visit('http://localhost:3000');
    cy.get('body').click();
    cy.get('body').type('{rightarrow}');
    cy.wait(2000);
    cy.get('body').type('{rightarrow}');
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
    cy.get('.swiper-slide-active').should('contain', 'France');
  });
});
