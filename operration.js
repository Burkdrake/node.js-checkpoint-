//sychronous operation
// const fs = require('fs');
// //fs is the file system module we will see later
// const data = fs.readFileSync('mytext.txt');

// console.log(data.toString());
// console.log("program ended");


//async function
const fs = require('fs');
fs.readFile('mytext.txt', function(err, data) {
    // This is the callback function
    if (err) {
        // Handle the error
        console.error('Error reading the file:', err);
    } else {
        // No error, log the contents of the file (converted to a string) to the console
        console.log(data.toString());
    }
});

console.log("Program ended");
