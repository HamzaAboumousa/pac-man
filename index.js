let timer = 250;
let score = 0;

function moov(keybord){
    if (keybord >= 37 && keybord <= 40) {  
        a = document.getElementsByClassName('pacman');
        let v = a[0].classList;
        let pos = parseInt(v[1]);
        if(keybord===40){
            pos+=GRID_SIZE;
            deg = "90";
            };
            if(keybord===38){
                pos-=GRID_SIZE;
                deg = "270";
            };
            if(keybord===39){
                pos+=1;
                deg = "0";
            };
            if(keybord===37){
                pos-=1;
                deg = "180";
            };
            let next = document.getElementsByClassName(pos);
            let list = next[0].classList;
    if (list[0]==='blank' || list[0]==='dot' || list[0]==='pill' || list[0]==='scared'){
        
        if (list[0]==='dot'){
            score+=1;
            console.log(score);
            let point = document.getElementById('scoreplayer');
            point.innerHTML = 'Score '+score;
        }
        if (list[0]==='pill'){
            let point = document.getElementsByClassName('ghost');
            for (let i = 0; i<point.length;i++){point[i].classList.add("scared");}
            setTimeout(function(){let point = document.getElementsByClassName('ghost');
            for (let i = 0; i<point.length;i++){point[i].classList.remove("scared");}},10000)
        }
        next[0].classList.remove(next[0].classList[0]);
        next[0].classList.add('pacman');
        v.remove('pacman');
        v.add('blank');
      a[0].style.transform = `rotate(${deg}deg)`;
      
    }else{
    if (list[2]==='blank' || list[2]==='dot' || list[2]==='pill' || list[2]==='scared'){
        next[0].classList.remove(next[0].classList[2]);
        next[0].classList.add('pacman');
        v.remove('pacman');
        v.add('blank');
      a[0].style.transform = `rotate(${deg}deg)`;
    }
    }       
 }
}

document.addEventListener('keydown', function(e){
   moov(e.keyCode);
});
const GRID_SIZE = 20;
const CELL_SIZE = 20;

const DIRECTIONS = {
    ArrowLeft: {
      code: 37,
      movement: -1,
      rotation: 180
    },
    ArrowUp: {
      code: 38,
      movement: -GRID_SIZE,
      rotation: 270
    },
    ArrowRight: {
      code: 39,
      movement: 1,
      rotation: 0
    },
    ArrowDown: {
      code: 40,
      movement: GRID_SIZE,
      rotation: 90
    }
};

const OBJECT_TYPE = {
    BLANK: 'blank',
    WALL: 'wall',
    DOT: 'dot',
    BLINKY: 'blinky',
    PINKY: 'pinky',
    INKY: 'inky',
    CLYDE: 'clyde',
    PILL: 'pill',
    PACMAN: 'pacman',
    GHOST: 'ghost',
    SCARED: 'scared',
    GHOSTLAIR: 'lair'
};

const CLASS_LIST = [
    OBJECT_TYPE.BLANK,
    OBJECT_TYPE.WALL,
    OBJECT_TYPE.DOT,
    OBJECT_TYPE.BLINKY,
    OBJECT_TYPE.PINKY,
    OBJECT_TYPE.INKY,
    OBJECT_TYPE.CLYDE,
    OBJECT_TYPE.PILL,
    OBJECT_TYPE.PACMAN,
    OBJECT_TYPE.GHOSTLAIR
];



const LEVEL = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
    1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
    1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
    1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
    0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0,
    0, 0, 0, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 0, 0, 0,
    1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1, 
    1, 0, 0, 0, 2, 2, 2, 1, 9, 9, 9, 9, 1, 2, 2, 2, 0, 0, 0, 1, 
    1, 1, 1, 1, 2, 1, 2, 1, 9, 9, 9, 9, 1, 2, 1, 2, 1, 1, 1, 1, 
    0, 0, 0, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 0, 0, 0,
    0, 0, 0, 1, 2, 1, 2, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 0, 0, 0,
    1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1,
    1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1,
    1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 7, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 7, 1,
    1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1,
    1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];
function creatboard(level,CLASS_LIST,GRID_SIZE,CELL_SIZE){
    document.getElementById('gameconsole').innerHTML = ''
    for (i in level) {
        const div = document.createElement('div');
        div.className = CLASS_LIST[level[i]];
        div.classList.add('square',i);
        document.getElementById('gameconsole').appendChild(div);
        document.getElementById('gameconsole').style.cssText = `grid-template-columns: repeat(${GRID_SIZE}, ${CELL_SIZE}px);`;
    }
}


function addpacman(pos){
    const a = document.getElementsByClassName(pos);
    if(a.length)
        a[0].classList.remove(CLASS_LIST[LEVEL[pos]]);
        a[0].classList.add('pacman');
}
function addchost(pos,name){
    const a = document.getElementsByClassName(pos);
    if(a.length)
        a[0].classList.remove(CLASS_LIST[LEVEL[pos]]);
        a[0].classList.add('ghost',name);
}


function start(){
score = 0;
addpacman(287);
addchost(248,'blinky');
addchost(249,'pinky');
addchost(250,'inky');
addchost(251,'clyde');
}
let begin = false;

creatboard(LEVEL,CLASS_LIST,GRID_SIZE,CELL_SIZE);
document.querySelector('#start').addEventListener('click',function(){
    if (!begin){ 
    start();
    begin = true;
    document.querySelector('#start').classList.add('hiden')
    document.querySelector('#pause').classList.remove('hiden')
}
});
document.querySelector('#pause').addEventListener('click',function(){
    if (begin){ 
    begin = false;
    document.querySelector('#restart').classList.remove('hiden')
    document.querySelector('#continue').classList.remove('hiden')
    document.querySelector('#pause').classList.add('hiden')
}
});
document.querySelector('#restart').addEventListener('click',function(){
    if (!begin){ 
    begin = false;
    document.querySelector('#restart').classList.add('hiden')
    document.querySelector('#continue').classList.add('hiden')
    document.querySelector('#start').classList.remove('hiden')
}
});
document.querySelector('#continue').addEventListener('click',function(){
    if (!begin){ 
    begin = true;
    document.querySelector('#restart').classList.add('hiden')
    document.querySelector('#continue').classList.add('hiden')
    document.querySelector('#pause').classList.remove('hiden')
}
});



