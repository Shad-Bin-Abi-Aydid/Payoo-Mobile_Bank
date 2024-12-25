
// Add money and out money is activated now

const addForm = document.getElementById('add-form');
const outForm = document.getElementById('out-form');

document.getElementById('btn-add').addEventListener('click', function (event){
    event.preventDefault();
    
    addForm.classList.remove('hidden');
    outForm.classList.add('hidden');
} )

document.getElementById('btn-out').addEventListener('click', function (event){
    event.preventDefault();
    
    outForm.classList.remove('hidden');
    addForm.classList.add('hidden');
} )