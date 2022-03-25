const lib = require('./template')
function test_displayWelcomePage(){ 
        
  let result = lib.displayWelcomePage()
  if ( ! result.includes("Bienvenue")){
    console.log("ERREUR : Welcome Page ne s'affiche pas")
  }    
  
}
test_displayWelcomePage()

