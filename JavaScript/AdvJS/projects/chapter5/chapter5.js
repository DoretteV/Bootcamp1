//Math multiplication table

let multiTable = [];
let rows = 8;
let cols = 8;
let temp;
for (let i = 0; i < rows; i++) {                        //add rows until its 8
    temp = [];
    for (let x = 0; x < cols; x++){                     //add columsn until its 8
        temp.push(i*x);
    }
    multiTable.push(temp);                              //push temp onto table
}
console.log(multiTable);










