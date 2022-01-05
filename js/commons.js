const readline = require("readline");
const { stdin, stdout } = require("process");
const RL = readline.createInterface({
    input: stdin,
    output: stdout
});

function say(text) {
    console.log(text);
}

function ask(text) {
    return new Promise((res, rej) => {
        say(text);
        RL.once("line", res);
    });
}

module.exports = { say, ask };