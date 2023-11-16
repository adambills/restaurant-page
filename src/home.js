export default function generateHomePage() {
    const main = document.querySelector('main');

    const h3 = document.createElement('h3');
    h3.innerText = "Your destination for fresh seafood";

    main.appendChild(h3);
}