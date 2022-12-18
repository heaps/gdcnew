// ----------------------------------------------------
//                END - LOAD LIBRARIES START
// ----------------------------------------------------



var scripts = [
  'assets/js/components.js',  
  'assets/gdc/header-footer.js',
  'assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js',
  'assets/vendor/tiny-slider/tiny-slider.js',
  'assets/vendor/glightbox-new/js/glightbox.js',
  'assets/vendor/purecounterjs/dist/purecounter_vanilla.js',
  'assets/js/functions.js',
  'assets/js/video.js'  
];

function loadScript(url) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function runnerEnd(){
  // load sync scripts
  for (var i=0; i<scripts.length; i++) {
    await loadScript(scripts[i]);
  }

  console.log('END - Pong!');
}
console.log('END - Ping!');

runnerEnd().then(() => {
  document.documentElement.style.display = 'block'; 
  console.log('END - Ping Pong!')
});


