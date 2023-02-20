const nameInput = document.querySelector('#name');
const addButton = document.querySelector('.addButton');

const list = document.querySelector('.list');
let nameList = [];

// add element
const addEl = () => {
    nameList.push(nameInput.value);

    const htmlList = nameList.map((item) => {        
        let html = `<li>${item}</li>`;
        return html;
    });
    
    const newHtml = htmlList.join('');
    list.innerHTML = newHtml;
}
addButton.addEventListener('click', addEl);


// clear button
const clearButton = document.querySelector('.clear');

const clearList = () => {
    nameList.splice(0, nameList.length);
    //console.log(nameList);
    list.innerHTML = nameList;
}
clearButton.addEventListener("click", clearList);