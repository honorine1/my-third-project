// for first icon
$(document).ready(function(){
$('#des-icon').click(function(){
$('.design').toggle();
$('#desi').toggle();
});
});
// $(document).ready(function(){
    $('#desi').click(function(){
    $('.design').toggle();
    $('#desi').toggle();
    });
    // });
    // for the second icon
    // $(document).ready(function(){
        $('#dev-icon').click(function(){
        $('.development').toggle();
        $('#develop').toggle();
        });
        // });
        // $(document).ready(function(){
            $('#develop').click(function(){
            $('.development').toggle();
            $('#develop').toggle();
            });
            // });
            // for the third icon
            // $(document).ready(function(){
                $('#pro-icon').click(function(){
                $('.product').toggle();
                $('#prod').toggle();
                });
                // });
                // // $(document).ready(function(){
                    $('#prod').click(function(){
                    $('.product').toggle();
                    $('#prod').toggle();
                    });
                //    });
    // Portfolio scripts
//first image
$('#p1').hide();
$('#pw1').animate({opacity:1});
$('#pw1').hover(function(){
$(this).stop().animate({opacity:.4},200);
$('#p1').fadeIn();},
function(){
    $(this).stop().animate({opacity:1},500); 
$('#p1').fadeOut()});
//second image
$('#p2').hide();
$('#pw2').animate({opacity:1});
$('#pw2').hover(function(){
$(this).stop().animate({opacity:.4},200);
$('#p2').fadeIn();},
function(){
    $(this).stop().animate({opacity:1},500); 
$('#p2').fadeOut()});
//third image
$('#p3').hide();
$('#pw3').animate({opacity:1});
$('#pw3').hover(function(){
$(this).stop().animate({opacity:.4},200);
$('#p3').fadeIn();},
function(){
    $(this).stop().animate({opacity:1},500); 
$('#p3').fadeOut()});
//fourth image
$('#p4').hide();
$('#pw4').animate({opacity:1});
$('#pw4').hover(function(){
$(this).stop().animate({opacity:.4},200);
$('#p4').fadeIn();},
function(){
    $(this).stop().animate({opacity:1},500); 
$('#p4').fadeOut()});
//fifth image
$('#p5').hide();
$('#pw5').animate({opacity:1});
$('#pw5').hover(function(){
$(this).stop().animate({opacity:.4},200);
$('#p5').fadeIn();},
function(){
    $(this).stop().animate({opacity:1},500); 
$('#p5').fadeOut()});
//sixth image
$('#p6').hide();
$('#pw6').animate({opacity:1});
$('#pw6').hover(function(){
$(this).stop().animate({opacity:.4},200);
$('#p6').fadeIn();},
function(){
    $(this).stop().animate({opacity:1},500); 
$('#p6').fadeOut()});
    //seventh image
    $('#p7').hide();
$('#pw7').animate({opacity:1});
$('#pw7').hover(function(){
$(this).stop().animate({opacity:.4},200);
$('#p7').fadeIn();},
function(){
    $(this).stop().animate({opacity:1},500); 
$('#p7').fadeOut()});
//eighth Image
$('#p8').hide();
$('#pw8').animate({opacity:1});
$('#pw8').hover(function(){
$(this).stop().animate({opacity:.4},200);
$('#p8').fadeIn();},
function(){
    $(this).stop().animate({opacity:1},500); 
$('#p8').fadeOut()});
  // contactus

    $('#form-co').submit(function(event){ 
       
            var names=$('#name').val();
            var email=$('#email').val();
            var mesage=$('#message').val();
            if(names == ''){
                alert('please enter your name!');  
            }
            else{
                alert(names+','+ ''+ ' We received your message.Thanks for contacting us!');
            }

    event.preventDefault();

  });
// });