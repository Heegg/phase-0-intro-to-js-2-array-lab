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
    const removeLastCat = [cats]
    cats.slice(1)
}

function removeFirstCat(name) {
    cats.shift(`${name}`)
}