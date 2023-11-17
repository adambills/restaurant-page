export default function generateContactPage() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.setAttribute("class", "");
  main.classList.add("contact");

  function generateContactInfo(type, value) {
    const div = document.createElement("div");
    const h5 = document.createElement("h5");
    const span = document.createElement("span");

    h5.innerText = type;
    span.innerText = value;
    div.appendChild(h5);
    div.appendChild(span);

    main.appendChild(div);
  }

  generateContactInfo('Phone: ', '555-555-5555');
  generateContactInfo('Email: ', 'email@totallynotfake.com');
}
