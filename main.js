let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit',addItem);

// Delete item
itemList.addEventListener('click',removeItem);

// Filter
filter.addEventListener('keyup',filterItem);

//Add item
function addItem(e){
    e.preventDefault();

    //Get input value
    let newItem = document.getElementById('item');
    let newDesValue = document.getElementById('description').value;

    // create new li element
    let li = document.createElement('li');
    let lides = document.createElement('li');
    //Add class
    li.className='list-group-item';
    lides.className='list-group-item list-group-item-light';

    //Add text node with input value
    if(newDesValue=='')
    newDesValue='Not Provided';
    li.appendChild(document.createTextNode(newItem.value));
    lides.appendChild(document.createTextNode(newDesValue));

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

    // new div
    let div = document.createElement('div');

    // Add classe to div
    div.className='item-description';

    // add list to div
    div.appendChild(li);
    div.appendChild(lides);

    // add div to itemList
    itemList.appendChild(div);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            itemList.removeChild(e.target.parentElement.parentElement);
        }
    }
}

// Filter item
function filterItem(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();

    // Get li
    let divItems = itemList.querySelectorAll('div');
    divItems.forEach((divItem) =>{

        let listItemIndiv = divItem.querySelectorAll('li');
        item = listItemIndiv[0].firstChild.textContent;
        description = listItemIndiv[1].firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
            listItemIndiv[0].parentElement.style.display='block';
        }
        else{
            listItemIndiv[0].parentElement.style.display='none';
        }
    });
}
