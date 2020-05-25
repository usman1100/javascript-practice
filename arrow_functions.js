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


printf(Power(5,3))
