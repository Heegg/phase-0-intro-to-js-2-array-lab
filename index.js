// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(`${name}`);
}

function destructivelyPrependCat(name) {
    cats.unshift(`${name}`);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const appendCat = [...cats, `Broom`]
    return appendCat
}

function prependCat(name) {
    const prependCat = ["Arnold", ...cats]
    return prependCat
}

function removeLastCat(name) {
    const removeLastCat = cats.slice(0,2)
    return removeLastCat
}


function removeFirstCat(name) {
    const removeFirstCat = cats.slice(1)
    return removeFirstCat
}
