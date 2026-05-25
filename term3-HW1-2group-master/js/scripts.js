//identify relevant document objects and store them
var mainphoto = document.querySelector('#photo'),
caption = document.querySelector('#caption'),
prev = document.querySelector('#prevbtn'),
next = document.querySelector('#nextbtn'),
thumbs = document.querySelectorAll('.thumb'),
info = document.querySelector('#infos'),
count = 0,
photos = ['solder.jpg','tiechong.png','fire.png','boss.png'],
captions = ['<h2>Soldier</h2><br>This is the Zerg army has the largest share. They use huge mouths and sharp 6 legs as weapons, only melee ability. They are the cannon fodder in the Zerg army and the executioner, the most dead, but the most harmful to humans. Basically, as long as there are zergs on the planet, they will appear.<br> Weakness: the center of the eyes and mouth<br> Applicable weapons: any',
'<h2>Ironer</h2><br>The elite of the Zerg army has a huge body and armor shell, and it can be fire-breathing with endless power. So far, we have been there very few times. Every time in confrontation with it, there are often huge casualties. Only the tough guys had an excellent record against it. <br>Weakness: The inside of the body, the mouth that opened when the fire broke out. <br>Applicable weapons: Grenade, miniature nuclear bomb',
'<h2>Firer</h2><br>This is an air defense in the Zerg army, using shells from chemical reactions in the huge buttocks to attack warships and airships. They tend to move slowly and are guarded by soldiers. They are the biggest enemy of warships and must be eliminated first. <br>Weakness: Buttocks<br>Applicable weapons: high explosive ammunition, rockets, micro-nuclear bombs',
'<h2>Overlord</h2><br>The master of the Zerg army. Our research on it is very limited. It is now clear that he can dilute the human brain through the mouthpiece to manipulate and acquire our intelligence, and may have the ability to command the zerg. <br>Weakness: mouthparts<br>Applicable weapons: net (must be alive) <br><br>'];

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
}

function prevPhoto() {
	count--;
	if(count < 0) {
		count = photos.length - 1;
	}
	mainphoto.src = 'images/'+photos[count];
	caption.innerHTML = captions[count];
}


function showPhotoById(evt) {
	var pick = evt.target.id;
	//console.log(evt.target.id);
	mainphoto.src = 'images/'+photos[pick];
	caption.innerHTML = captions[pick];count = pick;
	count = pick;
}


function showPhotoByData() {
	var pick = this.dataset.pick;
	console.log(pick);
	mainphoto.src = 'images/'+photos[pick];
	caption.innerHTML = captions[pick];
	count = pick;
}


//listeners and events

for(var i = 0; i < thumbs.length; i++) {
	thumbs[i].addEventListener('click',showPhotoByData, false);
}
next.addEventListener('click', nextPhoto,false);
prev.addEventListener('click', prevPhoto,false);




