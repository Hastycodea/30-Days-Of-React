const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

  console.log(countries)

//   countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia')
//   console.log(countries)

  const middle = Math.floor(countries.length / 2);

  if(countries.length % 2 === 0) {
    console.log(countries[middle -1])
    console.log(countries[middle])
  } else {
    console.log(countries[middle])
  }

  const sliced = countries.slice(2, 4)
  console.log(sliced)

  // dividing the countries into two equal parts
  const partOne = countries.slice(0, middle + countries.length % 2);
  const partTwo = countries.slice(middle + countries.length % 2);

  console.log(partOne);
  console.log(partTwo);