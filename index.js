$('.carousel').carousel()


$('button').on('click',function(){
    var a=Math.floor((Math.random()*4))

    var b=Math.floor((Math.random()*4))

    var aw="勇士以4:"+b+"獲得總冠軍!"

    var bw="騎士以4:"+a+"獲得總冠軍!"

    if(a>b){
         $('#result').val(aw) 
     }
    else{
         $('#result').val(bw) 
     }
})
