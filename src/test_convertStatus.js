const lib = require('./template')
function test_convertStatus(){
  let status = 0        
  let result = lib.convertStatus(status)
  if ( ! result.includes("ToDo")){
    console.log("ERREUR : le statut ne s'affiche pas")
  }    
}
test_convertStatus()

