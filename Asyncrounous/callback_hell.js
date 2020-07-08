const request = new XMLHttpRequest()

request.addEventListener("readystatechange", ()=>{console.log(request.readyState)})


request.open("GET","./data.json")
request.send()