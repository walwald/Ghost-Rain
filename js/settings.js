const BG_WIDTH = 800;
const BG_HEIGHT = 600;

const GHOST_WIDTH = 45;
const GHOST_HEIGHT = 54;

const HERO_WIDTH = 35;
const HERO_HEIGHT = 54;

const bg = document.getElementById('bg');
const heroElement = document.getElementById('hero');

function numMaker(a) {
  return Number(a.split('px')[0]);
}
