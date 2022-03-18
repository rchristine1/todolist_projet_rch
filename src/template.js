//VALUE OF STATUS AND PRIORITY
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
            <header class="headerPage">            
                ${headerPage()} 
            </header>
            <main>                  
                <div class="container rounded-3 border border-2 my-5" >
                    <div class="row">
                        <div class="col-2" style="height:auto;">                                                    
                            ${optionsMenu(filter)}                              
                        </div>    
                        <div class="col-10 text right">
                            <div class="row">
                                <div class="col-12 text-center">
                                    ${displayTitle()}                                
                                <hr />
                                    ${displayRightPart(results,filter)}                                        
                                </div>
                            </div>    
                            <div class="row">
                                <div class="col-12">
                                </div>
                            </div>
                        </div>                            
                    </div>
                </div>            
                <div class="row"> 
                    <div class="col-12">
                    </div>
                </div>
            </main>
            
            <script src="/js/display_notdisplay_AddTask.js">           
            
            </script>
        </body>
      </html>
    `
}

//TITLE MY TO DO LIST
function displayTitle(){
    return`
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp" alt="check" width="60">                           
        <h2 class="my-4">Ma To Do List</h2>
    `
}

//SRC NEEDED
function headHtml(){
    return`
        <!-- Latest compiled and minified CSS--> 
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        
        
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>

        
        <link href="style.css" rel="stylesheet"></link>
    `        
}

//DECORATION OF HEADER
function headerPage(){
    return`
        <div class="custom-mobile-image" style="background-image: url(&quot;https://bootstrap-top-design.com/wp-content/uploads/2019/08/cropped-background-inner2-1-3.jpg&quot;); background-color: rgb(255, 255, 255); padding-top: 63px;" data-parallax-depth="20">
            <h1 class="h2" style="margin-left:50px" >JE GERE ...</h1>                        
        </div>              
        <div class="col-12 subheader"> 
            <figure>
                <img src="Inkedimagesciel_LI2.jpg" width=100% height=8px>
            </figure>
        </div>
    `
}


//MENU PART RELATIVE TO TASKS DONE
function optionMenuDisplayTasksDone(contentTitle,contentBalise){
    return`
        <div class="row">
            <div class="col-auto menuTitle">
                <h4>${contentTitle}</h4>
                <form class="horizontal" action="/get_tasks_completed" method="GET" enctype="application/x-www-form-urlencoded">
                    <div class="row">    
                        <div class="col-auto my-1">
                            <input class="form-control"  id="listTasksCButton" type="submit" value="${contentBalise}"/>
                        </div>
                    </div>
                </form>                
            </div>
        </div>

    `
}

//MENU OF THE PAGE DONE TASKS
function optionMenuDonePage(contentTitle,contentBalise){
    return`
        <div class="row">
            <div class="col-auto menuTitle">
                <h4>${contentTitle}</h4>
                <div class="row">    
                    <div class="col-auto my-1">
                        <a href="/get_tasks">${contentBalise}</a><br />
                    </div>
                </div>                
            </div>
        </div>
    `
}

//DISPLAY OF THE MENU ON THE TO DO PAGE
function optionsMenu(filter){
    let affiche=``
    if ( filter == 'displayMenuFull'){   
        return`
            <div class="row">
                <div class="col-auto menuTitle">
                    <h4>Add a new task</h4>
                    <div class="row">    
                        <div class="col-auto my-1">
                            <button class="form-control" id="togg1">Add</button>
                        </div>
                    </div>    
                </div>
            </div>               
            ${optionMenuDisplayTasksDone("Display","Only Done")} 
        `
        } 
        else if ( filter == 'displayMenuBack') {
            return optionMenuDonePage("Back to the To Do","Back")
        } else {
            return affiche
        }
}

//FORM FOR ADDING A NEW TASK
function formAddtask(){
    return`
        <div class="card " id="cardAddNewtask">                                
            <div class="card-body p-0">
                <form id="form_add" class="form-inline" action="/insert_tasks" method="POST" enctype="application/x-www-form-urlencoded">
                    <div class="form-group ml-2 pt-3">
                        <label class="sr-only" for="inlineFormInputName1"></label>
                        <input type="text" class="form-control input-sm border-0 addNewTask" id="inlineFormInputName1" required name="name" placeholder="Enter a name">
                    </div>
                    <div class="form-group ml-2 pt-3">                    
                        <label class="sr-only" for="inlineFormInputGroupDescription1"></label>
                        <input type="text" class="form-control input-sm border-0 addNewTask" id="inlineFormInputDescription1" required name="description" placeholder="Enter a description">
                    </div>
                    <div class="form-group ml-2 pt-3">
                        <label for="inlineFormInputPriority1" class="sr-only">Select the priority</label>
                        <select class="custom-select custom-select-sm form-control addNewTask border-0" name="priority" required id="inlineFormInputPriority1">
                            <option selected>Select the priority</option>
                            <option value=${VALUE_PRIORITY_HIGH}>${TASK_PRIORITY_HIGH}</option>
                            <option value=${VALUE_PRIORITY_MEDIUM}>${TASK_PRIORITY_MEDIUM}</option>
                            <option value=${VALUE_PRIORITY_LOW}>${TASK_PRIORITY_LOW}</option>
                        </select>                
                    </div>                    
                    <div class="form-group ml-2 pt-3">                    
                        <input class="form-control border-0 addNewTask" type="date" id="inlineFormInputDate1" required name="deadline"
                        value=${DateDay()} min=${DateDay()} max="2030-12-31">
                    </div>                    
                    <div class="form-group ml-2 pt-2">                    
                        <label classe="form-inline" id="labeladdbutton1" for="addbutton1"/></label>
                        <input classe="form-control addNewTask" id="addbutton1" type="submit" value="Submit"/>
                    </div>                    
                </form>
            </div>
        </div>
    `
}

//DISPLAY OF THE TABLE OF THE TASKS
function showTasksTable(results){
    return`
        <div class="card mask-custom">
            <div class="card-body p-5 shadow-lg p-3 mb-5 bg-white rounded">
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
                            ${buildBodyTabTasksHtml(results)}                                                                              
                        </table>
                    </div>       
                </div>
            </div>
        </div>
    `
}

//DISPLAY OF THE CENTER OF THE WELCOME PAGE
function displayWelcomePage(){
    return`
        <div class="card mask-custom">
            <div class="card-body p-5 shadow-lg p-3 mb-5 bg-white rounded">
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

//DISPLAY OF THE CENTER OF THE PAGE
function displayRightPart(results,filter){
    if ( filter != 'displayWelcome'){
        return showTasksTable(results)                              
    } else {
        return displayWelcomePage()    
    }
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

//LOADING OF THE DATA FROM BDD FOR ONE TASK
function buildLineTaskHtml(task) {
    let deadline = task['deadline'].toLocaleDateString('fr')
    let valueStatus = convertStatus(task['status'])
    let valuePriority = convertPriority(task['priority'])
    let lineTab = ""
    lineTab = 
        `  
        <form id="formTaskTable${task['id']}" class="pb-0" action="/update_status" method="POST" enctype="application/x-www-form-urlencoded">
            <td class="pb-0" id="col-1 columnCheckbox"><input class="checkBoxTask" type="checkbox" id="checkBoxTask${task['id']}"  name="checkToday"/></td>
            ${showPropertyTaskHiddenHTML("id",task['id'],task['id'])}  
            ${showPropertyTaskHiddenHTML("statusBdd",task['status'],task['id'])}
            ${showPropertyTaskHiddenHTML("priorityBdd",task['priority'],task['id'])}           
            ${showTaskPropertyHTML(1,"nameTask",task['name'],task['id'])}            
            ${showTaskPropertyHTML(3,"descriptionTask",task['description'],task['id'])}            
            ${showTaskPropertyHTML(1,"priorityTask",valuePriority,task['id'])}            
            ${showTaskPropertyHTML(1,"deadLineTask",deadline,task['id'])}            
            ${showTaskPropertyHTML(1,"statusTask",valueStatus,task['id'])}            
            <td class="col-1 align-items-center pt-1 pb-0">
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

//BUILD WITH ALL THE LINES OF THE TABLE
function buildBodyTabTasksHtml(results) {
    let items = ""
    for (i in results) {
        items = items + `${buildLineTaskHtml(results[i])}`
    }    
    return `<tbody>${items}</tbody>`
}

//FUNCTION TO FORMAT THE DATE OF THE DAY
function DateDay() {
    let inputFormat=Date();
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [ d.getFullYear(),pad(d.getMonth() + 1),pad(d.getDate())].join('-')
}


module.exports = {
    getTasksToDo: getTasksToDo,
    displayPageWelcome:displayPageWelcome,
    getTasksDone:getTasksDone,
    buildLineTaskHtml: buildLineTaskHtml,    
    revertStatus:revertStatus,
    convertStatus:convertStatus,
    showTaskPropertyHTML:showTaskPropertyHTML,
}

