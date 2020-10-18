function $(id){
	return document.getElementById(id);
}


function $hide(id){
	$(id).style.display = "none"; 
}

function $show(id){
	$(id).style.display = "inline-block";
}


function $mapEvent(classname, callbackFn){
	let elements = document.getElementsByClassName(classname);
	for(let i = 0; i < elements.length; i++){
		elements[i].onclick = callbackFn;
	}
}
