let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-butn");

let turn = 1;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [2,4,6],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turn === 1){
            box.innerText = "O";
            turn = 0;
        } 
        else{
            box.innerText = "X";
            turn = 1;
        }
        box.disabled = true;
        box.style.backgroundColor = "#350710";

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPattern){
        let posn1Val = boxes[pattern[0]].innerText;
        let posn2Val = boxes[pattern[1]].innerText;
        let posn3Val = boxes[pattern[2]].innerText;

        if(posn1Val != "" && posn2Val != "" && posn3Val != ""){
            if(posn1Val === posn2Val && posn2Val === posn3Val){
                alert(`Winner is ${posn1Val}`);
            }
        }
    }
}