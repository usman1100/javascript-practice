const makeRequest = () => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let data = JSON.parse(request.responseText);
                resolve(data)
            }

            else if (request.readyState === 4)
                reject("Error: 404 Not Found")
        })

        request.open("GET", "./data.json")
        request.send()

    })
}

makeRequest()
    .then(
        data => {
            console.log("Request 1 Done");
        }
    )
    .then(
        data => {
            console.log("Request 2 Done");
        }
    )
    .then(
        data => {
            console.log("Request 3 Done");
        }
    )
    .catch(err => { console.log(err) })