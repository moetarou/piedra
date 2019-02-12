
'use strict'

// slideShow function    
    //function of slideshow
    var pics= ["piedra-photo/S__1368086.jpg","piedra-photo/S__1368098.jpg","piedra-photo/S__1368082.jpg","piedra-photo/S__1368088.jpg"];

    //can start from 0
    var num = -1;

    var slideshow_timer= ()=> {
        if (num === 3){
        num = 0;
        }
        else {
        num ++;
        }
    document.getElementById("mainImg").src=pics[num];
    setTimeout("slideshow_timer()",3000); 
    };
    slideshow_timer();
       
    
// newPage function

    // open shop page with new page
    function toShop() {
        document.getElementById('shopBtn').onclick =
            window.open("file:///Users/ishiharamoe/workspace/piedra/piedra_shop.html");
    }

    // open instagram with new page
    function instaOpen() {
        document.getElementById('instagramIcon').onclick=
            window.open("https://www.instagram.com/piedra1121/?hl=ja");
    }
