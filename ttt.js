let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnN=true;
let count=0;
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame=()=>{
    turnN=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnN){
            box.innerText="N";
            turnN=false; 
        }else{
            box.innerText="P"
            turnN=true;
        }
        box.disabled=true;
        count++;
        checkWinner();

    });
});
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="l";

    }
};

const showWinner=(Winner)=>{
    msg.innerText=`Congratulations,Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

};
const checkWinner=()=>{
    for( let pattern of winPatterns){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val!=""&&pos2Val!=""&&pos3Val!=""){
            if(pos1Val===pos2Val&&pos2Val===pos3Val){
                console.log("winner", pos1Val);
                showWinner(pos1Val);
                return true;
            }
        }
    }

};
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
