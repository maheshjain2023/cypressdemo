class Login
{
    setUsername(Username)
    {
      cy.get('[name="username"]').type(Username)
    }
    setPassword(Password)
    {
       cy.get('[name="password"]').type(Password)
    }
    ClickSubmit()
    {
        cy.get('[type="submit"]').click()
    } 

}
  export default Login