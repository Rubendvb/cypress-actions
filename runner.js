const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImI5ZjdhYTZmLTYyODgtNGRhZi04Zjk0LTlmYzEzNmU1ZmY0Mi0xNzQ0Mzg3ODUwMDkzIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTgyMDVhYjgtNWNkZC00Zjc4LTlmYWUtNDYyMjc2OTAzYjY2IiwidHlwZSI6InQifQ.CQfdutnTzo2HmSX7rt5Vbv4Liqs8vk7oqaDkqL0wAs4'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
