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


async function writeUserData() {
  var branch = document.getElementById('branch').value;
  var db = firebase.database().ref("Students/" + branch + "/");
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
  var password = document.getElementById('password').value;
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


  await db.child(reg).update({
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
    password: password,
    supply: supply,
    times: '1',
    validation: '0'
  })
  console.log("reached end of function!");
  window.location.href = "./Login_Student.html"
  s
}

function tttt() {
  alert("aaa")
  //   document.getElementById("diploma").disabled = true;
}
