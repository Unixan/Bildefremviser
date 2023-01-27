function updateView() {
  if (model.state === "mainView") updateMainView();
}

//mainView

function updateMainView() {
  let html = "";
  html += `<section>`;
  model.pictures.forEach((pic, i) => {
    html += /*HTML*/ `
        <div>
        <img src="${pic.img}"/>
        </div>
        `;
  });
  html += `</section>`;
  document.getElementById("app").innerHTML = html;
  const section = document.querySelector("section");
  let currentPos = window.scrollY;
  const update = () => {
    const newPos = window.scrollY;
    const diff = newPos - currentPos;
    const speed = diff * 0.5;
    section.style.transform = `skewY(${speed}deg)`;
    currentPos = newPos;
    requestAnimationFrame(update);
  };
  update();
}
