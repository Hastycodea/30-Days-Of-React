const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages)

ages.sort();
console.log(ages)

// min age
console.log(ages[0])

// max age
console.log(ages[ages.length - 1])

let size = ages.length;

if(size % 2 == 1) {
    let index = Math.floor(size / 2);
    console.log(ages[index]);
} else {
    let index1 = size / 2
    let index2 = index1 - 1
    let median = (ages[index1] + ages[index2]) / 2
    console.log(median);
}

// average
const sum = ages.reduce((acc, age) => acc + age, 0);
console.log('Sum: '+sum)
const average = sum / size;
console.log('Average: ' + average.toFixed(2))


