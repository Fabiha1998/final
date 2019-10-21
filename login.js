console.log('login.js');

document.getElementById("sub-btn").addEventListener('click', (e) => {
    e.preventDefault();
    var email = document.getElementById('email').value;
    var password = document.getElementById('message').value;

    // console.log(name, email, password);

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user);
        if(email == "crossfitsadmin@gmail.com") {
            location.href = "./index2.html";    
        } else {
            location.href = "./index1.html";
        }
    }).catch(function (error) { // * Edited here
        console.log(error);
        // ...
    });;
});
