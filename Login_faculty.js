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
function Fac_readData() {
      var id = document.getElementById('id_no').value;
      sessionStorage.setItem("Fac_id", id);
      var pass = document.getElementById('pass').value;

      firebase.database().ref('Faculty/' + id).on("value", function (snapshot) {
            if (snapshot.exists()) {
                  if (snapshot.val().pass === pass) {
                        console.log('passed');
                        window.location.href = "./Faculty_studlist.html";
                  }
                  else {
                        document.getElementById("warning").removeAttribute("hidden");
                  }


            }
            else {
                  document.getElementById("warning").removeAttribute("hidden");
            }
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

