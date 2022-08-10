let starter = document.getElementById('starter');
let gamepage = document.getElementById('gamepage')
let game = document.getElementById('game')
let resultOfGame=document.getElementById('resultOfGame');
setTimeout(() => {
    starter.style.display = 'none';
    gamepage.style.display = 'block';
    game.style.display = 'flex';
    resultOfGame.style.display='block';
}, 4000);

let XO = document.querySelectorAll('.item')
let count = 0, check = false;
XO.forEach(element => {
    
    element.addEventListener('click', () => {
        if (count % 2 == 0 && (element.innerHTML == ''&&check===false)) {
            count++;
            element.innerHTML = 'X';
        }
        else if (count % 2 == 1 && (element.innerHTML == ''&&check===false)) {
            count++;
            element.innerHTML = 'O';
        }
        if (count >= 5&&check===false) {
            let result = checkCondition(count);
            if (result == 'X' || result == 'O') {
                resultOfGame.innerHTML=`${result} Won`;
                check=true;
                removetext();
            }
            else if(count==9){
                resultOfGame.innerHTML='Draw';
                check=true;
                removetext();
            }
        }        
    })
});
function checkCondition(count) {
    let childs = [];
    XO.forEach(element => {
        childs.push(element.innerHTML);
    })
    // console.log(childs);

    if (childs[0] == 'X' && childs[1] == 'X' && childs[2] == 'X') {
        return 'X';
    }
    else if (childs[3] == 'X' && childs[4] == 'X' && childs[5] == 'X') {
        return 'X';
    }
    else if (childs[6] == 'X' && childs[7] == 'X' && childs[8] == 'X') {
        return 'X';
    }
    else if (childs[0] == 'X' && childs[3] == 'X' && childs[6] == 'X') {
        return 'X';
    }
    else if (childs[1] == 'X' && childs[4] == 'X' && childs[7] == 'X') {
        return 'X';
    }
    else if (childs[2] == 'X' && childs[5] == 'X' && childs[8] == 'X') {
        return 'X';
    }
    else if (childs[0] == 'X' && childs[4] == 'X' && childs[8] == 'X') {
        return 'X';
    }
    else if (childs[2] == 'X' && childs[4] == 'X' && childs[6] == 'X') {
        return 'X';
    }
    else if (childs[0] == 'O' && childs[1] == 'O' && childs[2] == 'O') {
        return 'O';
    }
    else if (childs[3] == 'O' && childs[4] == 'O' && childs[5] == 'O') {
        return 'O';
    }
    else if (childs[6] == 'O' && childs[7] == 'O' && childs[8] == 'O') {
        return 'O';
    }
    else if (childs[0] == 'O' && childs[3] == 'O' && childs[6] == 'O') {
        return 'O';
    }
    else if (childs[1] == 'O' && childs[4] == 'O' && childs[7] == 'O') {
        return 'O';
    }
    else if (childs[2] == 'O' && childs[5] == 'O' && childs[8] == 'O') {
        return 'O';
    }
    else if (childs[0] == 'O' && childs[4] == 'X' && childs[8] == 'O') {
        return 'O';
    }
    else if (childs[2] == 'O' && childs[4] == 'O' && childs[6] == 'O') {
        return 'O';
    }
    else if (count == 8) {
        return 'draw';
    }
}

function removetext() {
    setTimeout(() => {
        XO.forEach(element => {
            resultOfGame.innerHTML='';
            element.innerHTML = '';
            check=false;
            count=0;
        })
    }, 3000);

}