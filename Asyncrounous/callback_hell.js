const makeRequest = (callback) => {

    const request = new XMLHttpRequest()
    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4 && request.status === 200)
            callback(undefined, request.responseText);

        else if (request.readyState === 4)
            callback("404 Error", undefined)
    })

    request.open("GET", "./data.json")
    request.send()
}


makeRequest((err, data) => {

    if(err) console.log(err)
    console.log(data);
    makeRequest((err, data) => {

        if(err) console.log(err)
        console.log(data);
        makeRequest((err, data) => {
            
            if(err) console.log(err)
            console.log(data);
        })
    })

})