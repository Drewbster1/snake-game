let inputDirection = {x: 0, y: 0}
let lastInputDiection = {x: 0, y: 0}

window.addEventListener('keydown',e => {
    switch(e.key){
        case 'ArrowUp':
            if(lastInputDiection.y !== 0) break
            inputDirection = {x:0,y:-1}
            break
        case 'ArrowDown':
            if(lastInputDiection.y !== 0) break
            inputDirection = {x:0,y:1}
            break
        case 'ArrowLeft':
            if(lastInputDiection.x !== 0) break
            inputDirection = {x:-1,y:0}
            break
        case 'ArrowRight':
            if(lastInputDiection.x !== 0) break
            inputDirection = {x:1,y:0}
            break
    }
})
export function getInputDirection(){
    lastInputDiection = inputDirection
    return inputDirection
}

