const claire = {
    name : "claire",
    text : "#000",
    bg : "#fff"
};
const dark = {
    name : "dark",
    text : "#fff",
    bg : "#000"
};
const solarized = {
    name : "solarized",
    text : "#002b36",
    bg : "#fdf6e3"
};
const monokai = {
    name : "monokai",
    text : "#f8f8f2",
    bg : "#272822"
};
const dracula = {
    name : "dracula",
    text : "#f8f8f2",
    bg : "#282a36"
};
const nord = {
    name : "nord",
    text : "#d8dee9",
    bg : "#2e3440"
};
const metal = {
    name : "metal",
    text : "#d8dee9",
    bg : "#1c1c1c"
};
const ocean = {
    name : "ocean",
    text : "#d8dee9",
    bg : "#2b303b"
};
const forest = {
    name : "forest",
    text : "#d8dee9",
    bg : "#1b4332"
};
const fire = {
    name : "fire",
    text : "#d8dee9",
    bg : "#ff3e00"
};
const earth = {
    name : "earth",
    text : "#d8dee9",
    bg : "#3e2723"
};
const sky = {
    name : "sky",
    text : "#d8dee9",
    bg : "#0d47a1"
};
const space = {
    name : "space",
    text : "#d8dee9",
    bg : "#000000"
};
const sea = {
    name : "sea",
    text : "#d8dee9",
    bg : "#006064"
};
const desert = {
    name : "desert",
    text : "#d8dee9",
    bg : "#ff6d00"
};
const zenburn = {
    name : "zenburn",
    text : "#d8dee9",
    bg : "#383838"
};
const ayu = {
    name : "ayu",
    text : "#d8dee9",
    bg : "#0e1929"
};
const ayumirage = {
    name : "ayu_mirage",
    text : "#d8dee9",
    bg : "#212733"
};
const ayulight = { 
    name : "ayu_light",
    text : "#d8dee9",
    bg : "#fafafa"
};
const ayudark = {
    name : "ayu_dark",
    text : "#d8dee9",
    bg : "#0e1929"
};
const farward = {
    name : "farward",
    text : "#d8dee9",
    bg : "#1b1b1b"
};



const list_color = [claire, dark, solarized, monokai, dracula, nord, metal, ocean, forest, fire, earth, sky, space, sea, desert, zenburn, ayu, ayumirage, ayulight, ayudark, farward];

const colors = document.querySelector(".colors");
const body = document.querySelector("body");

//create color html on .colors
function createColor(color){
    // create html div with innerHTML
    const div = document.createElement("div");
    div.classList.add("color", color.name);
    div.style.backgroundColor = color.bg;
    div.style.color = color.text;
    div.innerHTML =  `
        <div class="color__name"  style="background-color: ${color.bg}; color: ${color.text}">${color.name}</div>
        <div class="color__bg" style="background-color: ${color.bg}; color: ${color.text}">bg :${color.bg}</div>
        <div class="color__text" style="background-color: ${color.bg}; color: ${color.text}">text : ${color.text}</div>
    `;
    colors.appendChild(div);
    
}

//change color
function changeColor(color){
    body.style.backgroundColor = color.bg;
    body.style.color = color.text;
}

//click event
function clickEvent(event){
    const target = event.target;
    const color = target.classList[1];
    list_color.forEach(function(item){
        if(item.name === color){
            changeColor(item);
        }
    });
}

//init
function init(){
    list_color.forEach(createColor);
    colors.addEventListener("click", clickEvent);
}

init();
