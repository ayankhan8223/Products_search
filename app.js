var size1=document.querySelector('#size1')

//hidden the size section

size1.classList.add('hideSize');

var product1 = document.querySelector('#product1');
var image1 = document.querySelector('#img1');
var footer1 = document.querySelector('#footer1');
var colImg11=document.querySelector('#color11');
var colImg12=document.querySelector('#color12');
var col11=document.querySelector('#color11');
var col12=document.querySelector('#color12');

colImg11.classList.add('active')

product1.addEventListener('mouseover',function(){
    image1.src='img/JCrew2.webp';
    size1.classList.remove('hideSize');
    footer1.classList.add('footup');
});
product1.addEventListener('mouseout',function(){
    image1.src='img/JCrew195.webp';
    size1.classList.add('hideSize');
    footer1.classList.remove('footup');
});

col11.addEventListener('mouseover',function(){
    colImg11.classList.add('active');
    colImg12.classList.remove('active');
    size1.classList.remove('hideSize');
    footer1.classList.add('footup');
    image1.src='img/JCrew3.webp';
    event.stopPropagation();
});
col12.addEventListener('mouseover',function(){
    colImg11.classList.remove('active')
    colImg12.classList.add('active');
    size1.classList.remove('hideSize');
    footer1.classList.add('footup');
    image1.src='img/JCrew3.jpg';
    event.stopPropagation();
});

// =======product2============//
var size2=document.querySelector('#size2')
size2.classList.add('hideSize');

var product2 = document.querySelector('#product2');
var image2 = document.querySelector('#img2');
var footer2 = document.querySelector('#footer2');
var colImg13=document.querySelector('#color13');
var colImg14=document.querySelector('#color14');
var col13=document.querySelector('#color13');
var col14=document.querySelector('#color14');

colImg12.classList.add('active')

product2.addEventListener('mouseover',function(){
    image2.src='img/Diane2.webp';
    size2.classList.remove('hideSize');
    footer2.classList.add('footup');
});
product2.addEventListener('mouseout',function(){
    image2.src='img/Diane355.jpg';
    size2.classList.add('hideSize');
    footer2.classList.remove('footup');
});

col13.addEventListener('mouseover',function(){
    colImg13.classList.add('active');
    colImg14.classList.remove('active');
    size2.classList.remove('hideSize');
    footer2.classList.add('footup');
    image2.src='img/Diane3.jpg';
    event.stopPropagation();
});
col14.addEventListener('mouseover',function(){
    colImg13.classList.remove('active')
    colImg14.classList.add('active');
    size2.classList.remove('hideSize');
    footer2.classList.add('footup');
    image2.src='img/Diane4.webp';
    event.stopPropagation();
});

// =======product3============//
var size3=document.querySelector('#size3')
size3.classList.add('hideSize');

var product3 = document.querySelector('#product3');
var image3 = document.querySelector('#img3');
var footer3 = document.querySelector('#footer3');
var colImg15=document.querySelector('#color15');
var colImg16=document.querySelector('#color16');
var col15=document.querySelector('#color15');
var col16=document.querySelector('#color16');

colImg12.classList.add('active')

product3.addEventListener('mouseover',function(){
    image3.src='img/MaxMara2.webp';
    size3.classList.remove('hideSize');
    footer3.classList.add('footup');
});
product3.addEventListener('mouseout',function(){
    image3.src='img/maxMara149.webp';
    size3.classList.add('hideSize');
    footer3.classList.remove('footup');
});

col15.addEventListener('mouseover',function(){
    colImg15.classList.add('active');
    colImg16.classList.remove('active');
    size3.classList.remove('hideSize');
    footer3.classList.add('footup');
    image3.src='img/MaxMara3.webp';
    event.stopPropagation();
});
col16.addEventListener('mouseover',function(){
    colImg15.classList.remove('active')
    colImg16.classList.add('active');
    size3.classList.remove('hideSize');
    footer3.classList.add('footup');
    image3.src='img/MaxMara.webp';
    event.stopPropagation();
});


// =======product4============//
var size4=document.querySelector('#size4')
size4.classList.add('hideSize');

var product4 = document.querySelector('#product4');
var image4 = document.querySelector('#img4');
var footer4 = document.querySelector('#footer4');
var colImg17=document.querySelector('#color17');
var colImg18=document.querySelector('#color18');
var col17=document.querySelector('#color17');
var col18=document.querySelector('#color18');

colImg12.classList.add('active')

product4.addEventListener('mouseover',function(){
    image4.src='img/studio2.webp';
    size4.classList.remove('hideSize');
    footer4.classList.add('footup');
});
product4.addEventListener('mouseout',function(){
    image4.src='img/studio175.webp';
    size4.classList.add('hideSize');
    footer4.classList.remove('footup');
});

col17.addEventListener('mouseover',function(){
    colImg17.classList.add('active');
    colImg18.classList.remove('active');
    size4.classList.remove('hideSize');
    footer4.classList.add('footup');
    image4.src='img/Studio3.webp';
    event.stopPropagation();
});
col18.addEventListener('mouseover',function(){
    colImg17.classList.remove('active')
    colImg18.classList.add('active');
    size4.classList.remove('hideSize');
    footer4.classList.add('footup');
    image4.src='img/Studio4.webp';
    event.stopPropagation();
});



// =======product5============//
var size5=document.querySelector('#size5')
size5.classList.add('hideSize');

var product5 = document.querySelector('#product5');
var image5 = document.querySelector('#img5');
var footer5 = document.querySelector('#footer5');
var colImg19=document.querySelector('#color19');
var colImg20=document.querySelector('#color20');
var col19=document.querySelector('#color19');
var col20=document.querySelector('#color20');

colImg12.classList.add('active')

product5.addEventListener('mouseover',function(){
    image5.src='img/hugo2.webp';
    size5.classList.remove('hideSize');
    footer5.classList.add('footup');
});
product5.addEventListener('mouseout',function(){
    image5.src='img/hugo1.webp';
    size5.classList.add('hideSize');
    footer5.classList.remove('footup');
});

col19.addEventListener('mouseover',function(){
    colImg19.classList.add('active');
    colImg20.classList.remove('active');
    size5.classList.remove('hideSize');
    footer5.classList.add('footup');
    image5.src='img/hugo229.webp';
    event.stopPropagation();
});
col20.addEventListener('mouseover',function(){
    colImg19.classList.remove('active')
    colImg20.classList.add('active');
    size5.classList.remove('hideSize');
    footer5.classList.add('footup');
    image5.src='img/hugob.webp';
    event.stopPropagation();
});



// =======product6============//
var size6=document.querySelector('#size6')
size6.classList.add('hideSize');

var product6 = document.querySelector('#product6');
var image6 = document.querySelector('#img6');
var footer6= document.querySelector('#footer6');
var colImg21=document.querySelector('#color21');
var colImg22=document.querySelector('#color22');
var col21=document.querySelector('#color21');
var col22=document.querySelector('#color22');

colImg12.classList.add('active')

product6.addEventListener('mouseover',function(){
    image6.src='img/Ralph.webp';
    size6.classList.remove('hideSize');
    footer6.classList.add('footup');
});
product6.addEventListener('mouseout',function(){
    image6.src='img/Ralph2.webp';
    size6.classList.add('hideSize');
    footer6.classList.remove('footup');
});

col21.addEventListener('mouseover',function(){
    colImg21.classList.add('active');
    colImg22.classList.remove('active');
    size6.classList.remove('hideSize');
    footer6.classList.add('footup');
    image6.src='img/Ralph3.webp';
    event.stopPropagation();
});
col22.addEventListener('mouseover',function(){
    colImg21.classList.remove('active')
    colImg22.classList.add('active');
    size6.classList.remove('hideSize');
    footer6.classList.add('footup');
    image6.src='img/Ralph175.webp';
    event.stopPropagation();
});
