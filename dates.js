let date = new Date();

let days = 
{
    0:"Sunday",
    1:"Monday",
    2:"Tuesday",
    3:"Wednesday",
    4:"Thursday",
    5:"Friday",
    6:"Saturday"
}
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDay())

console.log(days[date.getDay()])