const { say, ask } = require("./commons");
const chance = require("chance")();

let character = {};

async function setup() {
    // Generate character
    character["name"] = await ask("What is your name?");
    character["age"] = 1;
    character["gender"] = chance.gender();
    character["alive"] = true;
    character["traits"] = {};
    
    character["traits"]["playful"] = 0;

    console.log(character);
}

async function live() {
    if (character.age < 4) {
        switch (Math.floor(Math.random() * 3)) {
            case 0:
                say(
                    "You say something to your parents, \
                    but they think you are hungry."
                );
                say("Little do they know that you want to play.");
                character["traits"]["playful"] += 1;
                break;
            case 1:
                say("Your parents wanted to play with you, \
                    but you fell asleep.");
                character["traits"]["playful"] -= 1;
                break;
            case 2:
                say("You played with some bricks.");
                character["traits"]["playful"] += 2;
                break;
        }
    } else if (age < 7) {
        // TODO
    }
}

(async () => {
    await setup();
    while (character.alive) {
        await live();
    }
    process.exit();
})();
