//Global Variable 
var playing = false;
var score;
var player1 = "X";
var player2 = "O";
var xArr = [];
var yArr = [];
var i = 0 ;
var ch;
var table = [];
var selection ;
var trying = 0;

//Register Events
document.getElementById("X").addEventListener("click", selectX);
document.getElementById("o").addEventListener("click", selectO);
document.getElementById("startreset").addEventListener("click", play);
document.getElementById("box1").addEventListener("click", enter);
document.getElementById("box2").addEventListener("click", enter);
document.getElementById("box3").addEventListener("click", enter);
document.getElementById("box4").addEventListener("click", enter);
document.getElementById("box5").addEventListener("click", enter);
document.getElementById("box6").addEventListener("click", enter);
document.getElementById("box7").addEventListener("click", enter);
document.getElementById("box8").addEventListener("click", enter);
document.getElementById("box9").addEventListener("click", enter);
document.getElementById("computer").addEventListener("click", computer);
document.getElementById("Player").addEventListener("click", players);
document.getElementById("replay").addEventListener("click", replay);

function replay(e){
    xArr = "";
    yArr = "";
    hide("PlayerWin1");
    hide("PlayerWin2");
    hide("tie");
    hide("startreset");
    hide("replay");
    show("choices");
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box7").innerHTML = "";
    document.getElementById("box8").innerHTML = "";
    document.getElementById("box9").innerHTML = "";
    i = 0;
    play();
}

function enter(e){
    let boxID = e.srcElement.id;
    let boxNum;
    if(boxID == "box1"){
        boxNum = 0;
    }   else if(boxID == "box2"){
        boxNum = 1;
    }   else if(boxID == "box3"){
        boxNum = 2;
    }   else if(boxID == "box4"){
        boxNum = 3;
    }   else if(boxID == "box5"){
        boxNum = 4;
    }   else if(boxID == "box6"){
        boxNum = 5;
    }   else if(boxID == "box7"){
        boxNum = 6;
    }   else if(boxID == "box8"){
        boxNum = 7;
    }   else if(boxID == "box9"){
        boxNum = 8;
    }
    if(selection == "computer" && player1 == "X"){
        i = i + 2;
        table[boxNum] = "X";
        
        this.innerHTML = "X";
        CompTurn();
    }
    if(selection == "player"){
        player1 = "X";
        player2 = "O";
        i++;
        
        if(i%2==0){
        this.innerHTML = "X";
        xArr[boxNum] = 1;
        }else{
            this.innerHTML = "O";
            yArr[boxNum] = 1;
        }
        checkAns();
    }
    if(selection == "computer" && player1 == "O"){
    
        i = i +2;
        table[boxNum] = "O";
        this.innerHTML = "O";
        CompTurn();
    }      
}

function play(e) {
    if(playing === true) {
        // You want to reset
        window.location.reload();
    } else {
        // You want to start play

        playing = true;
        show("choices");

        this.innerHTML = "Reset Game";
        hide("replay");
    }
}

function selectX(e){

    if(selection == "computer"){
        computer = "O";
        player1 = "X";
    
        hide("choose");
        // CompTurn();
    }else{
    player1 = "X";
    hide("choose");
    player2 = "O";
    }
   

}

function selectO(e){

    if(selection == "computer"){
        computer = "X";
        player1 = "O";
    
        hide("choose");
        // CompTurn();
    }else{
    player1 = "O";
    hide("choose");
    player2 = "X";
    }
    
}

function CompTurn(){


   
        do{
            var generate = (1 + Math.round(Math.random() * 8)) ;
            generate = generate - 1;
        
        }while((table[generate] === "O" || table[generate] === "X" )   ) ;
 
   ch =  document.getElementById("choices");
   ch.children[generate].innerHTML = computer;

   
   if(player1 == "O"){
    table[generate] = "X";
   }else{
       table[generate] = "O";
   }
   

   trying++;
    checkAnsArr();
   
}

function checkAnsArr(){



    if((table[0] == "X"   && table[1] == "X"  && table[2] == "X" ) ||
    (table[0]=="X"   && table[3]=="X"  && table[6]=="X" ) ||
    (table[0]=="X"  && table[4]=="X"  && table[8]=="X" ) ||
    (table[1]=="X"  && table[4]=="X"  && table[7]=="X" ) ||
    (table[2]=="X"  && table[5]=="X"  && table[8]=="X" ) ||
    (table[3]=="X"  && table[4]=="X"  && table[5]=="X" ) ||
    (table[6]=="X"  && table[7]=="X"  && table[8]=="X" ) ||
    (table[6]=="X"  && table[4]=="X"  && table[2]=="X" )){
        setTimeout(function(){
            if(computer == "X"){
               document.getElementById("PlayerWin1").innerHTML = "Computer Wins!!!";
               show("PlayerWin1");
            }else{
                document.getElementById("PlayerWin1").innerHTML = "You Won!!!";
                show("PlayerWin1");
            }
           
            // show("PlayerWin1");
            hide("choices"); 
            show("replay");
        },1000); 
    }else if((table[0] == "O" &&  table[1] == "O" && table[2] == "O") ||
    (table[0]=="O" &&  table[4]=="O" &&  table[8]=="O") ||
    (table[0]=="O"  && table[3]=="O"  && table[6]=="O" ) ||
    (table[1]=="O"  && table[4]=="O"  && table[7]=="O" ) ||
    (table[2]=="O"  && table[5]=="O"  && table[8]=="O" ) ||
    (table[3]=="O"  && table[4]=="O"  && table[5]=="O" ) ||
    (table[6]=="O"  && table[7]=="O"  && table[8]=="O" ) ||
    (table[6]=="O"  && table[4]=="O"  && table[2]=="O" )){
        setTimeout(function(){
            if(computer == "O"){
                document.getElementById("PlayerWin2").innerHTML = "Computer Wins!!!";
                show("PlayerWin2");
             }else{
                 document.getElementById("PlayerWin2").innerHTML = "You Win!!!";
                 show("PlayerWin2");
             }
            // show("PlayerWin2");
            hide("choices"); 
            show("replay");
        },1000); 
    }else if(trying == 4 &&(!((table[0] == "O" &&  table[1] == "O" && table[2] == "O") ||
    (table[0]=="O" &&  table[4]=="O" &&  table[8]=="O") ||
    (table[0]=="O"  && table[3]=="O"  && table[6]=="O" ) ||
    (table[1]=="O"  && table[4]=="O"  && table[7]=="O" ) ||
    (table[2]=="O"  && table[5]=="O"  && table[8]=="O" ) ||
    (table[3]=="O"  && table[4]=="O"  && table[5]=="O" ) ||
    (table[6]=="O"  && table[7]=="O"  && table[8]=="O" ) ||
    (table[6]=="O"  && table[4]=="O"  && table[2]=="O" )) && (!((table[0] == "X"   && table[1] == "X"  && table[2] == "X" ) ||
    (table[0]=="X"   && table[3]=="X"  && table[6]=="X" ) ||
    (table[0]=="X"  && table[4]=="X"  && table[8]=="X" ) ||
    (table[1]=="X"  && table[4]=="X"  && table[7]=="X" ) ||
    (table[2]=="X"  && table[5]=="X"  && table[8]=="X" ) ||
    (table[3]=="X"  && table[4]=="X"  && table[5]=="X" ) ||
    (table[6]=="X"  && table[7]=="X"  && table[8]=="X" ) ||
    (table[6]=="X"  && table[4]=="X"  && table[2]=="X" )))) )
   {
        setTimeout(function(){
            show("tie");
            hide("choices"); 
            show("replay");
        },1000); 
    }
    else{
    
    }
}
function checkAns() {

    if((xArr[0] == 1 && xArr[1] == 1 && xArr[2] == 1) ||
    (xArr[0]==1 && xArr[3]==1 && xArr[6]==1) ||
    (xArr[0]==1 && xArr[4]==1 && xArr[8]==1) ||
    (xArr[1]==1 && xArr[4]==1 && xArr[7]==1) ||
    (xArr[2]==1 && xArr[5]==1 && xArr[8]==1) ||
    (xArr[3]==1 && xArr[4]==1 && xArr[5]==1) ||
    (xArr[6]==1 && xArr[7]==1 && xArr[8]==1) ||
    (xArr[6]==1 && xArr[4]==1 && xArr[2]==1)){
        setTimeout(function(){
            show("PlayerWin1");
            hide("choices"); 
            show("replay");
        },1000);  
        // document.getElementById("startreset").innerHTML = "Replay";
        // show("startreset");
    }else if((yArr[0] == 1 && yArr[1] == 1 && yArr[2] == 1) ||
    (yArr[0]==1 && yArr[3]==1 && yArr[6]==1) ||
    (yArr[0]==1 && yArr[4]==1 && yArr[8]==1) ||
    (yArr[1]==1 && yArr[4]==1 && yArr[7]==1) ||
    (yArr[2]==1 && yArr[5]==1 && yArr[8]==1) ||
    (yArr[3]==1 && yArr[4]==1 && yArr[5]==1) ||
    (yArr[6]==1 && yArr[7]==1 && yArr[8]==1) ||
    (yArr[6]==1 && yArr[4]==1 && yArr[2]==1)){
       
        setTimeout(function(){
            show("PlayerWin2");
            hide("choices");
            show("replay");
        },1000); 
    }else if(((xArr[0] == 1 ||yArr[0] ==1) && (xArr[1] ==1 || yArr[1] ==1)  && (xArr[2] ==1 || yArr[2] ==1 ) && ( xArr[3] ==1 ||yArr[3] ==1 ) && ( xArr[4] ==1 || yArr[4] ==1 ) && (xArr[5] ==1 || yArr[5] ==1 ) && (xArr[6] ==1 || yArr[6] ==1) && ( xArr[7] == 1  ||yArr[7] ==1 ) && ( xArr[8] ==1 ||yArr[8] ==1) ) ){
        show("tie");
        hide("choices");
        // document.getElementById("startreset").innerHTML = "Replay";
        // show("startreset");
        show("replay");
    }
}


function players(e){
    hide("mode");
    selection = "player";
}

function computer(e){
    hide("mode");
    selection = "computer";
    show("choose"); 
}
//HELPER FUNCTION
function hide(id) {
    document.getElementById(id).style.display = 'none';
}
function show(id) {
    document.getElementById(id).style.display = 'block';
}