///Part 1
const fs = require('fs')

// fs.readFile('input2.txt',(data, err) => {
//     if (err) throw err

// })

const data = fs.readFileSync("./Day2.txt", { encoding: "utf8" });

var games:Array<string> = data.split('\n');

var total = 0;

//Game 1: 4 blue, 16 green, 2 red; 5 red, 11 blue, 16 green; 9 green, 11 blue; 10 blue, 6 green, 4 red
total = games
    .map((game: string) => game.split(':')[1]) // total = 4 blue, 16 green, 2 red; 5 red, 11 blue, 16 green; 9 green, 11 blue; 10 blue, 6 green, 4 red
    .reduce((acc: number, game: string, index: number) => {
    let flag = 0;
    const setsOfCubes = game.split(';'); // setsOfCubes = [" 4 blue, 16 green, 2 red", ...]

    for (const set of setsOfCubes) { // set = [" 4 blue, 16 green, 2 red"]
        const cubes = set.split(',');// cubes = [' 4 blue', ' 16 green', ' 2 red']
        for (const cube of cubes) {
            if (cube.includes('red')){
                if (parseInt(cube.split(' ')[1]) > 12) {
                    flag = 1; 
                    break;
                }
            }
            else if (cube.includes('green')){
                if (parseInt(cube.split(' ')[1]) > 13)  {
                    flag = 1; 
                    break;
                }
            }
            else if (cube.includes('blue')){
                if (parseInt(cube.split(' ')[1]) > 14)  {
                    flag = 1; 
                    break;
                }
            }
        }
        if (flag === 1) break;
           
    }
    if (flag === 0) return acc + (index + 1); //index + 1 is the number of game
    return acc;
},0)

console.log(total)

//Part 2
const fs = require('fs')

// fs.readFile('input2.txt',(data, err) => {
//     if (err) throw err

// })

const data = fs.readFileSync("./Day2.txt", { encoding: "utf8" });

var games:Array<string> = data.split('\n');

var total = 0;

//Game 1: 4 blue, 16 green, 2 red; 5 red, 11 blue, 16 green; 9 green, 11 blue; 10 blue, 6 green, 4 red
total = games
    .map((game: string) => game.split(':')[1]) // total = 4 blue, 16 green, 2 red; 5 red, 11 blue, 16 green; 9 green, 11 blue; 10 blue, 6 green, 4 red
    .reduce((acc: number, game: string, index: number) => {
    let flag = 0;
    const setsOfCubes = game.split(';'); // setsOfCubes = [" 4 blue, 16 green, 2 red", ...]
    let maxRed = 0;
    let maxGreen = 0;
    let maxBlue = 0;

    for (const set of setsOfCubes) { // set = [" 4 blue, 16 green, 2 red"]
        const cubes = set.split(',');// cubes = [' 4 blue', ' 16 green', ' 2 red']
        for (const cube of cubes) {
            if (cube.includes('red')){
                maxRed = Math.max(parseInt(cube.split(' ')[1]),maxRed);
            }
            else if (cube.includes('green')){
                 maxGreen = Math.max(parseInt(cube.split(' ')[1]),maxGreen);
            }
            else if (cube.includes('blue')){
                 maxBlue = Math.max(parseInt(cube.split(' ')[1]),maxBlue);
            }
        }
        if (flag === 1) break;
           
    }
    if (flag === 0) return acc + (maxRed*maxGreen*maxBlue); //index + 1 is the number of game
    return acc;
},0)

console.log(total)