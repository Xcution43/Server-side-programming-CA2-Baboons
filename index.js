// Simulated CSV Data
// const csvData = `"John, Doe",30,"johndoe@example.com, 0893216548, 1YR5DD"
// "Jane, Smith","janesmith@example.com, 0892856548, 8MH7WE"
// "Michael, Johnson","michaeljohnson@example.com, 0898523694, 7RP0RR"
// "Tommy, Bean","michaeljohnson@example.com, 0894859612, EYR5DD"`
//testing push and pull on github
//testing again

var express = require("express");
var app = express();
var connection = require('./database');
var path = require('path');
//Importing modules


app.use(express.static(__dirname));

app.use(express.urlencoded({extended:true}));

app.get('/', function(req, res){

    res.sendFile(__dirname + '/form.html');
})

//Defining a route
// app.post('/submit', function(req, res){

//     const {first_name, last_name, email_address, phone_number, eircode} = req.body;

//     if(first_name && last_name && email_address && phone_number && eircode){

//         const sql = "INSERT INTO mysql_table (first_name, last_name, email_address, phone_number, eircode)VALUES (?, ?, ?, ?, ?)" ;
//         //Preparing SQL query for data
//         connection.query(sql, [first_name, last_name, email_address, phone_number, eircode], function(err, result){

//             if(err){
//                 console.error("Error inserting data: ", err);
//                 return res,req("Error: Could not insert data into the database");
//             }

//             res.redirect("/home.html");
//             //Redirecting to the home page afer submission
//         });

//     }else{
//         res.send("Please try again");
//         //Sending error message for missing field
//     }
// });

// app.get("/home", function(req, res){
//     res.sendFile(__dirname + '/home.html');
// });

app.listen(3000, function(){

    console.log("App listening on port 3000");
    //Starting port 3000 and connecting database
    connection.connect(function(err){

        if(err) throw err;
        console.log('Database connected');
        //Connecting to the database
    })
})