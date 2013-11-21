var p1_name = 'joueur 1';
var p2_name = 'joueur 2';
var win = new Array();
win[0] = 0;
win[1] = 0;
var joueur
var firstplayer = p1_name;
var currentplayer = p1_name;
var stage = new Array(); 
var nb = 0;
var victory = false;
var turn = 0;
var x, y;


$("#score-bloc").after('<p id="score_p1"> Score de '+ p1_name + ':  <span id="score_p1_nb" class="score-nb"> &nbsp; 0 </span> </p> ');
$("#score_p1_nb").after('<p id="score_p2">  Score de '+ p2_name + ':   <span id="score_p2_nb" class="score-nb"> &nbsp; 0 </span> </p>');


for(var i = 0; i < 3; i++){
	stage[i] = new Array();
}

for(var i = 0; i < 3; i++){
	for(var j = 0; j < 3; j++){
		$("div.container div").eq(nb).attr('x', i);
		$("div.container div").eq(nb).attr('y', j);
		stage[i][j] = nb;
		nb ++; 
				
	}
}

$("div.container > div").click(function() {

	if( !($(this).hasClass('player1')) && !($(this).hasClass('player2')) && !victory ){
		
		if(turn ==0){
			currentplayer = firstplayer;
		}
		
		turn++;
			
		x = $(this).attr('x');
		y = $(this).attr('y');
		
		if(currentplayer == p1_name){
			stage[x][y] = 'X';
			$(this).addClass('player1');
		}
		else{
			stage[x][y] = 'O';
			$(this).addClass('player2');
		}

		
				
		if (turn >= 5){
			
			victory = victoryCheck(stage, x, y)
			if(victory){
				alert(currentplayer + " a gagné!");
				if(currentplayer == p1_name){
					win[0] = win[0]+1;
				}
				else{
					win[1] = win[1]+1;
				}
			$("#score_p1").remove();
			$("#score_p2").remove();
			$("#score-bloc").after('<p id="score_p1"> Score de '+ p1_name + ':  <span id="score_p1_nb" class="score-nb"> &nbsp; '+ win[0] +' </span> </p> ');
$("#score_p1_nb").after('<p id="score_p2">  Score de '+ p2_name + ':   <span id="score_p2_nb" class="score-nb"> &nbsp; '+ win[1] +' </span> </p>');
			
			
			}
			else{
				if(turn == 9){
					alert("Egalité");
				}
			}
		}
		
	 	if(currentplayer == p1_name){
		 	currentplayer = p2_name;
	 	}else{
		 	currentplayer = p1_name;
	 	}
	}
});

$(".replay").click(function() {

 	if(firstplayer == p1_name){
		 firstplayer = p2_name ;
	}else{
		 firstplayer = p1_name;
	 }
	 nb = 0;
	 
	 for(var i = 0; i < 3; i++){
		for(var j = 0; j < 3; j++){
			stage[i][j] = nb;
			nb ++; 
		}
	}
	$("div.container > div").removeClass('player1');
	$("div.container > div").removeClass('player2');
	
	turn = 0;
	victory = false;
	 	
});

function victoryCheck(stage){

		if((stage[0][0] == stage[0][1]) && (stage[0][1] == stage[0][2])){
			victory = true;
		}
		if((stage[1][0] == stage[1][1]) && (stage[1][1] == stage[1][2])){
			victory = true;
		}
		if((stage[2][0] == stage[2][1]) && (stage[2][1] == stage[2][2])){
			victory = true;
		}
		if((stage[0][0] == stage[1][0]) && (stage[1][0] == stage[2][0])){
			victory = true;
		}
		if((stage[0][1] == stage[1][1]) && (stage[1][1] == stage[2][1])){
			victory = true;
		}
		if((stage[0][2] == stage[1][2]) && (stage[1][2] == stage[2][2])){
			victory = true;
		}
		if((stage[0][0] == stage[1][1]) && (stage[1][1] == stage[2][2])){
			victory = true;
		}
		if((stage[2][0] == stage[1][1]) && (stage[1][1] == stage[0][2])){
			victory = true;
		}
		
	return victory;
}

function changeName(){
	p1_name = document.name.joueur1.value;
	p2_name = document.name.joueur2.value;
	$("#score_p1").remove();
	$("#score_p2").remove();
	$("#score-bloc").after('<p id="score_p1"> Score de '+ p1_name + ':  <span id="score_p1_nb" class="score-nb"> &nbsp; '+ win[0] +' </span> </p> ');
$("#score_p1_nb").after('<p id="score_p2">  Score de '+ p2_name + ':   <span id="score_p2_nb" class="score-nb"> &nbsp; '+ win[1] +' </span> </p>');
}

