const elevatorDirection = require("./index").elevatorDirection;
const sameFloor = require("./index").sameFloor;
const floorPriority = require("./index").floorPriority;

test("elevatorDirection() function should return the direction it goes when you are entering the elevator and you make your choice, with the possibility of 1 (or more) buttons are already pressed", () => {
    // ARRANGE
    const buttons_pressed = [3, 1, -2];
    const your_choice = 0;
    const current_floor = 2;

    // ACT
    const result = elevatorDirection(buttons_pressed, your_choice, current_floor);

    // ASSERT
    expect(result).toBe("Up");
});

test("elevatorDirection() function should return the direction it goes when you are entering the elevator and you make your choice, with the possibility of 1 (or more) buttons are already pressed", () => {
    // ARRANGE
    const buttons_pressed = [0];
    const your_choice = 0;
    const current_floor = 0;

    // ACT
    const result = elevatorDirection(buttons_pressed, your_choice, current_floor);

    // ASSERT
    expect(result).toBe(null);
});

test("elevatorDirection() function should return the direction it goes when you are entering the elevator and you make your choice, with the possibility of 1 (or more) buttons are already pressed", () => {
    // ARRANGE
    const buttons_pressed = [];
    const your_choice = 2;
    const current_floor = 2;

    // ACT
    const result = elevatorDirection(buttons_pressed, your_choice, current_floor);

    // ASSERT
    expect(result).toBe(null);
});

test("elevatorDirection() function should return the direction it goes when you are entering the elevator and you make your choice, with the possibility of 1 (or more) buttons are already pressed", () => {
    // ARRANGE
    const buttons_pressed = [2];
    const your_choice = -1;
    const current_floor = 2;

    // ACT
    const result = elevatorDirection(buttons_pressed, your_choice, current_floor);

    // ASSERT
    expect(result).toBe("Down");
});


test("elevatorDirection() function should return the direction it goes when you are entering the elevator and you make your choice, with the possibility of 1 (or more) buttons are already pressed", () => {
    // ARRANGE
    const buttons_pressed = [-1, -2, 2];
    const your_choice = 6;
    const current_floor = 4;

    // ACT
    const result = elevatorDirection(buttons_pressed, your_choice, current_floor);

    // ASSERT
    expect(result).toBe("Down");
});

test("sameFloor() function should check if your choice is the same as the current floor", () => {
    // ARRANGE
    const your_choice = 2;
    const current_floor = 2;

    // ACT
    const result = sameFloor(your_choice, current_floor);

    // ASSERT
    expect(result).toBe(true);
});

test("sameFloor() function should check if your choice is the same as the current floor", () => {
    // ARRANGE
    const your_choice = 1;
    const current_floor = 2;

    // ACT
    const result = sameFloor(your_choice, current_floor);

    // ASSERT
    expect(result).toBe(false);
});

test("floorPriority checks which button/floor has priority above the others", () => {
    const buttons_pressed = [2, 3, 8, 4, 3];
    const current_floor = 2;

    // ACT
    const result = floorPriority(buttons_pressed, current_floor);

    // ASSERT
    expect(result).toBe(3);
});