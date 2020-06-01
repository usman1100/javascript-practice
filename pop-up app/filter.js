let list = [12, 34, 5, 60, 90, 47, 33]

let new_list = list.filter(item => item > 40)

let lords = 
[
    {name:"Cheems", gold:"2000"},
    {name:"Omar", gold:"3000"},
    {name:"Sterling", gold:"10000"},
    {name:"Abbot", gold:"500"}
]

lords.forEach(o => console.log(o.name + " " + o.gold))

let rich_lords = lords.filter(lord => lord.gold > 2000)

rich_lords.forEach(o => console.log(o.name + " " + o.gold))