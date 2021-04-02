var canvas=new fabric.Canvas("myCanvas");

playerX=10;
playerY=10;

blockimgwidth=30;
blockimgheight=30;

var playerobjt="";
var blockimgobjt="";

function player_update()
{
    fabric.Image.fromURL("SB737.png",function(Img)
    {
        playerobjt=Img;
        playerobjt.scaleToWidth(150);
        playerobjt.scaleToHeight(140);
        playerobjt.set({
            top:playerY,
            left:playerX
        });
        canvas.add(playerobjt);
    }
    );
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        blockimgobjt=Img;
        blockimgobjt.scaleToWidth(blockimgwidth);
        blockimgobjt.scaleToHeight(blockimgheight);
        blockimgobjt.set({
            top:playerY,
            left:playerX
        });
        canvas.add(blockimgobjt);
    }
    );
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypressed=e.keyCode;
    console.log(keypressed);
    if(e.shiftKey==true&&keypressed=="80")
    {
        console.log("P&shift pressed together")
        blockimgwidth=blockimgwidth+10;
        blockimgheight=blockimgheight+10;
        document.getElementById("current_width").innerHTML=blockimgwidth;
        document.getElementById("current_height").innerHTML=blockimgheight;
        
    }
    if(e.shiftKey==true&&keypressed=="77")
    {
        console.log("M&shift pressed together")
        blockimgwidth=blockimgwidth-10;
        blockimgheight=blockimgheight-10;
        document.getElementById("current_width").innerHTML=blockimgwidth;
        document.getElementById("current_height").innerHTML=blockimgheight;
        
    }

    if(keypressed=="38")
    {
         up();
         console.log("up");
    }

    if(keypressed=="40")
    {
         down();
         console.log("down");
    }

    if(keypressed=="37")
    {
         left();
         console.log("left");
    }

    if(keypressed=="39")
    {
         right();
         console.log("right");
    }

    if(keypressed=="87")
    {
         new_image("wall.jpg")
         console.log("w");
    }

    if(keypressed=="71")
    {
         new_image("ground.png")
         console.log("g");
    }

    if(keypressed=="76")
    {
         new_image("light_green.png")
         console.log("l");
    }

    if(keypressed=="84")
    {
         new_image("trunk.jpg")
         console.log("t");
    }

    if(keypressed=="82")
    {
         new_image("roof.jpg")
         console.log("r");
    }

    if(keypressed=="89")
    {
         new_image("yellow_wall.png")
         console.log("y");
    }

    if(keypressed=="68")
    {
         new_image("dark_green.png")
         console.log("d");
    }

    if(keypressed=="85")
    {
         new_image("unique.png")
         console.log("u");
    }

    if(keypressed=="67")
    {
         new_image("cloud.jpg")
         console.log("c");
    }
}
function left()
{
    if(playerX>0)
    {
        playerX=playerX-10;
        console.log("when left arrow is pressed, X= "+playerX+" &Y= "+playerY);
        canvas.remove(playerobjt);
        player_update();
    }
}

function right()
{
    if(playerX<=850)
    {
        playerX=playerX+10;
        console.log("when right arrow is pressed, X= "+playerX+" &Y= "+playerY);
        canvas.remove(playerobjt);
        player_update();
    }
}

function up()
{
    if(playerY>=0)
    {
        playerY=playerY-10;
        console.log("when up arrow is pressed, X= "+playerX+" &Y= "+playerY);
        canvas.remove(playerobjt);
        player_update();
    }
}

function down()
{
    if(playerY<=500)
    {
        playerY=playerY+10;
        console.log("when down arrow is pressed, X= "+playerX+" &Y= "+playerY);
        canvas.remove(playerobjt);
        player_update();
    }
}