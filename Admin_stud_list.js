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



function add_table_value(c, reg_no, name) {
    var tbody = document.getElementById("tbody1");
    var trow = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = c;
    td2.innerHTML = reg_no;
    td3.innerHTML = name;

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.setAttribute('onclick', "select(this)")
    tbody && tbody.appendChild(trow);
}
function list_student() {
    var tbody = document.getElementById("tbody1");
    tbody.innerHTML = "";
    var a = document.getElementById('branch').value;

    var c = 0;
    firebase.database().ref("Students/" + a).on("value", function (snapshot) {
        snapshot.forEach(function (csnapshot) {
            if (csnapshot.exists()) {
                if (!(csnapshot.val().name)) {
                    add_table_value(++c, csnapshot.key, "not registered");
                }
                else {
                    add_table_value(++c, csnapshot.key, csnapshot.val().name);
                }
            }

        });

    })
}

function select(x) {

    var a = document.getElementById('branch').value;

    firebase.database().ref("Students/" + a + "/" + x.cells[1].innerHTML).on("value", function (snapshot) {
        $("#reg").html(snapshot.key);
        $("#na").html(snapshot.val().name)
        $('#batch').html(snapshot.val().batch)
        $('#brn').html(a)
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
async function delete1() {
    await firebase.database().ref("Students/" + $("#brn").text() + "/" + $('#reg').text()).remove();
    var tbody = document.getElementById("tbody1");
    tbody.innerHTML = "";
    await firebase.database().ref("company2").on("value",function(snapshot){
        snapshot.forEach(function(childsnapshot){
            childsnapshot.forEach(function(child){
                if(child.key===$('#reg').text())
                {
                    firebase.database().ref("company2/"+childsnapshot.key+"/"+child.key).remove();
                }

            })
        })
    })
    list_student();
}





