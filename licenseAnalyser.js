const crawler = require('npm-license-crawler')
const options = {
  start: '../smartwallet-app'
}

crawler.dumpLicenses(options, (err, res) => {
  if (err) {
    console.log('Error in license dump')
  }
  printOut(res)
})

function printOut (list) {

  let counter = {}

  Object.keys(list).forEach((library) => {
    let actualLicense = list[library].licenses
    counter[actualLicense] ? counter[actualLicense]++ : counter[actualLicense] = 1
    if (actualLicense === 'LGPL' || actualLicense === 'LGPL-3.0') {
      console.log(library, ":", actualLicense)
    }
  })

  console.log(counter)
}
