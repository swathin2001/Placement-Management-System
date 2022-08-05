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
function tick11() {
    var pass = document.getElementById("pass").value;
    var conf = document.getElementById("conf").value;
    var im = document.getElementById("tick");
    var bt = document.getElementById("btn11");
    if (pass === conf) {
        im.removeAttribute("hidden");
        bt.removeAttribute("disabled");

    }
    else {
        im.setAttribute("hidden", "hidden");
        bt.setAttribute("disabled");
    }
}
function change_password() {
    var a = sessionStorage.getItem("Fac_id");
    var pas = document.getElementById("pass").value;
    firebase.database().ref("Faculty/" + a).update({
        pass: pas
    })
}