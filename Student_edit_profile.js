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

  var reg_no=sessionStorage.getItem("reg");
  var br=sessionStorage.getItem("branch");
  function loaddata(){
    firebase.database().ref("Students/"+br+"/"+reg_no).on("value",function(snapshot){
        document.getElementById('na_text').value=snapshot.val().name;
        document.getElementById('add_area').value=snapshot.val().adress;
        document.getElementById('email').value=snapshot.val().email;
        document.getElementById('branch').value=br
      document.getElementById('reg_no').value=reg_no
      document.getElementById('ph_no').value=snapshot.val().phone_number;
      document.getElementById('datefield').value=snapshot.val().dob;
      document.getElementsByName('gender').value=snapshot.val().gender;
      document.getElementById('batch').value=snapshot.val().batch
      document.getElementById('tenth').value=snapshot.val().tenth
      document.getElementById('12th').value=snapshot.val().twelfth
      document.getElementById('diploma').value=snapshot.val().diploma
      document.getElementById('s1').value=snapshot.val().s1
      document.getElementById('s2').value=snapshot.val().s2
      document.getElementById('s3').value==snapshot.val().s3
      document.getElementById('s4').value=snapshot.val().s4
      document.getElementById('s5').value=snapshot.val().s5
      document.getElementById('s6').value=snapshot.val().s6
      document.getElementById('s7').value=snapshot.val().s7
      document.getElementById('s8').value=snapshot.val().s8
      document.getElementById('cgpa').value=snapshot.val().cgpa
      document.getElementById('supply').value=snapshot.val().supply

    })
    document.getElementById('reg_no').setAttribute("disabled","true");
    document.getElementById('branch').setAttribute("disabled","true")
    document.getElementById('na_text').setAttribute("disabled","true")


    
  }

  
  
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
  
    var db = firebase.database().ref("Students/" + branch + "/");

  
  
    await db.child(reg).update({
      name: na,
      adress: ad,
      email: em,
      branch: branch,
      regno: reg,
      phone_number: ph,
      dob: date,
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
  