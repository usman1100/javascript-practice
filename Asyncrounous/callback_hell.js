const request = new XMLHttpRequest()

request.addEventListener("readystatechange", ()=>{console.log(request.statusText)})


request.open("GET","./data.json")
request.send()