function distanceFromHqInBlocks(pickup)
{
    return Math.abs(pickup-42);
}

function distanceFromHqInFeet(pickup)
{
    return 264*distanceFromHqInBlocks(pickup)
}

function distanceTravelledInFeet(start, end)
{
    return (Math.abs(start-end))*264;
}

function calculatesFarePrice(start, destination)
{
    let totalCharge;
    let distance = distanceTravelledInFeet(start, destination);
    if (distance > 2500)
        return 'cannot travel that far';
    else
    {
        if (distance-400 <= 0)
            return 0;
         else if (distance > 2000)
            return 25;
        totalCharge = .02*(distance-400);
    }

    return totalCharge;
}