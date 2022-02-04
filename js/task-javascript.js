


window.addEventListener("click",function(){
  const btn = document.getElementById("click-change");
  btn.innerHTML = `<h1>JavaScriptの勉強</h1>`;
});

window.addEventListener("click",function(){
  const header = document.getElementById("techgeek-header")
  header.append("クリックされました");
});