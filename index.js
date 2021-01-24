function elevatorDirection(buttons_pressed=null, your_choice, current_floor) {

    let value=null;

    //let's make a default direction when there are no other people
    if(your_choice>current_floor){
        value="Up";
    }else if(your_choice<current_floor){
        value="Down";
    }

    //what happens when there are buttons pressed?
    if(buttons_pressed!==null) {
        //because an elevator always goes to the first pressed number when 1 or more are pressed before you enter, these always overrule your choice!
        for (let index = 0; index < buttons_pressed.length; index++) {
            const button_pressed = buttons_pressed[index];

            if (button_pressed > current_floor) {
                //first button with higher value? UP
                value = "Up";
                break;
            } else if (button_pressed < current_floor) {
                //first button with lower value? DOWN
                value = "Down";
                break;
            }
        }
    }
    return value;
}

module.exports = {
    elevatorDirection: elevatorDirection,
};
