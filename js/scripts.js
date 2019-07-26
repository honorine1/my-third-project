// for first icon
$(document).ready(function(){
$('#des-icon').click(function(){
$('.design').toggle();
$('#desi').toggle();
});
});
$(document).ready(function(){
    $('#desi').click(function(){
    $('.design').toggle();
    $('#desi').toggle();
    });
    });
    // for the second icon
    $(document).ready(function(){
        $('#dev-icon').click(function(){
        $('.development').toggle();
        $('#develop').toggle();
        });
        });
        $(document).ready(function(){
            $('#develop').click(function(){
            $('.development').toggle();
            $('#develop').toggle();
            });
            });
            // for the third icon
            $(document).ready(function(){
                $('#pro-icon').click(function(){
                $('.product').toggle();
                $('#prod').toggle();
                });
                });
                $(document).ready(function(){
                    $('#prod').click(function(){
                    $('.product').toggle();
                    $('#prod').toggle();
                    });
                   });
    // Portfolio scripts
  //contact us
  
//   $(document).ready(function(){
//     $('#form-co').submit(function(event){ 
//         function contactUs(){
//             var input=document.getElementById('#name').val();
//             var names=$('#name').val();
//             var email=$('#email').val();
//             var mesage=$('#message').val();
//             if(input!=empty){
//                 alert(names+ ',We received your message.Thanks for contacting us!');
//             }
//             else{
//                 alert('please enter your name!')
//             }
//         }  
   
   
//     event.preventDefault();
//   });
// });
$(document).ready(function(){
    $('#form-co').submit(function(event){ 
       
            var names=$('#name').val();
            var email=$('#email').val();
            var mesage=$('#message').val();
alert(names+','+ ''+ ' We received your message.Thanks for contacting us!');
    event.preventDefault();
  });
});