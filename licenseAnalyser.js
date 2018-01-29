const list = require('./SWLicenses.json')

let counter = {}

Object.keys(list).forEach((library) => {
  let actualLicense = list[library].licenses
  counter[actualLicense] ? counter[actualLicense]++ : counter[actualLicense] = 1
  if (actualLicense === 'LGPL' || actualLicense === 'LGPL-3.0') {
    console.log(library, ":", actualLicense)
  }
})

console.log(counter)





