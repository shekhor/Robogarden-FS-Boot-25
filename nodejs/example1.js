console.log("Hello from Node.js!");
const path = require('path');


const x = path.parse(__filename);
console.log(x);



const filePath = path.join(__dirname, 'example1.js');

console.log(`The file path is: ${filePath}`);


const os = require('os');

const type = os.type();
const release = os.release();
const totalMem = os.totalmem();
const freeMem = os.freemem();

console.log(`Operating System: ${type}`);
console.log(`OS Release: ${release}`);
console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMem}`);

const userInfo = os.userInfo();
console.log(`User Info: ${JSON.stringify(userInfo)}`);


const fs = require('fs');

fs.writeFileSync('example.txt', 'This is an example file created using Node.js fs module.');

const data = fs.readFileSync('example.txt', 'utf8');
console.log(`File Content: ${data}`);

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(`Asynchronous File Content: ${data}`);
});

console.log("End of the script.");


