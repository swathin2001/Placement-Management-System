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

// Initialize Firebasefunction
firebase.initializeApp(firebaseConfig);
var a;
function getcompany()
{
    var reg=sessionStorage.getItem("reg");
    firebase.database().ref("company2/").on("value",function(snapshot){
        a=0;
        snapshot.forEach(function(childsnapshot) {
            childsnapshot.forEach(function(childchild){
                if(childchild.key===reg){
                    if(childchild.val().applied){
                        displaytable(childsnapshot);
                    }
                }

            })
            
        });

    })
}
function displaytable(snapshot)
{
    var tbody=document.getElementById("tbody1");
    var trow=document.createElement("tr");
    var td1=document.createElement("td");
    var td2=document.createElement("td");
    td1.innerHTML=++a;
    td2.innerHTML=snapshot.key;
    trow.appendChild(td1);
    trow.appendChild(td2);
    tbody & tbody.appendChild(trow);
}