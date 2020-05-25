// Calculate Power
let Power = (number, exponent) =>
{
    let result = number;
    for(let i=1; i<exponent; i++)
        result *= number;

    return result;
}


// Beautiful star pattern that doesnt work
let StartPattern = () => {
    let i,j;
    for(i=0; i<5; i++)
    {
        for(j=0; j<5; j++)
        {
            printf("*");
        }
    }

}

// Alternative to logging, it was tedious
let printf = value => console.log(value);

// Rewriting the split function
// TODO
let mySplit = string =>
{
    let words = 0;
    for(let i=0; i<string.length; i++){
        printf(string[i])
    }
}

