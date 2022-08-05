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
var a = 0
function add_table_value(cname) {
    var tbody = document.getElementById("tbody1");
    var trow = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.innerHTML = ++a;
    td2.innerHTML = cname;

    trow.appendChild(td1);
    trow.appendChild(td2);

    trow.setAttribute('onclick', "select(this)")

    tbody && tbody.appendChild(trow);
}

function list_company() {
    firebase.database().ref("company2").on("value", function (snapshot) {
        snapshot.forEach(function (csnapshot) {
            if (csnapshot.exists()) {
                add_table_value(csnapshot.key);
            }

        });

    })
}

function select(x) {
    alert(x.cells[1].innerHTML)
    sessionStorage.setItem("c_name", x.cells[1].innerHTML);
    window.location.href = "./Admin_shortlist_list.html";
}