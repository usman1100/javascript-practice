fetch("./data.json")
    .then(response => {
        console.log(response)
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.log(err))
