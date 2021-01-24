const elevatorDirection = require("./index").elevatorDirection;

test("elevatorDirection() function should return the direction it goes when you are entering the elevator and you make your choice, but 1 (or more) buttons are already pressed", () => {
    // ARRANGE
    const buttons_pressed = [3, 1, -2];
    const your_choice = 0;
    const current_floor = 2;

    // ACT
    const result = elevatorDirection(buttons_pressed, your_choice, current_floor);

    // ASSERT
    expect(result).toBe("Up");
});

