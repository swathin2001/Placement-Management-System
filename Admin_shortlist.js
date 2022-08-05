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
firebase.initializeApp(firebaseConfig);



function add_table_value(reg_no, name, branch) {
 
    
    var tbody = document.getElementById("tbody1");
    var trow = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.innerHTML = ++b;
    td2.innerHTML = reg_no;
    td3.innerHTML = name;
    td4.innerHTML = branch;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4);
    trow.setAttribute('onclick', "select(this)")

    tbody && tbody.appendChild(trow);
}
async function lsit_stud() {
    b=0;
    var gmail=" ";
    var tbody = document.getElementById("tbody1");
    tbody.innerHTML=""; 
    var a=sessionStorage.getItem("val");
    if(a==='1'){
        document.getElementById("applied1").setAttribute("hidden","true")
        document.getElementById('btn').removeAttribute("hidden")

    }
    firebase.database().ref("company2/" + cname).on("value", function (snapshot) {
        snapshot.forEach(function (csnapshot) {
            if (csnapshot.exists()) {
                add_table_value(csnapshot.key, csnapshot.val().name, csnapshot.val().branch);
                gmail+=csnapshot.val().email+',';
            }

        });

    })
}
var cname = sessionStorage.getItem("c_name");
function select(x) {



    firebase.database().ref("Students/" + x.cells[3].innerHTML + "/" + x.cells[1].innerHTML).on("value", function (snapshot) {
        $("#reg").html(snapshot.key);
        $("#na").html(snapshot.val().name)
        $('#batch').html(snapshot.val().batch)
        $('#brn').html(snapshot.val().branch)
        $('#dob').html(snapshot.val().dob)
        $('#cgpa').html(snapshot.val().cgpa)
        $('#email').html(snapshot.val().email)
        $('#gen').html(snapshot.val().gender)
        $('#pn').html(snapshot.val().phone_number)
        $('#sup').html(snapshot.val().supply)
        $('#10').html(snapshot.val().tenth)
        $('#12').html(snapshot.val().twelfth)
    })
    $("#myModal").modal("toggle");
}

function branch_student(){
    
    var tbody = document.getElementById("tbody1");
    tbody.innerHTML=""; 
    b=0;
    var app=document.getElementById("branch1").value;
    if(app='Applied'){
    firebase.database().ref("company2/" + cname).on("value", function (snapshot) {
        snapshot.forEach(function (csnapshot) {
                    if((csnapshot.val().applied)){
                        add_table_value(csnapshot.key, csnapshot.val().name, csnapshot.val().branch);}
                


        });

    })}
    
}
function sentmail(){    

    var gmail=" "
    firebase.database().ref("company2/" + cname).on("value", function (snapshot) {
        snapshot.forEach(function (csnapshot) {
            if (csnapshot.exists()) {
                add_table_value(csnapshot.key, csnapshot.val().name, csnapshot.val().branch);
                gmail+=csnapshot.val().email+',';
            }

        });

    })
    

    window.location.href='mailto:'+gmail+'';
    lsit_stud() 

    
   
}
