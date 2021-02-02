function elevatorDirection(buttons_pressed=null, your_choice, current_floor) {

    let value=null;

    if(your_choice > current_floor)
        value="Up";
    else if (your_choice < current_floor)
        value="Down";

    if(floorPriority(buttons_pressed, current_floor) > your_choice)
        value="Up";
    else if(floorPriority(buttons_pressed, current_floor) < your_choice)
        value="Down";

    return value;
}

function floorPriority(buttons_pressed, current_floor){

    let output;

    for(let i=0; i<buttons_pressed.length; i++){
        if(buttons_pressed[i]!==current_floor){
            output = buttons_pressed[i];
            break;
        }
    }

    return output;
}

function sameFloor(your_choice, current_floor){
    return your_choice === current_floor;
}

module.exports = {
    elevatorDirection: elevatorDirection,
    sameFloor: sameFloor,
    floorPriority: floorPriority,
};
