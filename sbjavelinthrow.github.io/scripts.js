//Javascript scripts go in this file

//function so when a user clicks on a small image 
//it will replace the small image below.

$(".crop-img").click(function(){
$(".bigImage").attr('src',
$(this).attr('src'));
});


//

var counter = 0;
$(".aboutmescroll-thumbnail").click(function(){
$("#mainViewer").html(
$(this).html());

var id = $(this).attr("id");
counter = parseInt(id.slice(-1));
});

$("#aboutmescroll"+counter).click();
$("#mainViewer").click(function(event){
  
if(event.offsetX 
        < $(this).width()*0.3){
        
        counter = counter - 1;
      } else {
        
        counter = counter + 1;
      }


if(counter < 0){
        counter =  0;
      }

if(counter >= 
        $(".aboutmescroll-thumbnail").length){
        counter = 
      $(".aboutmescroll-thumbnail").length-1;
      }
      

      $("#aboutmescroll"+counter).click();
    });




