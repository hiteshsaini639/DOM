let form = document.getElementById('addForm');
let itemList=document.getElementById('items');

//Form submit event
form.addEventListener('submit',addItem);

// Delete item
itemList.addEventListener('click',removeItem);

//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    let newItem = document.getElementById('item');

    // create new li element
    let li = document.createElement('li');

    //Add class
    li.className='list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem.value));

    // create del button
    let delbtn = document.createElement('button');

    // create edit button
    let editbtn = document.createElement('button');

    // Add classes to button element
    delbtn.className='btn btn-danger btn-sm float-right delete';

    // Add classes to edit element
    editbtn.className='btn btn-warning btn-sm float-right edit';

    // Append text node
    delbtn.appendChild(document.createTextNode('X'));
    editbtn.appendChild(document.createTextNode('Edit'));

    // Append button to li
    li.appendChild(delbtn);
    li.appendChild(editbtn);

    // Append li to itemlist
    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            itemList.removeChild(e.target.parentElement);
        }
    }
}