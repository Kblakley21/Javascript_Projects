let currentClips = 0
let currentCash = 5.0
let wireStock = 20;
let outOfWire = document.getElementById('failed-to-make').innerText = 'Out of Wire!'
let outOfCash = document.getElementById('failed-to-buy').innerHTML = "You're out of money!"
//initial variable testing
console.log(currentClips)
console.log(currentCash)
console.log(wireStock)
console.log(outOfWire)


//add 1 to currentClips when button onclick occurs
function addClips() {

    if (wireStock >= 4) {
        currentClips++;
        document.getElementById('clip-counter').addEventListener('click', currentClips++, false)
        console.log(currentClips);
        wireStock -= 4
        document.getElementById('wire-stock').innerText = wireStock
        console.log(wireStock)
    } else {
        const deniedMake = 'Not enough wire!'
        document.getElementById('failed-to-make').innerText = deniedMake
        console.log('not enough wire!')
    }

    function buyWire() {
    let test = getNumbers()
        if (currentCash >= .10) {
            wireStock++
            Math.floor(currentCash -= .10)
            document.getElementById('wire-stock'.innerText) == wireStock
            document.getElementById('current-cash'.innerText) == currentCash
        } else {
            document.getElementById('failed-to-buy'.innerText) == outOfCash

            console.log('Out of cash!')
        }
        console.log(wireStock)
        console.log(currentCash)
    }
}