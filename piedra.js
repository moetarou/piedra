
'use strict'

// scroll function
    //scroll to top
    function scrollToTop() {
        scrollTo(0, 0);
    }
    //scroll to news
    function scrollToNews() {
    scrollTo( 0, 1400 );
    }
    //scroll to shop
    function scrollToShop() {
    scrollTo(0, 2700);
    }
    //scroll to access
    function scrollToAccess() {
        scrollTo(0, 3500);
    }


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
    document.getElementById("containerImg").src=pics[num];
    setTimeout("slideshow_timer()",3000); 
    };
    slideshow_timer();
       
    
// newPage function
    // open news page with new page
    function newsOpen() {
        document.getElementById('newsBtn').onclick =
            window.open("file:///Users/ishiharamoe/workspace/PIEDRA%20%20hp/piedra_news.html");
    }

    // open shop page with new page
    function toShop() {
        document.getElementById('shopBtn').onclick =
            window.open("file:///Users/ishiharamoe/workspace/PIEDRA%20%20hp/piedra_shop.html");
    }

    // open instagram with new page
    function instaOpen() {
        document.getElementById('instagramIcon').onclick=
            window.open("https://www.instagram.com/piedra1121/?hl=ja");
    }


    

       
  

    
