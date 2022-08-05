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
var a = 0;

function add_table_value(reg_no, name,im) {
    var tbody = document.getElementById("tbody1");
    var trow = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.innerHTML = ++a;
    td2.innerHTML = reg_no;
    td3.innerHTML = name;
    td4.innerHTML=im;

    

    trow.appendChild(td1);
    trow.appendChild(td2);
    trow.appendChild(td3);
    trow.appendChild(td4)
    tbody && tbody.appendChild(trow);
}
function getdata() {
    var a = sessionStorage.getItem("Fac_id");
    var tick='validated'
    var cross='not validated'
    firebase.database().ref("Students/" + a).on("value", function (snapshot) {
        snapshot.forEach(function (csnapshot) {
            if (csnapshot.exists()) {
                if (csnapshot.val().validation==='1') {
                    add_table_value(csnapshot.key, csnapshot.val().name,tick);
                }
                else {
                    add_table_value(csnapshot.key, csnapshot.val().name,cross);
                }
            }

        });

    })
}