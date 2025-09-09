const colors = ['red', 'white', 'black'];
const names = ['rajan', 'krishna', 'mummy'];


for(const cmyk of colors) {
    names.push(cmyk);
}

console.log({names});

for(const name of names) {
    console.log(name);
}

