// console.log('hello')
// document.getElementById('fileupload').onchange = function(e) {
function upload_image(item){
  var img = new Image();
  img.onload = draw;
  img.onerror = failed;
  // alert(URL.createObjectURL(item.files[0]));
  img.src = URL.createObjectURL(item.files[0]);
};
function draw() {
  if (this.width < this.height) {
    var canvas = document.getElementById('imagecanvas');
    canvas.width = window.innerWidth;
    canvas.height = this.height;
    var ctx = canvas.getContext('2d');
    var hRatio = canvas.width / this.width;
    var vRatio = window.innerHeight / this.height;
    var ratio  = Math.min ( hRatio, vRatio );
    var centerShift_x = ( canvas.width - this.width*ratio ) / 2;
    var centerShift_y = ( canvas.height - this.height*ratio ) / 2;
    ctx.drawImage(this, 0, 0, this.width, this.height, centerShift_x, centerShift_y/2, this.width*ratio, this.height*ratio);

  } else if (this.width < window.innerWidth && this.height < window.innerHeight) {
      var canvas = document.getElementById('imagecanvas');
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight;
      var ctx = canvas.getContext('2d');
      var hRatio = canvas.width / this.width;
      var vRatio = canvas.height / this.height;
      var ratio  = Math.min ( hRatio, vRatio );
      var centerShift_x = ( canvas.width - this.width*ratio ) / 2;
      ctx.drawImage(this, 0,0, this.width, this.height, centerShift_x, 0, this.width*ratio,this.height*ratio);
  } else {
      var canvas = document.getElementById('imagecanvas');
      canvas.width = this.width;
      canvas.height = window.innerHeight;
      var ctx = canvas.getContext('2d');
      var hRatio = window.innerWidth / this.width    ;
      var vRatio = canvas.height / this.height  ;
      var ratio  = Math.min ( hRatio, vRatio );
      var centerShift_x = ( canvas.width - this.width*ratio ) / 2;
      var centerShift_y = ( canvas.height - this.height*ratio ) / 2;
      ctx.drawImage(this, 0, 0, this.width, this.height, centerShift_x, centerShift_y, this.width*ratio, this.height*ratio);
  }
};
function failed() {
  console.error("The provided file couldn't be loaded as an Image media");
};

function toggleTransform() {
  var x = document.getElementById("transformDiv");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("transformButton");
  y.classList.toggle("toggleBorder");
}

function toggleAdjust() {
  var x = document.getElementById("adjustDiv");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("adjustButton");
  y.classList.toggle("toggleBorder");
}

function updateBrightness() {
    var vol = document.getElementById('brightnessSlider').value;
    var out = document.getElementById('brightnessValue');
    out.innerHTML = vol;
}

function updateContrast() {
    var vol = document.getElementById('contrastSlider').value;
    var out = document.getElementById('contrastValue');
    out.innerHTML = vol;
}

function toggleAnnotation() {
  var x = document.getElementById("annotationDiv");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("annotationButton");
  y.classList.toggle("toggleBorder");
}

function toggleText() {
  var x = document.getElementById("textDiv");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("textButton");
  y.classList.toggle("toggleBorder");
}

function toggleFilter() {
  var x = document.getElementById("filterDiv");
  if (x.style.display === "none" || x.style.display === "") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  var y = document.getElementById("filterButton");
  y.classList.toggle("toggleBorder");
}



















// // vars
// let result = document.querySelector(".result"),
//   img_result = document.querySelector(".img-result"),
//   img_w = document.querySelector(".img-w"),
//   img_h = document.querySelector(".img-h"),
//   options = document.querySelector(".options"),
//   save = document.querySelector(".save"),
//   cropped = document.querySelector(".cropped"),
//   dwn = document.querySelector(".download"),
//   upload = document.querySelector("#file-input"),
//   cropper = "";

// // on change show image with crop options
// upload.addEventListener("change", (e) => {
//   if (e.target.files.length) {
//     // start file reader
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       if (e.target.result) {
//         // create new image
//         let img = document.createElement("img");
//         img.id = "image";
//         img.src = e.target.result;
//         // clean result before
//         result.innerHTML = "";
//         // append new image
//         result.appendChild(img);
//         // show save btn and options
//         save.classList.remove("hide");
//         options.classList.remove("hide");
//         // init cropper
//         cropper = new Cropper(img);
//       }
//     };
//     reader.readAsDataURL(e.target.files[0]);
//   }
// });

// // save on click
// save.addEventListener("click", (e) => {
//   e.preventDefault();
//   // get result to data uri
//   let imgSrc = cropper
//     .getCroppedCanvas({
//       width: img_w.value, // input value
//     })
//     .toDataURL();
//   // remove hide class of img
//   cropped.classList.remove("hide");
//   img_result.classList.remove("hide");
//   // show image cropped
//   cropped.src = imgSrc;
//   dwn.classList.remove("hide");
//   dwn.download = "imagename.png";
//   dwn.setAttribute("href", imgSrc);
// });