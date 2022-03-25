const lib = require('./template')
function test_showTasksTable(){ 
        
  let result = lib.showTasksTable()
  if ( result.includes("Update")){
    console.log("ERREUR : la colonne Update  s'affiche ")
  }  
}  
test_showTasksTable()

