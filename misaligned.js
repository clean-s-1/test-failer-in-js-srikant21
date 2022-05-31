const {expect} = require('chai')
const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

function print_color_map(majorColors,minorColors) {
    for (let i = 0; i < majorColors.length; i++) {
        for (let j = 0; j < minorColors.length; j++) {
            console.log(`${i * 5 + j + 1} | ${majorColors[i]} | ${minorColors[j]}`);
        }
    }    
}

function print_color_length(majorColors,minorColors){
    return majorColors.length * minorColors.length;
}

result = print_color_map(majorColors,minorColors);
printColorLength = print_color_length(majorColors,minorColors);
expect(printColorLength).equals(25);
console.log('All is well (maybe!)');
