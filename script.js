const button = document.getElementById('add-task-btn');
const inputText = document.getElementById('MyInput');
const Tasks = document.getElementById('currentTask');

///Функция вывода данных из LocalStorage
 function GetData(){
    /// If для проверки есть ли данные
    if (localStorage.getItem("Data")){
  Tasks.innerHTML = localStorage.getItem("Data");
  RestoreTask();
  }
 }

 function RestoreTask(){
    const taskItems = Tasks.querySelectorAll('li');
    taskItems.forEach((taskItem) =>{
        AddButtonsToTask(taskItem);
    })
 }



///Функция сохранения данных
 function SaveData(){
    localStorage.setItem("Data",Tasks.innerHTML)
 }

 GetData();

button.addEventListener('click', function(){
    const TaskText = inputText.value;
    if (TaskText.trim() !== ''){
        const NewTask = document.createElement('li');
        NewTask.textContent = TaskText;
        NewTask.classList.add('SelectedStyleTask');
        AddButtonsToTask(NewTask);
        Tasks.appendChild(NewTask);
        ///была проблема что написал функции, но не вызвал
        SaveData();
        inputText.value='';
        
}else{
    alert("Введите текст");
}
});

function AddButtonsToTask(taskItem) {
    if (!taskItem.querySelector('.Delete-button')) {
        const DeleteButton = document.createElement('button');
        DeleteButton.textContent = "x";
        DeleteButton.classList.add('Delete-button');
        DeleteButton.addEventListener('click', () => {
            console.log("Удалено");
            taskItem.remove();
            SaveData();
        });

        taskItem.appendChild(DeleteButton); 
    }
}


Tasks.addEventListener('click', function (event) {
    const SelectedTask = event.target; // Текущий элемент, на который кликнули
    if (SelectedTask.classList.contains('SelectedStyleTask') && !SelectedTask.classList.contains('Delete-button')) {
        SelectedTask.classList.toggle('completed'); // Добавляем/удаляем зачеркивание
        SaveData();
    }
});

