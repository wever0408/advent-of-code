// Part 1
// const fs = require('fs')
// fs.readFile('file.txt', (err, inputD) => {
//     if (err) throw err;
//     const fileSplit = inputD.toString().split('\n');
//     // console.log(fileSplit[0])
//     var total = 0;

//     // for (string of fileSplit) {
//     //     var filteredNum = ''
//     //     for (char of string) {
//     //         if (parseInt(char, 10)) {
//     //             filteredNum += char
//     //             // console.log('string', stringNum)
//     //         }
//     //     }
//     //     filteredNum = filteredNum[0] + filteredNum[stringNum.length - 1]
//     //     total = total + parseInt(filteredNum)
//     // }
//     fileSplit.forEach(line => {
//         const numbers = line
//             .split('')
//             .filter(char => Number(char))

//         const [first, last] = [numbers[0], numbers[numbers.length - 1]];
//         console.log(typeof first)
//             // console.log('First last',Number(first + last));
//             // console.log(typeof numbers)
//         total += Number(first + last);

//     })
//     console.log(total)
// })

//Part 2
const fs = require("fs");
const nums = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};

let data = fs.readFileSync("./file.txt", { encoding: "utf8" });

data = data.split("\n");

let total = 0;

data.forEach((element:any) => {
    const numbers = [];
    let wordStartCursor = 0;
    let cursor = 1;

    while (cursor <= element.length) {
      
        const stringSliceToInspect = element.slice(wordStartCursor, cursor);

        //Ex: kkk1kkkk => stringSliceToInspect = kkk1 => stringSliceToInspect[stringSliceToInspect.length - 1] = 1
        if (!isNaN(Number(stringSliceToInspect[stringSliceToInspect.length - 1]))) {
            numbers.push(stringSliceToInspect[stringSliceToInspect.length - 1]);
            wordStartCursor++;
        } else {
            let indexToPush = -1;

            Object.keys(nums).forEach((num, index) => {
                if (stringSliceToInspect.includes(num)) {
                    indexToPush = index;
                }
            });

            if (indexToPush !== -1) {
                numbers.push(String(Object.values(nums)[indexToPush]));
                wordStartCursor = cursor-1; // Need to cursor - 1 => The right calibration values for string "eighthree" is 83 and for "sevenine" is 79
                cursor--; 
            }
        }

        cursor++;
    }
    // console.log(numbers)
    const [first = 0, last = 0] = [numbers[0], numbers[numbers.length - 2]];
    total += Number(first + last);
});

console.log(total);