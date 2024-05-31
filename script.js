// Necessary Element

const taskinput= document.getElementById('taskinput')
const addtask=document.getElementById('addtask')
const tasklist=document.getElementById('tasklist')

// function to add task


const addtaskbutton=()=>{
    const taskname=taskinput.ariaValueMax.trim();
    if(taskname===''){
        alert('please enter a task name.')
        return
    }

const li =document.createElement('li')
li.classname='task flex justify-between items-center p-2 bgt-gray-100 rounded shadow'


// add task name

const span = document.createElement('span')
span.classnaem='flex-01'
span.addEventListener()
}