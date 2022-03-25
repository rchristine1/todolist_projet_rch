const lib = require('./template')
function test_displayActionsHTML(){ 
        
  let result = lib.displayActionsHTML()
  if ( ! result.includes("Add")){
    console.log("ERREUR : le bouton Add ne s'affiche pas")
  }    
  if ( ! result.includes("Only Done")){
    console.log("ERREUR : le bouton Only Done ne s'affiche pas")
  } 
  if ( ! result.includes("Table")){
    console.log("ERREUR : le bouton Table ne s'affiche pas")
  } 
  if ( ! result.includes("Back")){
    console.log("ERREUR : le bouton Back ne s'affiche pas")
  } 
}
test_displayActionsHTML()

