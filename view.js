function updateView() {
  if (model.state === "mainView") updateMainView();
}

//mainView

function updateMainView() {
  let html = /*HTML*/`
  <div>Test</div>
  `
  document.getElementById("app").innerHTML = html;
}
