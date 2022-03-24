var mysql      = require('mysql');

function connectToMySQL(){
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'taskdb'
  });  
  connection.connect();
  return connection
}


function dbGetTasks(fonction_traitement_resultat_bdd){
  let connection = connectToMySQL()
  let query = "SELECT * FROM task  WHERE status <> 2 AND status <> 3 ORDER BY priority ASC, deadline ASC"  
  connection.query(query, fonction_traitement_resultat_bdd);
  connection.end();
}

function dbGetTasksCompleted(fonction_traitement_resultat_bdd){
  let connection = connectToMySQL()
  let query = "SELECT * FROM task WHERE status = 2 OR status = 3 ORDER BY priority ASC,deadline ASC"
  connection.query(query, fonction_traitement_resultat_bdd);
  connection.end();
}


function updateStatus(values_to_update,fonction_apres_update){
  let connection = connectToMySQL()
  let query = `UPDATE task SET today=?,status=? WHERE id=?`        
            
  connection.query(query, values_to_update, (error,results) => {
    if (error){
      console.log(error)
    }
    console.log("results:",results)
    console.log("après update")
    connection.commit()
    connection.end()    
    fonction_apres_update()
  })
}

function insertTask(values_to_insert,fonction_apres_insertion){
  let connection = connectToMySQL()
  let query = `INSERT INTO task (name,description,priority,deadline) 
               VALUES (?,?,?,?)`
  console.log(query)
  connection.query(query,values_to_insert,(error,results)=>{
    if (error){
      console.log(error)
    }
    console.log("results:",results)
    console.log("après insertion")
    connection.commit()
    connection.end()    
    fonction_apres_insertion()
  })            
}

function deleteTask(values_to_delete,fonction_apres_suppression){
  let connection = connectToMySQL()
  let query = `DELETE FROM task WHERE id=?`
  console.log(query)
  connection.query(query,values_to_delete,(error,results)=>{
    if (error){
      console.log(error)
    }
    console.log("results:",results)
    console.log("après suppression")
    connection.commit()
    connection.end()    
    fonction_apres_suppression()
  })            
}


module.exports = {
  dbGetTasks: dbGetTasks,
  updateStatus: updateStatus,
  insertTask : insertTask,
  dbGetTasksCompleted:dbGetTasksCompleted,
  deleteTask:deleteTask,
  connectToMySQL:connectToMySQL,
  

}