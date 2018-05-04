 /* Javascript */
let pic = document.querySelector("#pic"),
newPost = document.querySelector("#addNote"),
editWindow = document.querySelector('#editWindow'),
editBanner = document.querySelector('#editBanner'),
redSqure = document.querySelector('#redSqure'),
greenSqure = document.querySelector('#greenSqure'),
yellowSqure = document.querySelector('#yellowSqure'),
blueSqure = document.querySelector('#blueSqure'),
editTitle = document.querySelector('input'),
editBody = document.querySelector('textarea'),
cancelButton = document.querySelector('#cancelButton'),
addButton = document.querySelector('#addButton'),
board = document.querySelector("#board"),
deleteWindow = document.querySelector(".deleteWindow"),
cancelDelete = document.querySelector("#cancelDelete"),
deleteButton = document.querySelector("#deleteButton"),
background = document.querySelector('#body'),
newColor = "red",
deletePost = null;

let activeAdd = function(){
	if(editBody.value||editTitle.value){
		addButton.style.backgroundColor = "#5eb6bd";
    	addButton.addEventListener("click",onClickAdd);
    }
}

let onClickAdd = function(){
	if(editBody.value||editTitle.value){
		let postNode = document.createElement("post-note");
		postNode.setAttribute("bannercolor",newColor);
		postNode.setAttribute("title",editTitle.value);
		postNode.setAttribute("body",editBody.value);
		postNode.onDelete = onDelete;
		board.insertBefore(postNode, board.firstChild);
		onClickCancel();
		addButton.removeEventListener("click",onClickAdd);
	}
}

let onDelete = function(node){
	deleteWindow.style.display = "block";
	deletePost = node;
}

let deletNode = function(){
	board.removeChild(deletePost);
	deletNode = null;
	deleteWindow.style.display = "none";
}

let onClickCancel = function(){
	editWindow.style.display = "none";
	newColor = "red";
	editTitle.value = "";
	editBody.value = "";
	addButton.style.backgroundColor = "#c2e3ea";
}

let changeColor = function(color){
	newColor = color;
	editBanner.classList.remove("red");
	editBanner.classList.remove("green");
	editBanner.classList.remove("yellow");
	editBanner.classList.remove("blue");
	editBanner.classList.add(color);
}

let setColorBorder = function(newVal){
	switch(newVal){
    	case 'red':
    		redSqure.classList.add("selectBorder");
    		greenSqure.classList.remove("selectBorder");
    		yellowSqure.classList.remove("selectBorder");
    		blueSqure.classList.remove("selectBorder");
    		break;
    	case 'green':
    		redSqure.classList.remove("selectBorder");
    		greenSqure.classList.add("selectBorder");
    		yellowSqure.classList.remove("selectBorder");
    		blueSqure.classList.remove("selectBorder");
    		break;
    	case 'yellow':
    		redSqure.classList.remove("selectBorder");
    		greenSqure.classList.remove("selectBorder");
    		yellowSqure.classList.add("selectBorder");
    		blueSqure.classList.remove("selectBorder");
    		break;
    	case 'blue':
    		redSqure.classList.remove("selectBorder");
    		greenSqure.classList.remove("selectBorder");
    		yellowSqure.classList.remove("selectBorder");
    		blueSqure.classList.add("selectBorder");
    		break;
    	default:
    		break;

    }
}

let windowResize = function(){
	console.log("resize");
	let boardWidth = (window.innerWidth*.94-window.innerWidth*.94%300);
	boardWidth = boardWidth < 200 ? 200 : boardWidth;
	board.style.width = boardWidth+"px";
	let boardLeft = (window.innerWidth/2-board.offsetWidth/2);
	board.style.marginLeft = boardLeft +"px";

	editWindow.style.width = window.innerWidth*.4<250 ? "250px" : window.innerWidth*.4+"px";
	let editWindowTop = -(board.offsetWidth*0.6);
	editWindowTop = editWindowTop < -760? "-760px" : editWindowTop;
	editWindow.style.marginTop = editWindowTop+"px";
	editWindow.style.marginLeft = editWindow.offsetWidth <= 250 ? window.innerWidth/2-125+"px" : "30%";

	deleteWindow.style.width = deleteWindow.offsetWidth<300 ? "300px":deleteWindow.offsetWidth;
	pic.style.height = board.offsetWidth*0.6/4*3+"px";
	
}


let getMessage = function(){
	let xhr = new XMLHttpRequest();
	xhr.addEventListener("load", loadMessage);
	xhr.open("GET", "http://www.example.org/example.txt");
	xhr.send();
	}
}

let loadMessage = function(){
	this.responseText;
}

windowResize();
window.onresize = windowResize;

newPost.addEventListener("click",()=>{
	editWindow.style.display = "block";
})

redSqure.addEventListener("click",()=>{changeColor("red");setColorBorder("red");});
greenSqure.addEventListener("click",()=>{changeColor("green");setColorBorder("green")});
yellowSqure.addEventListener("click",()=>{changeColor("yellow");setColorBorder("yellow")});
blueSqure.addEventListener("click",()=>{changeColor("blue");setColorBorder("blue")});

cancelButton.addEventListener("click",onClickCancel);
deleteButton.addEventListener("click",deletNode);
cancelDelete.addEventListener("click",()=>{
	console.log("cancelDelete");
	deleteWindow.style.display = "none";
})

editTitle.addEventListener("input",activeAdd);
editBody.addEventListener("input",activeAdd);

// if(background.style.height<window.innerHeight){
	console.log(board.getBoundingClientRect(),window.innerHeight);
// 	background.style.height = "100%";
// }

let node = document.createElement('post-note');
node.setAttribute("bannercolor", "red");
node.setAttribute("title","a");
node.setAttribute("body","b");
board.insertBefore(node, board.firstChild);

board.insertBefore(document.createElement('post-note'), board.firstChild);
board.insertBefore(document.createElement('post-note'), board.firstChild);

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
        alert(xhr.responseText);
    }
}
xhr.open('GET', 'http://roxiezhao.com/message', true);
xhr.send(null);





