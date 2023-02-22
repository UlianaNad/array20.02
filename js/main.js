// push select input into html
let genderList = [
    {id:0, name:"", src:""},
    {id:1, name:"female", src:"./img/female.svg"},
    {id:2, name:"male", src:"./img/male.svg"},
    {id:3, name:"other", src:"./img/other.svg"}
];

let female = genderList[1].src;
let male = genderList[2].src;
let other = genderList[3].src;


// select options
const genderItem = genderList.map((gender) =>{
    let htmlGender = `<option>${gender.name}</option>`;
    return htmlGender;
});

const newGenderItem = genderItem.join('');
genderInput.innerHTML = newGenderItem;


//add new client
let clients = [
    {name: "Your name", 
    gender:"Your gender",
    src:""}
];

const createNewClient = (ev) =>{
    const clientName = document.querySelector('#name').value;
    //console.log(clientName);

    const clientGender = document.querySelector('.genderInput').value;
    //console.log(typeof(clientGender));


    if(clientName && clientGender){

        const imgGender = '';
        if(clientGender === genderList[1].name){
            const imgGender = `${female}`;
            
            clients.push({
                name:clientName, 
                gender: clientGender,
                img: imgGender
            });

            console.log(clients)
        }
        if(clientGender === genderList[2].name){
            const imgGender = `${male}`;
            
            clients.push({
                name:clientName, 
                gender: clientGender,
                img: imgGender
            });

            console.log(clients)
        }
        if(clientGender === genderList[3].name){
            const imgGender = `${other}`;
            
            clients.push({
                name:clientName, 
                gender: clientGender,
                img: imgGender
            });

            console.log(clients)
        }

        const clientsList = clients.map((item) => {
            let html = `<li>${item.name} <span>${item.gender}</span> <img class="imgGender" src="${item.img}></li>`;
            return html;
            
        })

        const newClientsList = clientsList.join('');

        document.querySelector('.list').innerHTML = newClientsList;
        


    return console.log(clients); 
    }

}

document.querySelector('.addButton').addEventListener('click', createNewClient);


// // clear button
const clearButton = document.querySelector('.clear');
const nameInput = document.querySelector('#name');

const clearList = () => {
    clients.splice(0, clients.length);
    document.querySelector('.list').innerHTML = clients;
    genderInput.innerHTML = newGenderItem;
    nameInput.value = null;
}
clearButton.addEventListener("click", clearList);



// const nameInput = document.querySelector('#name');
// const addButton = document.querySelector('.addButton');
// const genderInput = document.querySelector('.genderInput');
// const list = document.querySelector('.list');

// //get input select value


// genderInput.addEventListener('change', () => {
//     const genderValue = document.querySelector('.genderInput').value;
//     console.log(genderValue);
// });

// // add new name
// const addEl = () => {
//     nameList.push(nameInput.value);

//     const htmlList = nameList.map((item) => {        
//         let html = `<li>${item}</li>`;
//         return html;
//     });

//     const newHtml = htmlList.join('');
//     list.innerHTML = newHtml;

//     console.log(newHtml);
// }
// addButton.addEventListener('click', addEl);








