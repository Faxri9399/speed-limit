const SPPED_LIMIT = 70;
const KM_PER_POINT = 5;
const MAX_POINTS = 12;
checkSpeed(130);
function checkSpeed(speed) {
    if (speed < SPPED_LIMIT + KM_PER_POINT)
    console.log('ok');
    else {
        let points = Math.floor((speed - SPPED_LIMIT) / KM_PER_POINT);
        if (points >= MAX_POINTS) {
            console.log('Guvohnoma olib quyiladi');
        }
        else {
            console.log(points);
        }
    }
}