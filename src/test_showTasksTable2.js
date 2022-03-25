const lib = require('./template')
function test_showTasksTable2(){ 
        
  let result = lib.showTasksTable2()
  if ( ! result.includes("Update")){
    console.log("ERREUR : la colonne Update ne s'affiche pas")
  }  
  
  if ( ! result.includes("Today")){
    console.log("ERREUR : la colonne Today ne s'affiche pas")
  } 
  
  if ( ! result.includes("To do")){
    console.log("ERREUR : la colonne Name ne s'affiche pas")
  }  

  if ( ! result.includes("Details")){
    console.log("ERREUR : la colonne Description ne s'affiche pas")
  }  

  if ( ! result.includes("Priority")){
    console.log("ERREUR : la colonne Priority ne s'affiche pas")
  }  

  if ( ! result.includes("Before")){
    console.log("ERREUR : la colonne Before ne s'affiche pas")
  }  

  if ( ! result.includes("Delete")){
    console.log("ERREUR : la colonne Delete ne s'affiche pas")
  }  
  
}
test_showTasksTable2()

