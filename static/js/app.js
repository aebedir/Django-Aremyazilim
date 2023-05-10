function add(id){
    let active = document.getElementsByClassName("active")
    active[0].classList.remove("active");
    document.getElementById(id).classList.add("active")
}

function add2(id){
  let active2 = document.getElementsByClassName("active2")
  active2[0].classList.remove("active2");
  document.getElementById(id).classList.add("active2")
}

// Eğitimlerimiz açılır sayfa
$("#2").mouseenter(function(){
    document.querySelector("#egitim").classList.remove("d-none")        
});
$("#egitim").mouseleave(function(){
    document.querySelector("#egitim").classList.add("d-none")    
});

$("#3").mouseenter(function(){
    document.querySelector("#egitim").classList.add("d-none")
});
$("#1").mouseenter(function(){
    document.querySelector("#egitim").classList.add("d-none")
});

$(".getInfo").click(function(){
  if (document.querySelector(".formInfo").classList.contains("d-none")){
    document.querySelector(".formInfo").classList.remove("d-none")
  }
  else{
    document.querySelector(".formInfo").classList.add("d-none")
  }
       
});

$(".formgonder").click(function(){
  
  document.querySelector(".uyari").classList.remove("d-none")
  setInterval(function() {document.querySelector(".uyari").classList.add("d-none")},
  3000)
});






// OWL carousel

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:5,
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})





// Kayan yazılar
var Text = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  Text.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 80 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 3; }
  
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
  
  window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-words');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new Text(elements[i], JSON.parse(toRotate), period);
      }
    }
  };



  // Scroll İşlemleri
jQuery(document).ready(function() {
  
  var btn = $('.up');   

  $(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
      btn.removeClass("d-none");
    } else {
      btn.addClass("d-none");
    }
  });    

  $(window).scroll(function() {
    if ($(window).scrollTop() > 10) {
      document.querySelector("#egitim").classList.add("d-none")
    }
  });

  $(window).scroll(function() {
    if ($(window).scrollTop() > 500) {
      document.querySelector(".secret_navbar").classList.remove("d-none")
    } else {
      document.querySelector(".secret_navbar").classList.add("d-none")
    }
  }); 

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
});






//form option select ayarları
document.form.hizmet.onchange = function(){
  if(this.value=="1")  
    document.querySelector(".asansorr").classList.remove("d-none") 
  else{
    document.querySelector(".asansorr").classList.add("d-none")
  }
}



