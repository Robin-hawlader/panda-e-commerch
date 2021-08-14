const heading = document.getElementsByTagName('h2');
for (const head of heading) {
    head.style.color = 'midnightblue';
}
const bag = document.getElementById("backpack");
bag.style.backgroundColor = 'tomato';

const cardStyle = document.getElementsByClassName('card');
for (const card of cardStyle) {
    card.style.borderRadius = '30px';
}

function handaler() {
    console.log('yeah click me');
}



document.getElementById('enable-confirm').addEventListener('keyup', function (event) {
    const deleteBtn = document.getElementById('disable-button');
    if (event.target.value == 'email') {
        deleteBtn.removeAttribute('disabled');
    }
    else {
        deleteBtn.setAttribute('disabled', true);
    }
})



document.getElementById('img-change').addEventListener('mouseenter', function () {
    document.getElementById("img-change").src = "images/shoes/shoe-3.png";
})

document.getElementById('img-change').addEventListener('mouseleave', function () {
    document.getElementById("img-change").src = "images/shoes/shoe-1.png";
})

document.getElementById('subscribe').addEventListener('dblclick', function () {
    document.getElementById('subscribe').style.backgroundColor = 'DarkSlateGrey';
})