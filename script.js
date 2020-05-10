
let scrollWidth;
let body = document.getElementById('body');
const container = document.getElementById('container');
let car = document.createElement('img');
car.src = 'img/auto.png';
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

let position = 0;

window.addEventListener('mousemove', function (event) {
    scrollWidth = event.target.scrollWidth;

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
    } else if (event.pageX < position && tree3.offsetLeft + tree3.width <= event.clientX) {
        tree.style.left = `${tree.offsetLeft + 1}px`;
        tree2.style.left = `${tree2.offsetLeft + 1}px`;
        tree3.style.left = `${tree3.offsetLeft + 1}px`;
        house1.style.left = `${house1.offsetLeft + 1}px`;
        house2.style.left = `${house2.offsetLeft + 1}px`;
    }
    position = event.pageX;
});