// Your code goes here

// get function
function get(selector){
    return document.querySelector(selector)
};

function imgGone(event) {
    img.remove('src')
    event.stopPropagation()
};


function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    move.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const move = document.querySelector('div');
  move.addEventListener('wheel', zoom);

  

  const header = get('.main-navigation');
  const img = get('img');
  const paragraph = get("p");
  const destination = get('.content-destination');
  const original = document.body.textContent;
  const button = get('.btn');
  


//Mouseover: Header blends in background
header.addEventListener('mouseover', (event) => {
    event.target.style.color = 'white';
    event.preventDefault();
});


//Keydown: Top Paragraph turns white
window.addEventListener('keydown', (event) => {
    if (event.key === " "){
        event.preventDefault();
        paragraph.style.color = "white";
    }
});

//Drag
img.addEventListener('drag', (event) => {
    document.body.style.backgroundColor = 'green';
})

//Dragend
img.addEventListener('dragend', imgGone);

//Resize
window.addEventListener('resize', (event) => {
    document.body.style.color = 'purple'
})

//Click
header.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'black'
})

//ContextMenu
document.addEventListener('contextmenu', (event) => {
    document.body.style.display = "none"
    event.stopPropagation()
})

//Scroll
window.addEventListener('scroll', (event) => {
    document.body.style.backgroundColor = "pink"
})

//dblclick
button.addEventListener('dblclick', (event) => {
    button.textContent = "no"
})

//Zoom
window.addEventListener('wheel', zoom)