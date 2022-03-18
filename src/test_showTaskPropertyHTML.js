const lib = require('./template')
function test_showTaskPropertyHTML(){
  let valueColumn = 1
  let idRoot="nameTask"
  let pNameProperty="Dormir"
  let idTask="1"       
  let result = lib.showTaskPropertyHTML(valueColumn,idRoot,pNameProperty,idTask)
  if ( ! result.includes("Dormir")){
    console.log("ERREUR : la valeur de la propriété ne s'affiche pas")
  }    
}
test_showTaskPropertyHTML()


