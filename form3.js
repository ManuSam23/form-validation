function validate() {
    var userPattern = /^[A-Za-z]+$/
    var phPattern = /^[6-9]{1}[0-9]{9}$/ //phoneNumber
    var uValue = document.getElementById("uname").value
    var phValue = document.getElementById("phno").value
    var passwd = document.getElementById("pswd").value
    var cnfrmPasswd = document.getElementById("confirm-pwd")


    //if user forgot to enter the username and if condition is true we need to return false in order to check for the the remaining conditions

    if (uValue == "") {
        document.getElementById("msg").innerHTML = "Enter the userName."
        return false
    }
    //if pattern is matching we should tell true, else return false.
    if (uValue.match(userPattern))
        true;
    else {
        document.getElementById("msg").innerHTML = "Enter only alphabets \"A-Za-z\" "
        return false
    }

    if (uValue.length < 3) {
        document.getElementById("msg").innerHTML = "UserName should contain minimum 3 characters"
        return false
    }
    if (uValue.length > 10) {
        document.getElementById("msg").innerHTML = "UserName should contain maximum 10 characters only!"
        return false
    }

    if (phValue == "") {
        document.getElementById("msg1").innerHTML = "Enter the phone number."
        return false
    }
    if (phValue.match(phPattern))
        true;
    else {
        document.getElementById("msg1").innerHTML = "Ivalid Phone Number"
        return false
    }
    if (passwd.match(cnfrmPasswd))
        true;
    else {
        document.getElementById("msg2").innerHTML = "Password not Matched"
        return false
    }


    /*Note:
    In pattern only we specified length of the number, no need to check the minimum and maximum length of the phone number again */
}

/*
for UserName:
--------------
i) conditions to follow:
1.The username should contain only alphabets only.
2. Spaces and empty should not be present
3. Minimum length
4. Maximum characters

ii)

^ --> char at symbol represents starts with
[A-Z / a-z]
$ --> dollar symbol represents ends with[A-Z / a-z].

iii)

Now pattern is created and stored inside a variable,
Now we need to get the input data from the user and
we need to take this pattern by passing it to respected condition.

iv)
.value is used to fetch the value from the html file

v) we should invoke the function in html file in order to perform validation

(Note: once we click submit button then only the validation will be checked, while typing the text validation will  not be checked.)

below is the spread sheet link

https://docs.google.com/spreadsheets/d/12Y2ABU-hdC3LHO_8JncD0ja9nR2ATpKdqB6FrFSgt2U/edit#gid=0

*/