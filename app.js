const express = require('express')
const app = express()
const port = 3001

const db = require('./src/db_utils')
let tpl = require('./src/template')

const IS_FOR_TODAY="on"
const TAB_STATUS_BDD=['0','1','2','3']

app.use(express.static('static'));
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  let html=tpl.displayPageWelcome()
  res.send(html)
})

app.get('/get_tasks', (req, res) => { 

  db.dbGetTasks(

    function (error, results, fields) {  
      let html = tpl.getTasksToDo(results)
      res.send(html)
    },
  )
})

app.get('/get_tasks_completed', (req, res) => {  
  db.dbGetTasksCompleted(

    function (error, results, fields) {
      let html = tpl.getTasksDone(results)
      res.send(html)
    },
  )
})

app.get('/get_tasks_today', (req, res) => {  
  db.dbGetTasksToday(
    function (error, results, fields) {
      let html = tpl.getTasksToday(results)
      res.send(html)
    },
  )
})

function initStatus(ptab,pValue){ 
  if (ptab.includes(pValue)){
    return pValue
} else {
    return tpl.revertStatus(pValue)
}  
}

function checkEqual(pValue,pToday){
  if (pValue === pToday){
    return 1
  } else {
    return 0
  }
}

app.post('/update_status', (request, response) => {
  let valueStatusToDB = initStatus(TAB_STATUS_BDD,request.body['updatedStatus'])
  let isToday = checkEqual(request.body['checkToday'],IS_FOR_TODAY)
    
  let formData=[isToday,valueStatusToDB,request.body['taskId']] 
   db.updateStatus(formData,function (){
      response.redirect("/get_tasks")
    },
  )
  console.log(request.body)
})

app.post('/delete_task', (request, response) => {
  let formData=[request.body['deleteTaskId']]
  db.deleteTask(formData,function (){
      response.redirect("/get_tasks")
    },
  )
  console.log(request.body)
})

app.post('/insert_tasks',(request,response) => {
  console.log("Priorite:",request.body['priority'])
  console.log(request.body)
  let formData = [request.body['name'], request.body['description'], request.body['priority'],request.body['deadline']]
  db.insertTask(formData,function(){
    response.redirect("/get_tasks")
  },
  )
  console.log(request.body)
})

app.get('/get_tasks_json', (req, res) => { 

  db.dbGetTasks(
    function (error, results, fields) {
    res.json(results)
    },
  )
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})









