export default function generateMenu() {
    const main = document.querySelector('main');
    main.classList.add('menu');

    function generateMenuItem(item, price) {
        const div = document.createElement('div');
        const h5 = document.createElement('h5');
        const span = document.createElement('span');
        const p = document.createElement('p');

        h5.innerText = item;
        span.innerText = price;
        p.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

        div.appendChild(h5);
        div.appendChild(span);
        div.appendChild(p);

        main.appendChild(div);
    }

    generateMenuItem('Lobster Roll', 28);
    generateMenuItem('King Crab Legs', 48);
    generateMenuItem('Blackened Salmon', 22);
    generateMenuItem('Swordfish Steak', 26);
    generateMenuItem('Grilled Jumbo Shrimp', 20);
    generateMenuItem('Clam Chowder', 14);
}