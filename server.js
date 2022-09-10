const axios = require("axios");

axios.post('https://contact.plaid.com/jobs', {
  name: "Christopher Lee",
  email: "cl114@illinois.edu",
  resume: "https://drive.google.com/file/d/1MTUJkiPPFqw1-kM5H-1ZxoaPo1wPmFA6/view?usp=sharing",
  phone: "224-713-5848",
  job_id: "64bb7054-d5e6-4d35-96c7-eae6753402b4", 
  github: "https://github.com/cleeclee123", 
  twitter: "", 
  website: "https://www.linkedin.com/in/christopher-lee-4311241a6/", 
  location: "Highland Park", 
  favorite_candy: "Sour Patch Kids", 
  superpower: "Shapeshifting"
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});