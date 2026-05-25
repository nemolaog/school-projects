//identify relevant document objects and store them
var mainphoto = document.querySelector('#photo'),
caption = document.querySelector('#caption'),
prev = document.querySelector('#prevbtn'),
next = document.querySelector('#nextbtn'),
thumbs = document.querySelectorAll('.thumb'),
info = document.querySelector('#infos'),
count = 0,
photos = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','10.jpg'];

//console.log(thumbs);
// functions that perform necessary actions on the objects above
//functions = 'named' chunks of code that run once when called by name

/*if(statement is true) {
	do this if it is true
}else if(something else is true) {
	do the other thing
}*/


function nextPhoto() {
	count++;
	if(count == photos.length) {
		count = 0;
	}

	mainphoto.src = 'images/'+photos[count];
	caption.innerHTML = captions[count];
	info.innerHTML = infos[count];
}

function prevPhoto() {
	count--;
	if(count < 0) {
		count = photos.length - 1;
	}
	mainphoto.src = 'images/'+photos[count];
	caption.innerHTML = captions[count];
	info.innerHTML = infos[count];
}


function showPhotoById(evt) {
	var pick = evt.target.id;
	//console.log(evt.target.id);
	mainphoto.src = 'images/'+photos[pick];
	caption.innerHTML = captions[pick];count = pick;
	info.innerHTML = infos[pick];count = pick;
	count = pick;
}


function showPhotoByData() {
	var pick = this.dataset.pick;
	console.log(pick);
	mainphoto.src = 'images/'+photos[pick];
	caption.innerHTML = captions[pick];
	info.innerHTML = infos[pick];
	count = pick;
}


//listeners and events

for(var i = 0; i < thumbs.length; i++) {
	thumbs[i].addEventListener('click',showPhotoByData, false);
}
next.addEventListener('click', nextPhoto,false);
prev.addEventListener('click', prevPhoto,false);


