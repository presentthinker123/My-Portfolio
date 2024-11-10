const names = document.getElementById("nam");
const email = document.getElementById("email");
const subject = document.getElementById("Subject");
const message = document.getElementById("message");
const form = document.getElementById("frm");
const paraOne = document.getElementById("paraO");
const paraTwo = document.getElementById("paraT");
const paraThree = document.getElementById("paraS");
const paraFour = document.getElementById("paraM");




function validation(na,em,me){
    if(na.length==0){
        paraOne.textContent="*Required";
    }
    else{
        paraOne.textContent=" ";
    }
    if(em.length==0){
        paraTwo.textContent="*Required";
    }
    else{
        paraOne.textContent=" ";
    }
    if(me.length==0){
        paraFour.textContent="*Required";
    }
    else{
        paraOne.textContent=" ";
    }
}
function saveData(na,em,me){
    const firebaseConfig = {
        apiKey: "AIzaSyCzrq1CG3A-nlOU5HAAij2W5BXAt7875zc",
        authDomain: "portfolio-65900.firebaseapp.com",
        databaseURL: "https://portfolio-65900-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "portfolio-65900",
        storageBucket: "portfolio-65900.firebasestorage.app",
        messagingSenderId: "521633359778",
        appId: "1:521633359778:web:7c6180a95d9010a1c7f4fb",
        measurementId: "G-ELZDQ8FC6N"
      };


      // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref("ReqForm");
 
var newRef = db.push();

newRef.set(
  {
    na :na,
    em : em,
    me : me
  }
).then(()=>{
    form.reset();
});

}




form.addEventListener("submit",(e)=>{
    e.preventDefault();




    var na = names.value;
    var em = email.value;
    var me = message.value;


    validation(na,em,me);
    saveData(na,em,me);

})