
const baseURL = 'https://cephalometric.herokuapp.com'
const patientID = localStorage.getItem('patientID')
let patient = {};

$("#getResult").click(() => {

    console.log('clicked');
    const data = {
    identifier: $("#patient_identifier").val(),
    age: $("#input_age").val(),
    comments:$("#comment").val(),
    }
})


function getData() {
        
    axios({
        method: 'get',
        url: `${baseURL}/user`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
       
    }).then(function (response) {
        console.log(response);
        const { message, users } = response.data
        patients = users
        
        //showData()
    }).catch(function (error) {
        console.log(error);
    });
}

function getpatient() {
    console.log('getpatient')
    axios({
        method: 'get',
        url: `${baseURL}/user/info/${localStorage.getItem('patientID')}`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message, user } = response.data;
        patient = user;
        
        showPatient();
        console.log(user);
     
    }).catch(function (error) {
        console.log(error);
    });
}

function showPatient() {
    
        let cartonna = ` 

           <table class=" table table-striped">
           <thead>
             <th>Identifier</th>
             
           </thead>
           <tbody>
             <tr>
             <td id='identifier_result'>${patient.identifier}</td>
             </tr>                 
           </tbody>
         </table>

         <table class=" table table-striped">
           <thead>
             <th>Gender</th>
             
           </thead>
           <tbody>
             <tr>
             <td id='age_result'>${patient.age}</td>
             </tr>                 
           </tbody>
         </table>


         <table class=" table table-striped">
           <thead>
             <th>Gender</th>
             
           </thead>
           <tbody>
             <tr>
             <td id='gender_result'>${patient.gender}</td>
             </tr>                 
           </tbody>
         </table>


         <table class=" table table-striped">
           <thead>
             <th>Comments</th>
             
           </thead>
           <tbody>
             <tr>
             <td id='comments_result'>${patient.comments}</td>
             </tr>                 
           </tbody>
         </table>


         <table class=" table table-striped">
           <thead>
             <th>Date</th>
             
           </thead>
           <tbody>
             <tr>
             <td id='date_result'>${createDate(patient.createdAt)}</td>
             </tr>                 
           </tbody>
         </table>
          
       </tr>`

    document.getElementById('tbody').innerHTML = cartonna
    localStorage.removeItem('patientID')
}

function createDate(dd){
    const date = new Date(dd);

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}/${month}/${year}`;
console.log(currentDate); 
return  currentDate
}

getpatient();
