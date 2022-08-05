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

var flag = 0;

function stud_readData() {
    
    var id = document.getElementById('regi_no').value;
    sessionStorage.setItem("reg", id);
    var pass = document.getElementById('pass').value;
    firebase.database().ref("Students/").on("value", function (snapshot) {
        snapshot.forEach(function (childsnapshot) {
            childsnapshot.forEach(function (childchild) {
                if (childchild.exists()) {
                    if (childchild.key === id) {
                        flag = 1;
                        if (childchild.val().password === pass) {
                            sessionStorage.setItem("branch",childsnapshot.key);
                            alert(childsnapshot.key)
                            window.location.href = "./index.html";
                        }
                        else {
                                
                                document.getElementById("warning").removeAttribute("hidden");
                        }
                    }
                }
                    
            });
        });
        document.getElementById("warning").removeAttribute("hidden");

    });
}
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}