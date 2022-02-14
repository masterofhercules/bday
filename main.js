var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('Birthdayimage.jpg',function (Img){
        blockimageobject.scaleToWidth(700)
        blockimageobject.scaleToHeigt(510)
        blockimageobject.set({
            top:0,
            left:0
        })
        canvas.add(blockimageobject)
    })
	
}

function playSound(){
	x.play()
}
