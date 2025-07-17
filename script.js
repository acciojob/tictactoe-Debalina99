const container= document.createElement("div");
container.className="container";

const heading= document.createElement("h1");
heading.textContent="Tic Tac Toe";

const input1= document.createElement("input");
input1.id = 'player1';
input1.placeholder="Player 1 name";

const input2= document.createElement("input");
input2.id = 'player2';
input2.placeholder="Player 2 name";

const submitBtn =document.createElement("button");
submitBtn.id = 'submit';
submitBtn.textContent="Start Game"

container.appendChild(heading);
container.appendChild(input1);
container.appendChild(input2);
container.appendChild(submitBtn);
document.body.appendChild(container);


submitBtn.addEventListener("click", ()=>{
	const player1=input1.value.trim();
	const player2=input2.value.trim();
	if(!player1 || !player2){
		alert("Fill all the fields!");
		return;
	}
	startGame(player1,player2);
})


function startGame(player1,player2) {
	container.innerHTML="";

	const title= document.createElement("h1");
	title.textContent="TIC TAC TOE";

	const message= document.createElement("div");
	message.className="message";
	message.textContent=`${player1}, you're up`;

	const board=document.createElement("div");
	board.className="board";

	let currentPlayer="x";
	let currentName=player1;
	let gameOver=false;
	const cells=[];

	for(let i=1;i<=9;i++){
		let cell=document.createElement("div");
		cell.className = 'cell';
		cell.id=i;
		cell.addEventListener("click",() => {
			if(cell.textContent || gameOver) return;
			cell.textContent=currentPlayer;
			
		if(checkWinner()){
			message.textContent=`${currentName}, congratulations you won!`;
			gameOver=true;
			return;
		}
			if(currentPlayer==='x'){
				currentPlayer='o';
				currentName=player2;
			}else{
				currentPlayer='x';
				currentName=player1;
			}
			message.textContent=`${currentName}, you're up`;
		})
		board.appendChild(cell);
		cells.push(cell);
	}
  container.appendChild(title);
  container.appendChild(message);
  container.appendChild(board);

	function checkWinner() {
		const combos=[
			  [0,1,2],[3,4,5],[6,7,8],
		      [0,3,6],[1,4,7],[2,5,8],
		      [0,4,8],[2,4,6]
		];
		return combos.some(([a,b,c])=>{
			return cells[a].textContent &&
					cells[a].textContent === cells[b].textContent &&
					cells[b].textContent === cells[c].textContent;
		})
	}
}




