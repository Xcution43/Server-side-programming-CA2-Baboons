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


app.listen(3000, function(){

    console.log("App listening on port 3000");
    //Starting port 3000 and connecting database
    connection.connect(function(err){

        if(err) throw err;
        console.log('Database connected');
        //Connecting to the database
    })
})

// Simulated CSV Data
const csvData = `"John, Doe","johndoe@example.com, 0893216548, 1YR5DD"
                "Jane, Smith","janesmith@example.com, 0892856548, 8MH7WE"
                "Michael, Johnson","michaeljohnson@example.com, 0898523694, 7RP0RR"
                "Tommy, Bean","michaeljohnson@example.com, 0894859612, EYR5DD"`


//Function to process the CSV Data
function processCSVData(csvData){

    //Comma Seperated Value - csv
    const rows = csvData.split("\n");
    //Here we are splitting the data by the comma
    const formattedData = rows.map( row =>{
        //Taking in the each row and creating columns from the data for each comma
        const columns = row.split(",");
        return {
            //The format must meet the number of the columns
            //Construct this by using Key: Value pairs
            //Index:0 index:1 index:2 ...
            firstname:columns[0].replace(/"/g, '').trim(),
            lastname:columns[1].replace(/"/g, '').trim(),
            email:columns[2].replace(/"/g, '').trim(),
            phonenumber:parseInt(columns[3]),
            eircode:columns[4].replace(/"/g, '').trim()

        };
    })

    //Returning formatted data
    return formattedData;
}

console.log("CSV data: " + csvData);
const formattedCSVData = processCSVData(csvData);
console.log("Formatted CSV Data: ", formattedCSVData);