const newPersonButton = document.getElementById("new_person_button");
const personItems = document.getElementsByClassName("person_items")

newPersonButton.addEventListener("click", () => {
    var personIndex = Math.floor(Math.random() * data.results.length);
    console.log(personIndex)

    // changing the person's image
    var personImage = personItems[0];
    personImage.src = data.results[personIndex].picture.large;

    // changing the person's name
    var personName = personItems[1];
    personName.innerText = `${data.results[personIndex].name.first} ${data.results[personIndex].name.last}`;

    // changing the person's gender
    var personGender = personItems[2];
    personGender.innerText = `Gender: ${data.results[personIndex].gender}`
    
    // changing the person's location
    var personLocation = personItems[3];
    personLocation.innerText = `Location: ${data.results[personIndex].location.state}, ${data.results[personIndex].location.country}`

    // changing the person's age
    var personAge = personItems[4];
    personAge.innerText = `Age: ${data.results[personIndex].dob.age}`

    // changing the person's phone number
    var personNumber = personItems[5];
    personNumber.innerText = `Phone Number: ${data.results[personIndex].phone}`

    // changing the person's email
    var personEmail = personItems[6];
    personEmail.innerText = `Email: ${data.results[personIndex].email}`
})