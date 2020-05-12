
let scrollWidth;
let body = document.getElementById('body');
const container = document.getElementById('container');
let car = document.createElement('img');
car.src = 'img/auto2.png';
car.className = 'car';
car.alt = 'car';
container.appendChild(car);
let tree = document.createElement('img');
tree.src = 'img/tree1.png';
tree.className = 'tree';
tree.alt = 'tree';
container.appendChild(tree);
let tree2 = document.createElement('img');
tree2.src = 'img/tree2.png';
tree2.className = 'tree2';
tree2.alt = 'tree2';
container.appendChild(tree2);
let tree3 = document.createElement('img');
tree3.src = 'img/tree3.png';
tree3.className = 'tree3';
tree3.alt = 'tree3';
container.appendChild(tree3);
let house1 = document.createElement('img');
house1.src = 'img/house1.png';
house1.className = 'house1';
house1.alt = 'house1';
container.appendChild(house1);
let house2 = document.createElement('img');
house2.src = 'img/house2.png';
house2.className = 'house2';
house2.alt = 'house2';
container.appendChild(house2);
let sky = document.createElement('div');
sky.className = 'sky';
body.appendChild(sky);
let sun = document.createElement('div');
sun.className = 'sun';
sky.appendChild(sun);
let cloud = document.createElement('img');
cloud.src = 'img/cloud.png';
cloud.alt = 'Облако'
cloud.className = 'cloud';
sky.appendChild(cloud);
let cloud2 = document.createElement('img');
cloud2.src = 'img/cloud.png';
cloud2.alt = 'Облако'
cloud2.className = 'cloud2';
sky.appendChild(cloud2);

let grinvilArr = [
    ['Г','р','и','н','в','и','л','ь'],
    [' ','м','е','с','т','о',' ',' '],
    [' ',' ','м','е','ч','т','ы',' ']
];
let step = 0;
let titlePlace = document.createElement('div');
titlePlace.className = 'title-place';
body.appendChild(titlePlace);


grinvilArr[0].map((item, index) => {
    let simbol = document.createElement('div');
    let greenvill = document.createElement('div');
    let place = document.createElement('div');
    let dream = document.createElement('div');
    let delimiter = document.createElement('div');
    let delimiter2 = document.createElement('div');
    delimiter.className = 'delimiter';
    delimiter2.className = 'delimiter2';
    greenvill.className = 'greenvill';
    place.className = 'place';
    dream.className = 'dream';
    greenvill.innerText = item.toUpperCase();
    place.innerText = grinvilArr[1][index].toUpperCase();
    dream.innerText = grinvilArr[2][index].toUpperCase();
    simbol.className = 'title-simbol';
    simbol.appendChild(delimiter);
    simbol.appendChild(delimiter2);
    simbol.appendChild(greenvill);
    simbol.appendChild(place);
    simbol.appendChild(dream);
    titlePlace.appendChild(simbol);
});

let position = 0;

document.addEventListener('mousemove', function (event) {
    scrollWidth = body.scrollWidth;

    if (event.pageX <= scrollWidth - car.width) {
        car.style.left = `${event.pageX}px`;
    }
    if (event.pageX <= scrollWidth - sun.offsetWidth) {
        sun.style.right = `${event.pageX}px`;

        if (sun.offsetLeft - scrollWidth / 2 <= 500 && sun.offsetLeft - scrollWidth / 2 >= - 500 ) {
            sun.style.top = `10px`;
            sky.style.backgroundColor = 'deepskyblue';
            sun.style.boxShadow = '2px 2px 20px 10px white';
            container.style.backgroundColor = '#0ad20a';
        } else {
            sun.style.top = `180px`;
            sky.style.backgroundColor = '#033545';
            sun.style.boxShadow = '1px 1px 3px 1px white';
            container.style.backgroundColor = '#036603';
        }
    }

    if (event.pageX > position && house1.offsetLeft - house1.width >= 0) {
        tree.style.left = `${tree.offsetLeft - 1}px`;
        tree2.style.left = `${tree2.offsetLeft - 1}px`;
        tree3.style.left = `${tree3.offsetLeft - 1}px`;
        house1.style.left = `${house1.offsetLeft - 1}px`;
        house2.style.left = `${house2.offsetLeft - 1}px`;
    } else if (event.pageX < position && tree3.offsetLeft + tree3.width <= event.pageX) {
        tree.style.left = `${tree.offsetLeft + 1}px`;
        tree2.style.left = `${tree2.offsetLeft + 1}px`;
        tree3.style.left = `${tree3.offsetLeft + 1}px`;
        house1.style.left = `${house1.offsetLeft + 1}px`;
        house2.style.left = `${house2.offsetLeft + 1}px`;
    }
    position = event.pageX;
});

document.addEventListener('wheel', function (e) {
    if (e.deltaY < 0 && cloud.offsetLeft <= scrollWidth  +  cloud.width && cloud2.offsetLeft >= - cloud.width) {
        cloud.style.left = `${cloud.offsetLeft + 52}px`;
        cloud2.style.left = `${cloud2.offsetLeft - 52}px`;
    } else if (e.deltaY > 0 && cloud.offsetLeft >= - cloud.width && cloud2.offsetLeft <= cloud2.offsetLeft + cloud.width) {
        cloud.style.left = `${cloud.offsetLeft - 52}px`;
        cloud2.style.left = `${cloud2.offsetLeft + 52}px`;
    }
})