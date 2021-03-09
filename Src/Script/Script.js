
// var name=""

// do{
//     name = prompt("Plz Enter Your Name")
//  }while(!name)
//  document.getElementById('welcome').innerHTML=`Hello ${name} ` 



    //made by vipul mirajkar thevipulm.appspot.com
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };
    
    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];
    
        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }
    
        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
    
        var that = this;
        var delta = 200 - Math.random() * 100;
    
        if (this.isDeleting) { delta /= 2; }
    
        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }
    
        setTimeout(function() {
        that.tick();
        }, delta);
    };
    
   
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    
    



        window.addEventListener("scroll" , function(){
            let header = document.querySelector("header");
            header.classList.toggle("sticky" , window.scrollY)
        })
    
    


        function am(){
            console.log("clicked");
            // document.body.style.background = "rgb(199, 192, 192)";
            window.scrollBy(0, 450);
        }

        function p(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop=0;

           setTimeout( window.scrollBy(0, 2200) ,100);
        }

        function s(){
            window.scrollBy(0, 1600);
        }

        function cm(){
            window.scrollBy(0, 4400);
        }


        function dark(){
            document.querySelector('.btn').innerHTML="Enjoy Dark mode🖤"
            document.body.style.background = "rgba(28, 29, 29, 0.884)";
            document.body.style.color = "rgb(0, 0, 0)";
            document.getElementsByClassName('.aboutme').style.background = "rgb(112, 111, 109)" ;

        }



  function gotop(){
    document.body.scrollTop = 0;
   
    document.documentElement.scrollTop=0;
}


        // https://www.instagram.com/akash_mane21/
        // https://www.facebook.com/akash.mane.777363/
        // https://github.com/Akashmame
        
        // https://www.youtube.com/channel/UCCm6KhVF_J6GmkylESxVrqQ