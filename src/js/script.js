var w = window,
    y = w.innerHeight;
    p = ["Projects", "Mission", "Whatever", "Dupsko"]; 
    tl= new TimelineLite({paused:true});
    e = document.getElementById('Dots');
    f = e.offsetHeight;

var pages=document.querySelectorAll('.page');

for(var i=0;i<pages.length;i++){

    // Bottom Menu 

    var D=document.createElement('li'); 
    D.className='pageLink pageLink-' + (i + 1);
    D.id='dot' + i;
    document.getElementById('Dots').appendChild(D);

    for (var j = p.length - 1; j >= 0; j--) {

      D.style.transform = 'translate(0px,' + (y - f / 1.2) + 'px';
      var chars = p[i].split('');
      D.innerHTML = '<span class="small">' + chars[0]; + '</span>';
      var pageName = chars.join('');
      D.innerHTML += '<span class="big">' + pageName + '</span>';

    }

    D.addEventListener('click',function(){ 
      tl.seek(this.id).play();
    });
    
    if(i!=pages.length-1){
      tl.set(['#dot' + (i - 1), '#home'], { className: '+=past' })
        .to(pages[i],0.7,{xPercent:-100,rotationY:80},'L'+i)
        .set('#dot' + i, { className:'+=active'})
        // .to('#dot' + i + ' .big', 0.5, { top: '-18px'} )
        .to('#dot' + i + ' .small', 0.5, { opacity: 0}, 'L' + i )
        .from('#dot' + i + ' .big', 0.5, { opacity: 0}, 'L' + i )
        .to('#dot' + i,0.7,{backgroundColor:'#ea4648', color: '#fff', y: 10, fontSize: '32px', top: '50%'},'L'+i)
        .to(['#dot' + (i - 1), '#home'], 0.7, { backgroundColor:'#ddd', fontSize: '12px'}, 'L' + i)
        // .to('#dot' + (i - 1) + ' .big', 0.5, { top: '6px'},'L' + i)
        .from(pages[i+1],0.7,{xPercent:100,rotationY:-80},'L'+i)
        .from(pages[i],0.5,{scale:.8,ease:Back.easeIn})
        .addPause()
    };

};


(function() {

  var slides = document.querySelectorAll(".projects_slider--single");
  var currentSlide = 0;
  var L = document.getElementById('goLeft');
  var R = document.getElementById('goRight');

  for(var i=0;i<slides.length;i++){
          
          if(i>0) { 

            TweenLite.set(slides[i], {left:"1960px"});  

          } 
    }     

  function nextSlide(){         
      TweenLite.to( slides[currentSlide], 1, {left:"-960px"} );   
      
      if (currentSlide < slides.length - 1) {
        currentSlide++;
      }
      else {
        currentSlide = 0;
      }
                        
      TweenLite.fromTo( slides[currentSlide], 1, {left: "960px"}, {left:"0px"} );
   
  }

  R.addEventListener("click", nextSlide); 
    
})();

function GO(e) {
  var SD=isNaN(e)?e.wheelDelta||-e.detail:e;
  if(SD<0){
   tl.play()
  }else{
    tl.reverse()
  };
};

document.addEventListener("mousewheel",GO);
document.addEventListener("DOMMouseScroll",GO);