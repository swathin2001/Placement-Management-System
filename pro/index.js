
const firebaseConfig = {
    apiKey: "AIzaSyA1tMoiRE2s1jqpCC3CNYaHrntHnVnQwkc",
    authDomain: "placement-8090d.firebaseapp.com",
    projectId: "placement-8090d",
    databaseURL:"https://placement-8090d-default-rtdb.firebaseio.com/",
    storageBucket: "placement-8090d.appspot.com",
    messagingSenderId: "673055680688",
    appId: "1:673055680688:web:a0a1657518d197b489f375",
    measurementId: "G-217S09X0KE"
  };
firebase.initializeApp(firebaseConfig);
function sub()
    {

    

const reg=document.getElementById('id5').value;
const pswd=document.getElementById('id6').value;
  const db = firebase.database().ref('users/'+reg).set({
    password :pswd
  
  });
  modi();
} 
function modi()
{    let tem1;
     let val4='SCT';
     num=num-1;
    
    if(num<10)
    {
       tem1=num.toString();
       val1='00'+tem1;
    }
    else
    {
        tem1=num.toString();
        
        val1=0+tem1;
       
    }
                       val5=val4+val3+val2+val1;
                      alert(val5);
                      document.getElementById("id5").value=val5;
     if(num==0)
     {
      document.getElementById("id5").value='';
      document.getElementById("id6").value='';
      document.getElementById("submit").disabled = true;
     }                 
                    
}