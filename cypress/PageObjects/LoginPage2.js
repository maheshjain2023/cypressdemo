class Login
{
   txtUsername='[name="username"]'
   txtPassword='[name="password"]'
   btnSubmit= '[type="submit"]'

    setUsername(Username)
    {
      cy.get(this.txtUsername).type(Username)
    }
    setPassword(Password)
    {
       cy.get(this.txtPassword).type(Password)
    }
    ClickSubmit()
    {
        cy.get(this.btnSubmit).click()
    } 

}
  export default Login