let fileInput = document.getElementById('imageinput');

function getFile() {
    fileInput.click();
    console.log('clickedd')
  }

fileInput.addEventListener('change', function(ev) { 
   if(ev.target.files) {
      let file = ev.target.files[0];
      var reader  = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function (e) {
        $("#canvas").css("display","block");
        $("#alt_img_to_drag").css("display","none");
        $("#logo-img").css("display","none");
          var image = new Image();
          image.src = e.target.result;
          image.onload = function(ev) {
             var canvas = document.getElementById('canvas');
             canvas.width = image.width;
             canvas.height = image.height;
             console.log("width=" + canvas.width + " height=" + canvas.height)
             var ctx = canvas.getContext('2d');
             ctx.drawImage(image,0,0);
            
         }
      }


   }
});