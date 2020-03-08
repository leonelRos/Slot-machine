//create constants
const slotLookup = {
    cherry: {
        imgUrl: 'slot_img/cherry.jpg',
        value: 'c'
    },
    watermelon: {
        imgUrl: 'slot_img/watermelon.jpg',
        value: 'w'
    },
    star: {
        imgUrl: 'slot_img/star.jpg',
        value: 's'
    },
    orange: {
        imgUrl: 'slot_img/orange.jpg',
        value: 'o'
    },
    banana: {
        imgUrl: 'slot_img/banana.jpg',
        value: 'b'
    },
}
const fruits = ["cherry", "watermelon", "star", "orange", "banana"]

//event listeners
const box1 = document.querySelector('#img0 img')
const allBoxes = document.querySelectorAll("td")
const msg = document.getElementById('msg')
const insert = document.querySelector('.insert')
const coin = document.querySelector('.coin')


document.querySelector('.start').addEventListener('click', flipPic)
insert.addEventListener('click', function(e){
    console.log(coin)
    var currentVal = parseInt(coin.value)
    currentVal += 5
    coin.value = currentVal
})
//functions
function flipPic() {
    if(parseInt(coin.value) > 0){
        coin.value = parseInt(coin.value) - 5
        allBoxes.forEach(function (box) {
            let randomFruit = slotLookup[fruits[Math.floor(Math.random() * 5)]]
            box.firstChild.src = randomFruit.imgUrl
            box.value = randomFruit.value
        })
        render()
    } else {
        msg.innerHTML = "insert money first to play💰💰💵💵!"
    }
};
let newColumn1 = document.getElementById('img0');
let newColumn2 = document.getElementById('img1');
let newColumn3 = document.getElementById('img2');
let newColumn4 = document.getElementById('img3');
let newColumn5 = document.getElementById('img4');
let newColumn6 = document.getElementById('img5');
let newColumn7 = document.getElementById('img6');
let newColumn8 = document.getElementById('img7');
let newColumn9 = document.getElementById('img8');

//render function
function render() {
    console.log(newColumn1.innerHTML, newColumn2, newColumn3)
    if (newColumn1.innerHTML === newColumn2.innerHTML && newColumn2.innerHTML === newColumn3.innerHTML) {
        msg.innerHTML = "YOU WIN"
    } else if (newColumn4.innerHTML === newColumn5.innerHTML && newColumn5.innerHTML === newColumn6.innerHTML) {
        msg.innerHTML = "YOU WIN"
    } else if (newColumn7.innerHTML === newColumn8.innerHTML && newColumn8.innerHTML === newColumn9.innerHTML) {
        msg.innerHTML = "YOU WIN"
    } else {
        msg.innerHTML = "KEEP PLAYING"
    }
}

document.getElementById('slotmac').addEventListener('click', clickDiv);

function clickDiv(e) {
    console.log(e.target.value, "value")
    console.log(e.target.id, "id")
}
