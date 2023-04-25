export class AddtoCart {

    setFilter(Text1) {
        cy.get('#filter_keyword').type(Text1)
    }
    setColour(colour) {
        cy.get('#option350').select(colour)
    }
    setQuantity(Quantity) {
        cy.get('#product_quantity').clear().type(Quantity)
    }

}