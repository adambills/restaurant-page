export default function generateHeaderFooter() {
    const content = document.querySelector('#content');
    
    // Header
    const header = document.createElement('header');
    
    const h1 = document.createElement('h1');
    h1.textContent = 'Portland Seafood';
    header.appendChild(h1);

    const nav = document.createElement('nav');
    const navLinks = ['Home', 'Menu', 'Contact'];
    navLinks.forEach((link) => {
        const a = document.createElement('a');
        a.textContent = link;
        nav.appendChild(a);
    });
    header.appendChild(nav);   

    content.appendChild(header);

    //Footer
    const footer = document.createElement('footer');
    footer.innerHTML = '<div>Photo by <a href="https://unsplash.com/@mrs80z?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Mercedes Mehling</a> on <a href="https://unsplash.com/photos/white-lighthouse-near-body-of-water-7I9aCavB8RI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a></div>';

    content.appendChild(footer);
}