const Search = document.querySelector('.navbar .tool .search');
const Searchbox = document.querySelector('.navbar .tool input');
const moredots = document.querySelector('.navbar .tool .moredots');
const moreinfo = document.querySelector('.moreinfo');
const moreBtn = document.querySelector('.Maininfo .title .caret');
const title = document.querySelector('.Maininfo .title .letters');
const Uplogo = document.querySelector('.Maininfo .logo .Up');
const Downlogo = document.querySelector('.Maininfo .logo .Down');

Search.addEventListener('click', () => {
  Searchbox.classList.toggle('active');
})

moredots.addEventListener('click', () => {
  moreinfo.classList.toggle('active');
})

moreBtn.addEventListener('click', () => {
  moreBtn.classList.toggle('clicked');
  title.classList.toggle('clamp');
});


Uplogo.addEventListener('click', () => {
  if (Downlogo.classList.toggle('active')) {
    Downlogo.classList.toggle('active');
  };
  Uplogo.classList.toggle('active');
});

Downlogo.addEventListener('click', () => {
  if (Uplogo.classList.toggle('active')) {
    Uplogo.classList.toggle('active');
  };
  Downlogo.classList.toggle('active')
});