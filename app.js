// console.log('JavaScript file added.');
// First of all user need to store some contacts first.
// Here is the dynamic contact form.
const addContact = document.getElementById('add-contact');
addContact.addEventListener('click', function(){
    const details = document.getElementById('details');
    details.innerHTML= `<div class="form-example">
    <div class="form-example">
      <label for="name">Contact Name: </label>
      <input type="text" name="name" id="name" required>
    </div>
    <div class="form-example">
      <label for="email">Phone Number: </label>
      <input type="number" name="phone" id="phone" required>
    </div>
    <div class="form-example">
      <input type="submit" value="Add Contact" onclick='addContactToLocal()'>
    </div>
  </div>`
})
// Function to display contact list to users
const contacts = () => {
    // console.log('this is contacts.')
    const details = document.getElementById('details');
    details.innerHTML = '';
    const savedContacts = localStorage.getItem('contacts');
    if(savedContacts == null){
        contactArray = [];
    }
    else{
        contactArray = JSON.parse(savedContacts);
    }
    // console.log(contactArray);
    contactArray.forEach(element => {
        const newDetail = `
                <div class="detail">
                    <h3>${element.name}</h3>
                    <p>Phone: ${element.phone}</p>
                    <button onclick="addToHistory(this)">Call</button>
                </div>`
                const details = document.getElementById('details');
                details.innerHTML += newDetail;
    })
}
// Function for adding contact to localStorage
const addContactToLocal = () => {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    // console.log(name, phone)
    let nameNphone = {
        name: name,
        phone: phone
    }
    // console.log(nameNphone);
    const savedContacts = localStorage.getItem('contacts');
    if(savedContacts == null){
        contactArray = [];
    }
    else{
        contactArray = JSON.parse(savedContacts);
    }
    contactArray.push(nameNphone);
    localStorage.setItem('contacts', JSON.stringify(contactArray));
}
// Function to display call history to users
const history = () => {
    // console.log('this is history.')
    const details = document.getElementById('details');
    details.innerHTML = '';
    const savedHistory = localStorage.getItem('history');
    if(savedHistory == null){
        historyArray = [];
    }
    else{
        historyArray = JSON.parse(savedHistory);
    }
    // console.log(historyArray)
    historyArray.forEach(element => {
        const historyDetail = `<div class="detail">
                                    <h3>${element.contactname}</h3>
                                    <p>Phone: ${element.phone}</p>
                                </div>`
        const details = document.getElementById('details');
        details.innerHTML += historyDetail;
                            })
    
}
// Function for adding call history to local storage
const addToHistory = (np) =>{
    let contactHistory = {};
    if(np.parentNode){
        // console.log(np.parentNode.firstElementChild.innerText);
        const contactname = np.parentNode.firstElementChild.innerText;
        // console.log(np.parentNode.firstElementChild.nextElementSibling.innerText.slice(7, 17));
        const phone = np.parentNode.firstElementChild.nextElementSibling.innerText.slice(7, 17);
        contactHistory.contactname = contactname;
        contactHistory.phone = phone;
        saveToLocal(contactHistory)
    }
    
    
}
// Save to local
const saveToLocal = (contactHistory) => {
    const savedHistory = localStorage.getItem('history');
    if(savedHistory == null){
        historyArray = [];
    }
    else{
        historyArray = JSON.parse(savedHistory);
    }
    historyArray.push(contactHistory);
    localStorage.setItem('history', JSON.stringify(historyArray));
}


// const contactDetail = document.getElementsByClassName('detail')
// for(let i = 0; i<contactDetail.length; i++){
//     let detail = contactDetail[i];
//     console.log(detail)
//     let h3 = detail.getElementsByTagName('h3');
//     console.log(h3)
//     for(let i = 0; i<h3.length; i++){
//         console.log(h3[i].innerText)
//         contactHistory.contactname = h3[i].innerText;
//     }
//     let p = detail.getElementsByTagName('p');
//     for(let i = 0; i<p.length; i++){
//         console.log(p[i].innerText.slice(7, 17))
//         contactHistory.phone = p[i].innerText.slice(7, 17);
//         console.log(contactHistory)
//         saveToLocal(contactHistory)
//     }
// }
// contactDetail.forEach(detail => {
//     console.log(detail)
// })
// contactDetail.forEach(detail => {
//     detail.forEach(element => {
//         let contactHistory = {}
//         if(element == h3){
//             let contactname = h3.innerText;
//             contactHistory.name = contactname;
            
//         }
//         else if(element == p){
//             let phone = p.innerText;
//             contactHistory.phone = phone;
//         }
//     })
// })
// console.log(contactHistory)