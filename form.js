function validateUserData(){

    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const emailAddress = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phonenumber").value;
    const eircode = document.getElementById("eircode").value;

    //Checks if the firstname and lastname are alphanumeric and lenght of 20 characters or it gives error message
    if(!/^[a-zA-Z0-9]{1,20}$/.test(firstName, lastName)){
        alert("First name and second name must be alphanumeric and of length 20 characters (Max).");
    }

    //Checks if the email is correct structured or it gives error message
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress)){
        alert("Email must follow the correct email structure.");
    }

    //Checks if the phone number is numeric and length of 10 or it gives error message
    if(!/^[0-9]{10}$/.test(phoneNumber)){
        alert("Phone number must contain only numeric characters and be of length 10.");
    }

    //Checks if the eircode is starts with number, alphanumeric and length of 6 or it gives error message
    if(!/^[0-9][a-zA-Z0-9]{5}$/.test(eircode)){
        alert("Eircode must start with a number, be alphanumeric, and have a length of 6 characters.");
    }

    if(firstName && lastName && emailAddress && phoneNumber && eircode){
    
        alert("Success!")
    }else{
        alert("Please try again, make sure all required fields are filled in")
    }
    

}