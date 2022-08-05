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
async function get_data() {
    var c_name = document.getElementById('na_text').value;
    var designation = document.getElementById('na_desig').value;
    var vacancy = document.getElementById('na_vacancy').value;
    var package = document.getElementById('na_package').value;
    var date = document.getElementById('datefield').value;
    var contact = document.getElementById('contact_no').value;
    var email = document.getElementById('na_email').value;
    var tenth = document.getElementById('ten').value;
    var twth = document.getElementById('twelve').value;
    var cgpa = document.getElementById('cgpa').value;
    var supply = document.getElementById('supply').value;
    var branch = 0;
    var cs = document.getElementById('cs');
    if (cs.checked === true) {
        branch = "cs," + branch;
        await studentlist("R6", tenth, twth, supply, c_name);
    }
    var bt = document.getElementById('bt');
    if (bt.checked === true) {
        branch = "bt," + branch;
        await studentlist("B6", tenth, twth, supply, c_name);
    }
    var ec = document.getElementById('ec');
    if (ec.checked === true) {
        branch = "ec," + branch;
        await studentlist("T6A", tenth, twth,  supply, c_name);
        await studentlist("T6B", tenth, twth, supply, c_name);
    }
    var me = document.getElementById('me');
    if (me.checked === true) {
        branch = "me," + branch
        await studentlist("M6", tenth, twth, supply, c_name);
    }
    var ma = document.getElementById('ma');
    if (ma.checked === true) {
        branch = "ma," + branch;
        await studentlist("P6", tenth, twth, supply, c_name);
    }
    var mp = document.getElementById('mp');
    if (mp.checked === true) {
        branch = "mp," + branch
        await studentlist("U6", tenth, twth, supply, c_name);
    }
    firebase.database().ref("company/" + c_name).set({
        company_name: c_name,
        designation: designation,
        vacancy: vacancy,
        package: package,
        date: date,
        contact: contact,
        email: email,
        ten: tenth,
        twelve: twth,
        cgpa: cgpa,
        supply: supply,
        branch: branch,
    });

}
async function shortlistStudent(snapshot, tenth, twth,  supply, c_name) {
    snapshot.forEach(function (childsnapshot) {
        if (childsnapshot.exists()) {
            if (childsnapshot.val().validation === '1') {
                
                if (childsnapshot.val().tenth >= tenth && childsnapshot.val().twelfth >= twth  && childsnapshot.val().supply <= supply) {
                    alert(childsnapshot.val().name)
                   firebase.database().ref("company2/" + c_name + "/" + childsnapshot.key).set({
                        name: childsnapshot.val().name,
                        branch: snapshot.key,
                        email:childsnapshot.val().email

                    })

                }
            }

        }
        else {
            console.log("un")
        }


    });
    sessionStorage.setItem("val",'1');
    window.location.href = "Admin_shortlist_list.html"
}

async function studentlist(branch, tenth, twth,supply, c_name) {
    sessionStorage.setItem("c_name", c_name);
    firebase.database().ref("Students/" + branch).on("value", async (snapshot) => {
        await shortlistStudent(snapshot, tenth, twth, supply, c_name)
    });


}

