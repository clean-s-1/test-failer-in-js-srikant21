const {expect} = require('chai')
const majorColors = ["White", "Red", "Black", "Yellow", "Violet"];
const minorColors = ["Blue", "Orange", "Green", "Brown", "Slate"];

function print_color_map(majorColors,minorColors) {
    let colorIndex;
    for (let majCount = 0; majCount< majorColors.length; majCount++) {
        for (let minCount = 1; minCount < minorColors.length; minCount++) {
            colorIndex = print_color_index(majCount,minCount);
            console.log(colorIndex +` ${majorColors[majCount]} | ${minorColors[minCount]}`);
        }
    }    
}

function print_color_index(majColorCount,minColorCount){
    return majColorCount * 5 + minColorCount + 1 ;
}

function print_color_length(majorColors,minorColors){
    return majorColors.length * minorColors.length;
}

result = print_color_map(majorColors,minorColors);
printColorLength = print_color_length(majorColors,minorColors);
expect(printColorLength).equals(25);
console.log('All is well (maybe!)');
