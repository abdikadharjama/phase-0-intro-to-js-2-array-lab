// Write your solution here!

// is assigned an initial value of ["Milo", "Otis", "Garfield"]
const cats = ["Milo", "Otis", "Garfield"];
// appends a cat to the end of the cats array
function destructivelyAppendCat(name) {
  cats.push(name);
}

function appendCat(name) {
  return [...cats, name];
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function prependCat(name) {
  return [name, ...cats];
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function removeLastCat() {
  return cats.slice(0, -1);
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

function removeFirstCat() {
  return cats.slice(1);
}

module.exports = {
  cats,
  destructivelyAppendCat,
  appendCat,
  destructivelyPrependCat,
  prependCat,
  destructivelyRemoveLastCat,
  removeLastCat,
  destructivelyRemoveFirstCat,
  removeFirstCat,
};
