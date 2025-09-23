const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const toDoList = [
  {
    name: 'Znovu navštívit tuto stránku',
    dueDate: tomorrow.toLocaleDateString('cs-CZ')
  }
];

renderToDoList();

function renderToDoList(){
  let toDoListHTML = ''

  toDoList.forEach((toDoObject, idex)=>{
    const { name, dueDate } = toDoObject;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="js-remove-to-do-object-button">Odstranit</button>`;
    toDoListHTML += html;
  });

  document.querySelector('.js-to-do-list').innerHTML = toDoListHTML;

  document.querySelectorAll('.js-remove-to-do-object-button').forEach((removeButton, index)=>{
    removeButton.addEventListener('click', ()=>{
      toDoList.splice(index, 1);
      renderToDoList();
    })
  })
};

document.querySelector('.js-to-do-list-add-button').addEventListener('click', ()=>{
  addToDo();
});

function addToDo() {
  const name = document.querySelector('.js-name-input').value;

  const dueDateInput = document.querySelector('.js-due-date-input').value;
  const dueDate = new Date(dueDateInput).toLocaleDateString('cs-CZ');

  toDoList.push({
    name,
    dueDate
  });

  renderToDoList();
};