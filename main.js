var canvas = new fabric.Canvas('myCanvas');
var avenger_names = ["Iron Man", "Captain America", "Thor", "Spiderman", "Hulk"];
avenger_names.sort();
console.log(avenger_names);

item_w = 30; item_h = 30;

player_x = 10; player_y = 10;


var player_object = "";

//player_object is used to create the minecraft_player on the screen--> 
function player_update(){

    fabric.Image.fromURL("player.png", function(Img){

        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({

        top:player_y,
        left:player_x
        });

        canvas.add(player_object);
    });
}

var item_object = "";

//New_Image function is creating the item_image-->
function new_image(get_image){

    fabric.Image.fromURL(get_image, function(Img){
    item_object = Img;

    item_object.scaleToWidth(item_w);
    item_object.scaleToHeight(item_h);
    item_object.set({
    top:player_y,
    left:player_x

    });
    canvas.add(item_object);

    });
    
}


//Start making the changes from here ---->



window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == '90'){

        console.log("z and Shift is Pressed together");

        item_w = item_w + 10;
        item_h = item_h + 10;
        document.getElementById("current_width").innerHTML = item_w;
        document.getElementById("current_height").innerHTML = item_h;
        
    }



    if(e.shiftKey == true && keypressed == '85'){

        console.log("u and Shift is Pressed together");

        item_w = item_w - 10;
        item_h = item_h - 10;
        document.getElementById("current_width").innerHTML = item_w;
        document.getElementById("current_height").innerHTML = item_h;
        
    }

    if(keypressed == '37'){

        left();
        console.log("Left");
    }

    if(keypressed == '38'){

        up();
        console.log("Up");
    }

    if(keypressed == '39'){

        right();
        console.log("Right");
    }

    if(keypressed == '40'){

        down();
        console.log("Down");
    }

    if(keypressed == '65'){

        console.log("a");
        new_image('captain_america_left_hand.png');
    }

    if(keypressed == '66'){

        console.log("b");
        new_image('hulkd_body.png');
    }

    if(keypressed == '67'){

        console.log("c");
        new_image('hulk_right_hand.png');
    }

    if(keypressed == '68'){

        console.log("d");
        new_image('hulk_left_hand.png');
    }

    if(keypressed == '69'){

        console.log("e");
        new_image('hulk_legs.png');
    }

    if(keypressed == '70'){

        console.log("f");
        new_image("hulk_face.png");
    }

    if(keypressed == '71'){

        console.log("g");
        new_image('ironman_body.png');
    }

    if(keypressed == '72'){

        console.log("h");
        new_image('ironman_face.png');
    }

    if(keypressed == '73'){

        console.log("i");
        new_image('ironman_left_hand.png');
    }

    if(keypressed == '74'){

        console.log("j");
        new_image('ironman_right_hand.png');
    }

    if(keypressed == '75'){

        console.log("k");
        new_image('ironman_legs.png');
    }

    if(keypressed == '76'){

        console.log("l");
        new_image('spiderman_body.png');
    }

    if(keypressed == '77'){

        console.log("m");
        new_image('spiderman_face.png');
    }

    if(keypressed == '78'){

        console.log("n");
        new_image('spiderman_left_hand.png');
    }

    if(keypressed == '79'){

        console.log("o");
        new_image('spiderman_right_hand.png');
    }

    if(keypressed == '80'){

        console.log("p");
        new_image('spiderman_legs.png');
    }

    if(keypressed == '81'){

        console.log("q");
        new_image('thor_face.png');
    }

    if(keypressed == '82'){

        console.log("r");
        new_image('thor_left_hand.png');
    }
    if(keypressed == '83'){

        console.log("s");
        new_image('thor_right_hand.png');
    }
 
    
}