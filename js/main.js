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

const box1 = document.querySelector('#img0 img')
const allBoxes = document.querySelectorAll("td")
let score, spin, earning

// const getImg = {
//    c: document.getElementById('img1'),
// //    w: document.getElementById('img1'),
// //    s: document.getElementById('img2'),
// //    o: document.getElementById('img3'),
// //    b: document.getElementById('img4') 
// };

// const resultImg = {
//     c: {
//         showPic: document.getElementById('img1'),
//         flexPic: document.querySelector('#img1 img')
//     }
// }

// document.getElementsByClassName('.start').addEventListener('click')
document.querySelector('.start').addEventListener('click', flipPic)
function flipPic () {
    allBoxes.forEach(function(box) {
        let randomFruit = slotLookup[fruits[Math.floor(Math.random()*5)]]
        box.firstChild.src = randomFruit.imgUrl
        box.value = randomFruit.value
    })

};



// let winner, spin, maxBet

// function render() {
    
    
//     reels.map(function(row) {
//         return row = weighting
//         console.log(row);
    
//     });   
// }

// render()

document.getElementById('slotmac').addEventListener('click', clickDiv);
function clickDiv(e){
    console.log(e.target.value, "value")
    console.log(e.target.id, "id")
    
}
