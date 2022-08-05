const firebaseConfig = {
    apiKey: "AIzaSyBMty4tWkwVE_Wrd6M75--sx83fhX7lX5k",
    authDomain: "placement-pro-407a6.firebaseapp.com",
    databaseURL: "https://placement-pro-407a6-default-rtdb.firebaseio.com",
    projectId: "placement-pro-407a6",
    storageBucket: "placement-pro-407a6.appspot.com",
    messagingSenderId: "1079135711534",
    appId: "1:1079135711534:web:9b6184c603c741f8458abf",
    measurementId: "G-19N4NHZ7EE"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
flag=0;
async function stud_details() {
    var reg = sessionStorage.getItem("reg");
   await firebase.database().ref("Students/").on("value", function (snapshot) {
        snapshot.forEach(function(childsnapshot){
            childsnapshot.forEach(function(child){
                   if (child.key===reg) {
                        display(child);
            }
        })
    })
    })
     await firebase.database().ref("company2/").on("value",function(csnapshot){
        csnapshot.forEach( function(childcompany){
            childcompany.forEach(function(cstudent){
                if(cstudent.key==reg){
                    if(cstudent.val().applied != 1){
                        flag=1;
                        add_table_value(childcompany.key,reg);}

                }
            })

        })
        if(flag===0)
        {
            console.log("in condition",flag);
            var tbody = document.getElementById("tbody1");
            var trow = document.createElement("tr");
            var td1 = document.createElement("td");    
            var msg='<h2>No companies available right now</h2>'
            td1.innerHTML=msg
            trow.appendChild(td1);
            tbody && tbody.appendChild(trow);
        }
    })
   

}
 function add_table_value(c_name,reg) {

    var tbody = document.getElementById("tbody1");
    var trow = document.createElement("tr");
    var td1 = document.createElement("td");    
    var lines;
    firebase.database().ref("company/"+c_name).on("value",function(snapshot){
    lines='<div class="card shadow shadow-3 d-flex justify-content-center" style="width:70%">'
    lines+='<div class="card-body ">'
    lines+='<h3 class="card-title">' +snapshot.key+ '</h3>'
    lines+='<table>'
    lines+='<tr><td>Designation:</td><td>'+snapshot.val().designation+'</td><td></td><td>Package:</td><td>'+snapshot.val().package+'</td></tr>'
    lines+='<tr><td>Last date:</td><td>'+snapshot.val().date+'</td><td></td><td>Vacany:</td><td>'+snapshot.val().vacancy+'</td></tr>'
    lines+='<tr><td>Contact:</td><td>'+snapshot.val().contact+'</td><td></td><td>Email:</td><td>'+snapshot.val().email+'</td></tr>'
    lines+='<tr><td colspan=5 style="text-align: center;"><button class="btn btn-primary" onclick=select("'+c_name+'","'+reg+'")>Apply</button></td></tr>'
    lines+='</table>'
    lines+='</div></div>'
    td1.innerHTML=lines;
})
    

    trow.appendChild(td1);
    tbody && tbody.appendChild(trow);

}

function display(snapshot) {

    document.getElementById('nam').innerHTML = snapshot.val().name.toUpperCase();
    document.getElementById('ph_no').innerHTML = snapshot.val().phone_number;
    document.getElementById('email').innerHTML = snapshot.val().email;
    document.getElementById('age').innerHTML = getAge(snapshot.val().dob);
    document.getElementById('datefield').innerHTML = snapshot.val().dob;
    document.getElementById('add_area').value = snapshot.val().adress;
    document.getElementById('ph_no1').innerHTML = snapshot.val().phone_number;
    document.getElementById('email2').innerHTML = snapshot.val().email;
}
function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}
async function select(c_name,reg) {
   await firebase.database().ref("company2/"+c_name+"/"+reg).update({
    applied:"1"
   })
   var x = document.getElementById("snackbar");
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   setTimeout("location.reload(true);", 3100);
}