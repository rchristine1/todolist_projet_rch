const lib = require('./template')
function test_displayActions(){ 
  let filter = "displayWelcome"
  let filter2 = "displayTable"
  let filter3 = "displayFull"
  let result = lib.displayActions(filter)
  if ( result.includes("Add")){
    console.log("ERREUR : Add s'affiche pour la page d'accueil")
  }    
  let result2 = lib.displayActions(filter2)
  if ( ! result2.includes("Add")){
    console.log("ERREUR : Add ne s'affiche pas correctement")
  }  
  
  let result3 = lib.displayActions(filter3)
  if ( ! result3.includes("Add")){
    console.log("ERREUR : Add ne s'affiche pas correctement")
  }  
  
}
test_displayActions()

