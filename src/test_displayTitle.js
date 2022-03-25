const lib = require('./template')
function test_displayTitle(){ 
  let titre="Ma To Do List"       
  let result = lib.displayTitle(titre)
  if ( ! result.includes("Ma To Do List")){
    console.log("ERREUR : le titre ne s'affiche pas correctement")
  }    
}
test_displayTitle()

