const TASK_STATUS_INPROGRESS = "InProgress"
const TASK_STATUS_TODO = "ToDo"
const TASK_STATUS_DONE = "Done"
const TASK_STATUS_CANCELLED = "Cancelled"
const TASK_PRIORITY_HIGH = "High"
const TASK_PRIORITY_MEDIUM = "Medium"
const TASK_PRIORITY_LOW = "Low"
const VALUE_STATUS_INPROGRESS = 1
const VALUE_STATUS_TODO = 0
const VALUE_STATUS_DONE = 2
const VALUE_STATUS_CANCELLED = 3
const VALUE_PRIORITY_HIGH = 1
const VALUE_PRIORITY_MEDIUM = 2
const VALUE_PRIORITY_LOW = 3


//LOADING TASKS FROM BDD @/get_tasks
function getTasksToDo(results){    
    return template(results,'displayMenuFull')
}

//LOADING TASKS FROM BDD @/get_tasks_table
function getTasksToDoTable(results){    
    return template(results,'displayTable')
}


//LOADING TASKS FROM BDD ONLY DONE @/get_tasks_completed
function getTasksDone(results){    
    return template(results,'displayMenuBack')
}

//LOADING WELCOME PAGE @/
function displayPageWelcome(results){
    return template(results,'displayWelcome')
}

//TEMPLATE OF THE HTML PAGE
function template(results,filter){    
    return `
      <html>
        <head>
            ${headHtml()}        
        </head>        
        <body>
            <div class="container-fluid">          
                ${headerPage()} 
                <div class="container rounded-3 border border-2 my-5" style="width:65vw;" >
                    <div class="row">                        
                        <div class="col-12 text right">
                            <div class="row">
                                <div class="col-12 text-center">
                                    ${displayTitle()}
                                    ${displayActions(filter)}
                                </div> 
                            </div>       
                            <hr />  
                            <div class="row">                                                                
                                <div class="col-12 text-center">
                                    ${displayRightPart(results,filter)}                                        
                                </div>
                            </div>
                        </div>
                    </div>                            
                </div>
            </div>            
            <script src="/js/display_notdisplay_AddTask.js"></script> 
            <script src="/js/template_utils.js"></script>
        </body>
      </html>
    `
}

//
function headHtml(){
    return`
        <!-- Latest compiled and minified CSS--> 
            <!--<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">-->

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" 
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        
        
            <!-- Latest compiled and minified JavaScript -->
            <!--<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>-->

            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" 
            crossorigin="anonymous"></script>            

        
            <link href="style.css" rel="stylesheet"></link>

            <meta name="viewport" content="width=device-width, initial-scale=1">
    `        
}

//DECORATION OF HEADER
function headerPage(){
    return`
        <div class="custom-mobile-image headerpage" style="background-image: url(&quot;https://bootstrap-top-design.com/wp-content/uploads/2019/08/cropped-background-inner2-1-3.jpg&quot;); background-color: rgb(255, 255, 255); padding-top: 63px;" data-parallax-depth="20">
            <h1 class="h2 mb-0" style="margin-left:50px" >JE GERE ...</h1>                        
        </div><div class="col-12 subheader"> 
            <figure>
                <img src="Inkedimagesciel_LI2.jpg" width=100% height=8px>
            </figure>
        </div>
    `
}

//TITLE MY TO DO LIST
function displayTitle(){
    return`        
        <h2 class="h4">Ma To Do List
            <img class="mx-3 my-4" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="check" width="40">
        </h2>
    `
}

function displayActionsHTML(){
    return`
    <div class="container" style="background-color: #e3f2fd;">
                                        <div class="row pt-2">    
                                            <div class="col-auto my-1">
                                                <button class="form-control" style="background-color: #e3f2fd;" id="togg1">Add</button>
                                            </div>
                                            <div class="col-auto my-1">
                                                <form class="horizontal" action="/get_tasks_completed" method="GET" enctype="application/x-www-form-urlencoded">
                                                    <input class="form-control"  id="listTasksCButton" style="background-color: #e3f2fd;" type="submit" value="Only Done"/>
                                                </form>
                                            </div>
                                            <div class="col-auto my-1">
                                                <form class="horizontal" action="/get_tasks_table" method="GET" enctype="application/x-www-form-urlencoded">
                                                    <input class="form-control"  id="listTasksCButton" style="background-color: #e3f2fd;" type="submit" value="ToDoList Table"/>
                                                </form>
                                            </div>
                                            <div class="col-auto my-1 text-end">
                                                <form>
                                                    <input type = "button" value="Back" class="btn btn-outline-secondary " onclick= "history.back()">
                                                    <!--<a href="/get_tasks" class="btn btn-outline-secondary ">Back</a><br />-->
                                                </form>
                                            </div>
                                        </div>
                                    </div>
    `
}

//DISPLAY OF THE CENTER OF THE PAGE
function displayRightPart(results,filter){
    if ( filter === 'displayWelcome'){
        return displayWelcomePage()                              
    } else if ( filter === 'displayTable'){
        return showTasksTable2(results) 
    } else {        
        return showTasksTable(results)
    }
}

function displayActions(filter){
    if ( filter === 'displayWelcome'){
        return `
        <div class="container" style="background-color: #e3f2fd;"></div>`
    } else {
        return displayActionsHTML()
    }
}

//DISPLAY OF THE CENTER OF THE WELCOME PAGE
function displayWelcomePage(){
    return`
        <div class="card mask-custom">
            <div class="card-body p-5 shadow-lg p-3 bg-white rounded">
                <div class="text-center">                        
                    <div class="row mylist">
                        <div class="col-12">
                            <a class="bienvenue" href="/get_tasks">Bienvenue!</a><br />                              
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

//DISPLAY OF THE TABLE OF THE TASKS
function showTasksTable(results){
    return`
        <div class="card mask-custom">
            <div id="cardTask" class="card-body p-5 p-3 shadow-lg bg-white rounded">
                <div class="text-center">                        
                    <div class="pb-3">
                         ${formAddtask()}                             
                    </div>
                    <div class="row justify-content-center">
                            ${buildBodyTabTasksHtml(results)}
                    </div>       
                </div>
            </div>
        </div>
    `
}

//FORM FOR ADDING A NEW TASK
function formAddtask(){
    return`
    <div class="card bg-white" id="cardAddNewtask">                                
        <div class="card-body">
            <form id="form_add" class="row" action="/insert_tasks" method="POST" enctype="application/x-www-form-urlencoded">
                <div class="col-auto">
                    <label class="sr-only addNewtask" for="inlineFormInputName1"></label>
                    <input type="text" class="form-control input-lg border-0 addNewTask" id="inlineFormInputName1" required name="name" placeholder="Enter a name">
                </div>
                <div class="col-auto">
                    <label class="sr-only addNewtask" for="inlineFormInputGroupDescription1"></label>
                    <input type="text" class="form-control input-lg border-0 addNewTask" id="inlineFormInputDescription1" required name="description" placeholder="Enter a description">
                </div>
                <div class="col-auto">
                    <label for="inlineFormInputPriority1" class="sr-only"></label>
                    <select class="custom-select custom-select-lg form-control addNewTask border-0" name="priority" required id="inlineFormInputPriority1">
                        <option selected>Select the priority</option>
                        <option value=${VALUE_PRIORITY_HIGH}>${TASK_PRIORITY_HIGH}</option>
                        <option value=${VALUE_PRIORITY_MEDIUM}>${TASK_PRIORITY_MEDIUM}</option>
                        <option value=${VALUE_PRIORITY_LOW}>${TASK_PRIORITY_LOW}</option>
                    </select>      
                </div>
                <div class="col-auto">
                        <input class="border-0 addNewTask form-control input-lg" type="date" id="inlineFormInputDate1" required name="deadline"
                        value=DateDay() min=DateDay() max="2030-12-31">
                </div>
                <div class="col-auto">
                    <label id="labeladdbutton1" for="addbutton1"/></label>
                    <input class="form-control btn-sm btn-primary" id="addbutton1" type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    </div>
    `
}

//BUILD WITH ALL THE LINES OF THE TABLE
function buildBodyTabTasksHtml(results) {
    let items = ""
    for (i in results) {
        items = items + `${buildLineTaskHtml(results[i])}`
    }    
    //return `<tbody>${items}</tbody>`
    return `${items}`
}

//LOADING OF THE DATA FROM BDD FOR ONE TASK
function buildLineTaskHtml(task) {
    let deadline = task['deadline'].toLocaleDateString('fr')
    let valueStatus = convertStatus(task['status'])
    let valuePriority = convertPriority(task['priority'])
    let lineTab = ""
    
    lineTab=`    
    <div class="align-items-stretch m-3 border border-radius border-secondary border-2 rounded-3 bg-white shadow" style="width:205px">
        <div class="row ">            
            <div class="row pr-0 pt-1">
                <div class="col col-4 text-start">
                    <input class="text-start mt-1" type="checkbox" name="checkToday"/>
                    <label class="text-muted">Today</label>
                </div>
                <div class="col col-4" style="padding-right:0px">
                    <span id="taskStatus${task['id']}" >${valueStatus}</span>
                </div>
                <div class="col col-4 text-end" style="padding-right:0px">
                    <span class="bg-dark text-white" style="font-size:13px;">${valuePriority}</span>
                    <p class="text-muted">
                    ${deadline}
                    </p>   
                </div>
            </div>
            <div class="row p-0 m-0 bodyTask" >                    
                <div class="col col-12">
                    <h3 class="px-0" style="font-size:15px;">${task['name']}</h3>                        
                    <p class="d-block text-center mb-4">${task['description']}
                    </p>
                </div>                    
            </div>  
            <hr />      
            <div class="row p-0 m-0 text-center bg-light">                
                <div class="col col-8 text-start">
                    <form id="formTaskTable${task['id']}" class="pb-0" action="/update_status" method="POST" enctype="application/x-www-form-urlencoded">
                        <div class="row">    
                            <div class="col col-9">
                                <input name="taskId" type="hidden" value=${task['id']}>                            
                                    <select class="form-select form-select-sm p-0" name="updatedStatus" id="selectStatus">
                                        <option selected>${valueStatus}</option>
                                        <option value=${VALUE_STATUS_INPROGRESS}>${TASK_STATUS_INPROGRESS}</option>
                                        <option value=${VALUE_STATUS_DONE}>${TASK_STATUS_DONE}</option>
                                        <option value=${VALUE_STATUS_CANCELLED}>${TASK_STATUS_CANCELLED}</option>
                                        <option value=${VALUE_STATUS_TODO}>${TASK_STATUS_TODO}</option>                        
                                    </select> 
                                    <label class="sr-only text-muted mb-0" for="selectStatus">Select the status</label>
                            </div>
                            <div class="col col-3">
                                <input class="form-inline btn-xs xs-3 rounded btn-primary" id="rightbuttonSave" type="submit" value="Save">
                            </div>
                        </div>
                    </form>                   
                </div> 
                <div class="col col-4 text-end">
                    <form id="formDeleteTask${task['id']}" class="pb-0" action="/delete_task" method="POST" enctype="application/x-www-form-urlencoded">
                        <input id="deleteTaskId${task['id']}" name="deleteTaskId" type="hidden" value=${task['id']}>    
                        <input class="btn-xs rounded btn-secondary pr-0" id="rightbuttonDelete" type="submit" value="Delete">
                    </form>
                </div>
            </div>
        </div>
    </div>

    
    `
    return `${lineTab}`
    
}

//CONVERT PRIORITY BDD > FRONT
function convertPriority(pPriority){
    switch(pPriority) {
    case VALUE_PRIORITY_HIGH:
        return TASK_PRIORITY_HIGH;
    case VALUE_PRIORITY_MEDIUM:
        return TASK_PRIORITY_MEDIUM;
    case VALUE_PRIORITY_LOW:
        return TASK_PRIORITY_LOW;
    }
}

//CONVERT STATUS BDD > FRONT
function convertStatus(pStatus){
    switch(pStatus){
        case VALUE_STATUS_TODO:
            return TASK_STATUS_TODO;
        case VALUE_STATUS_INPROGRESS:
            return TASK_STATUS_INPROGRESS;        
        case VALUE_STATUS_DONE:
            return TASK_STATUS_DONE; 
        case VALUE_STATUS_CANCELLED:
            return TASK_STATUS_CANCELLED;           
    }
}

//CONVERT STATUS FRONT > BDD
function revertStatus(pStatus){
    switch(pStatus){
        case TASK_STATUS_TODO:
            return VALUE_STATUS_TODO;
        case TASK_STATUS_INPROGRESS:
            return VALUE_STATUS_INPROGRESS;        
        case TASK_STATUS_DONE:
            return VALUE_STATUS_DONE; 
        case TASK_STATUS_CANCELLED:
            return VALUE_STATUS_CANCELLED;           
    }
}




function showTasksTable2(results){
    return`
        <div class="card mask-custom">
            <div id="cardTask" class="card-body p-5 p-3 rounded">
                <div class="text-center">                        
                    <div class="pb-3">
                         ${formAddtask()}                             
                    </div>
                    <div class="row">
                        <table class="table table-condensed mb-0">
                            <thead> 
                                <tr>
                                    <th>Today</th>
                                    <th>To do</th>
                                    <th>Details</th>
                                    <th>Priority</th>
                                    <th>Before</th>
                                    <th>Status</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            ${buildBodyTabTasksHtml2(results)}                                                                              
                        </table>
                    </div>       
                </div>
            </div>
        </div>
    `
}

function buildBodyTabTasksHtml2(results) {
    let items = ""
    for (i in results) {
        items = items + `${buildLineTaskHtml2(results[i])}`
    }    
    return `<tbody class="bg-white">${items}</tbody>`
    
}

function showPropertyTaskHiddenHTML(valueColumn,idRootName,pValueProperty,idTask){
    return`
    <td class="col-${valueColumn} d-none align-middle p-0" id="${idRootName}${idTask}">${pValueProperty}</td>
    `
}

function showTaskPropertyHTML(valueColumn,idRootName,pValueProperty,idTask){
    return`
    <td class="col-${valueColumn} align-middle p-0" id="${idRootName}${idTask}">${pValueProperty===null?'':pValueProperty}</td>
    `
}

function buildLineTaskHtml2(task) {
    let deadline = task['deadline'].toLocaleDateString('fr')
    let valueStatus = convertStatus(task['status'])
    let valuePriority = convertPriority(task['priority'])
    let lineTab = ""
    
    lineTab =
        `  
        <form id="formTaskTable${task['id']}" class="pb-0" action="/update_status" method="POST" enctype="application/x-www-form-urlencoded">
            <td class="col-1 pb-0" id="col-1 columnCheckbox"><input class="checkBoxTask" type="checkbox" id="checkBoxTask${task['id']}"  name="checkToday"/></td>
            ${showPropertyTaskHiddenHTML("id",task['id'],task['id'])}  
            ${showPropertyTaskHiddenHTML("statusBdd",task['status'],task['id'])}
            ${showPropertyTaskHiddenHTML("priorityBdd",task['priority'],task['id'])}           
            ${showTaskPropertyHTML(1,"nameTask",task['name'],task['id'])}            
            ${showTaskPropertyHTML(2,"descriptionTask",task['description'],task['id'])}            
            ${showTaskPropertyHTML(1,"priorityTask",valuePriority,task['id'])}            
            ${showTaskPropertyHTML(1,"deadLineTask",deadline,task['id'])}            
            ${showTaskPropertyHTML(1,"statusTask",valueStatus,task['id'])}            
            <td class="col-2 align-items-center pt-1 pb-0">
                <div class="form-row align-items-center">
                    <input id="taskId${task['id']}" name="taskId" type="hidden" value=${task['id']}>
                    <select class="custom-select custom-select-sm xs-3  dropdown-menu-xs-left p-0 mb-2 " name="updatedStatus" id="selectStatus">
                        <option selected>${valueStatus}</option>
                        <option value=${VALUE_STATUS_INPROGRESS}>${TASK_STATUS_INPROGRESS}</option>
                        <option value=${VALUE_STATUS_DONE}>${TASK_STATUS_DONE}</option>
                        <option value=${VALUE_STATUS_CANCELLED}>${TASK_STATUS_CANCELLED}</option>
                        <option value=${VALUE_STATUS_TODO}>${TASK_STATUS_TODO}</option>                        
                    </select>                            
                    <input classe="btn-sm xs-3 rounded" id="rightbuttonSave" type="submit" value="Save">
                </div>
            </td>        
        </form>  
            <td class="col-1 align-items-center pt-1 pb-0">             
                <div class="col-1">                                          
                    <form id="formDeleteTask${task['id']}" class="pb-0" action="/delete_task" method="POST" enctype="application/x-www-form-urlencoded">
                        <input id="deleteTaskId${task['id']}" name="deleteTaskId" type="hidden" value=${task['id']}>    
                        <input classe="btn-sm xs-3 rounded " id="rightbuttonDelete" type="submit" value="Delete">
                    </form>
                </div>
            </td>       
        `
    if (valueStatus === TASK_STATUS_DONE){
        return `<tr class="textDecorationLine" >${lineTab}</tr>`
    } else{          
    return `<tr id="${task['id']}">${lineTab}</tr>`
    }
}


module.exports = {
    getTasksToDo: getTasksToDo,
    getTasksToDoTable:getTasksToDoTable,
    displayPageWelcome:displayPageWelcome,
    getTasksDone:getTasksDone, 
    headHtml:headHtml,
    headerPage:headerPage,
    displayTitle:displayTitle,
    displayRightPart:displayRightPart,
    displayWelcomePage:displayWelcomePage,
    showTasksTable:showTasksTable,
    formAddtask:formAddtask,
    buildBodyTabTasksHtml:buildBodyTabTasksHtml,
    buildLineTaskHtml:buildLineTaskHtml,
    convertStatus:convertStatus,
    convertPriority:convertPriority,
    revertStatus:revertStatus,
    showTasksTable2:showTasksTable2,
    buildBodyTabTasksHtml2:buildBodyTabTasksHtml2,
    buildLineTaskHtml2:buildLineTaskHtml2,
    showPropertyTaskHiddenHTML:showPropertyTaskHiddenHTML,
    showTaskPropertyHTML:showTaskPropertyHTML,
    displayActions:displayActions,
    displayActionsHTML:displayActionsHTML,

}

