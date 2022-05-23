submitButton()


function handleSubmit(event) {
    event.stopPropagation();
    event.preventDefault();
    console.log(event)
    let yearSearch = document.getElementById('year').value
    let roundSearch = document.getElementById('round').value

    ergastAPICall(yearSearch, roundSearch)
}

function submitButton() {
    // Adding an event listener for the submit button
    let searchButton = document.getElementsByClassName('btn-search')[0].addEventListener('click', handleSubmit);
        
}

async function ergastAPICall(yearSearch, roundSearch) {
    // Passing in the yearSearch & roundSearch from the handleSubmit function
     result = await axios.get(`https://ergast.com/api/f1/${yearSearch}/${roundSearch}/driverStandings.json`);
    for (driver in result) {
        let firstName = document.getElementById('first-name')
        firstName.innerHTML=`${result.givenName}`

        let lastName = document.getElementById('last-name')
        lastName.innerHTML=`${result.familyName}`

        let dob = document.getElementById('DOB')
        dob.innerHTML=`${result.dateOfBirth}`

        let position = document.getElementById('position')
        position.innerHTML=`${result.position}`

        let wins = document.getElementById('wins')
        wins.innerHTML=`${result.wins}`

        let nationality = document.getElementById('nationality')
        nationality.innerHTML=`${result.nationality}`

        let constructor = document.getElementById('constructor')
        constructor.innerHTML=`${result.constructor.name}`
    }

    
    
}