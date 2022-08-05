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


function writeUserData() {
  var branch = document.getElementById('branch').value;
  var db = firebase.database().ref(branch + "/");
  var reg = document.getElementById('reg_no').value;
  var na = document.getElementById('na_text').value;
  var ph = document.getElementById('ph_no').value;
  var em = document.getElementById('email').value;
  var date = document.getElementById('datefield').value;
  var ad = document.getElementById('add_area').value;

  var a = document.getElementsByName('gender');
  for (var radio of a) {
    if (radio.checked) {
      var ge = radio.value;
    }
  }
  var batch = document.getElementById('batch').value;
  var tenth = document.getElementById('tenth').value;
  var twth = document.getElementById('12th').value;
  var diploma = document.getElementById('diploma').value;
  var s1 = document.getElementById('s1').value;
  var s2 = document.getElementById('s2').value;
  var s3 = document.getElementById('s3').value;
  var s4 = document.getElementById('s4').value;
  var s5 = document.getElementById('s5').value;
  var s6 = document.getElementById('s6').value;
  var s7 = document.getElementById('s8').value;
  var cgpa = document.getElementById('cgpa').value;
  var supply = document.getElementById('supply').value;



  db.child(reg).update({
    name: na,
    adress: ad,
    email: em,
    branch: branch,
    regno: reg,
    phone_number: ph,
    dob: date,
    gender: ge,
    batch: batch,
    tenth: tenth,
    twelfth: twth,
    diploma: diploma,
    s1: s1,
    s2: s2,
    s3: s3,
    s4: s4,
    s5: s5,
    s6: s6,
    s7: s7,
    s8: s8,
    cgpa: cgpa,
    supply: supply,
    times: '1',
    validation: '0'



  });

}
function stud_readData() {
  var id = document.getElementById('regi_no').value;
  sessionStorage.setItem("reg", id);
  var pass = document.getElementById('pass').value;
  var br = document.getElementById('branch').value;
  sessionStorage.setItem("br", br);
  firebase.database().ref(br + "/" + id).on("value", function (snapshot) {
    if (snapshot.exists()) {
      console.log(snapshot.val());
      if (snapshot.val().password === pass) {
        console.log('passed');
        if (snapshot.val().times === '0') {
          window.location.href = "./register.html";
        } else {
          window.location.href = "./index.html";
        }
      }
      else {
        console.log("unpassed")
      }


    }
    else {
      console.log("wrong")
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


function addcompany() {
  var cnam = document.getElementById('cname').value;

  var desi = document.getElementById('cdesi').value;
  var vacancy = document.getElementById('cvacancy').value;
  var package = document.getElementById('cpackage').value;
  var cno = document.getElementById('ccontact').value;
  var cdate = document.getElementById('cdate').value;
  var email = document.getElementById('cmail').value;

  var l1 = document.getElementById("eca").value;  
  var l2 = document.getElementById("ecb").value;  
  var l3 = document.getElementById("cs");  
  var l4 = document.getElementById("bt");  

  var l5 = document.getElementById("pro").value;
  var l6 = document.getElementById("me").value;
  var l7 = document.getElementById("auto").value;   

  var c10 = document.getElementById('c10').value;
  var c12 = document.getElementById('c12').value;
  var cdiploma = document.getElementById('cdiploma').value;
  var ccgpa = document.getElementById('ccgpa').value;
  var csupply = document.getElementById('csupply').value;  

  if (l1.checked == true){  
    var eca = document.getElementById("eca").value; 
    
    

     
  }   
  if (l2.checked == true){  
    var ecb = document.getElementById("ecb").value;  
     
  } 
  if (l3.checked == true){  
    var cs = document.getElementById("cs").value; 
    alert(cs);
    firebase.database().ref(cs + "/" ).once("value", function (snapshot) {
      if (snapshot.exists()) {
        alert(snapshot.val().tenth);
        if (snapshot.val().tenth === c10) {
          console.log('passed');
          var reg=snapshot.val().regno;
          var db1 = firebase.database().ref(cnam + "/");
          db1.child(reg).set({
            apply:'no'
          });
        }
        else {
          console.log("unpassed")
        }
  
  
      }
      else {
        console.log("wrong")
      }
    });
     
  } 
  if (l4.checked == true){  
    var bt = document.getElementById("bt").value;  
     
  } 
  if (l5.checked == true){  
    var pro = document.getElementById("pro").value;  
     
  } 
  if (l6.checked == true){  
    var me = document.getElementById("me").value;  
     
  } 
  if (l7.checked == true){  
    var auto = document.getElementById("auto").value;  
     
  } 


}

