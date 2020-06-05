// Map is used to make modified versions of list

let players_data = [
    {name:"pp lord", score:1400},
    {name:"noodleMan", score:1512},
    {name:"karlM", score:1310},
    {name:"fat bulb", score:1443},
]


let increased_score = []

increased_score = players_data.map((player) => 
{
    return {
                name:player.name, 
                score:player.score*2
            }
}
)


console.log(increased_score)
