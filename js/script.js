// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  $('button').click(function(){

    var input = $('input').val();
    
    $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q=" +  input + "&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
        console.log(response);
        console.log(response.data[0].images.original.url)
        $("body").append("<img src=" + response.data[2].images.original.url + "/>")
    
        
      },
    }); 


});
  
  
  
});
