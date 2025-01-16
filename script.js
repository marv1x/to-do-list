const button = document.getElementById('add-task-btn');
const inputText = document.getElementById('MyInput');
const Tasks = document.getElementById('currentTask');

 function GetData(){
    if (localStorage.getItem("Data")){
  Tasks.innerHTML = localStorage.getItem("Data");
  }
 }

 function SaveData(){
    localStorage.setItem("Data",Tasks.innerHTML)
 }

 GetData();


button.addEventListener('click', function(){
    const TaskText = inputText.value;

    if (TaskText.trim() !== ''){
        const NewTask = document.createElement('li');
        NewTask.textContent = TaskText;
        Tasks.appendChild(NewTask);
        SaveData();
        inputText.value='';
        
}else{
    alert("Введите текст");
}
});


