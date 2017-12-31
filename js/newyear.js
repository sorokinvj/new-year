
$(document).ready(function(){

  $.html5Loader({
        filesToLoad:       {
            "files": [
              {
                "type":"VIDEO",
                "sources": {
                    "h264":{
                      "source":"http://newyearwithoutputin.com/nwy2.mp4",
                      "size":73163519
                    }
                  }
                }
            ]
          }, // this could be a JSON or simply a javascript object
        onBeforeLoad:       function () {console.log("going to load");},
        onComplete:         function () {console.log("hooray, files loaded!!!");},
        onElementLoaded:    function ( obj, elm) { },
        onUpdate:           function ( percentage ) {console.log('loaded: ', percentage);}
  });

function surprise() {
    (function loop() {
        var now = new Date();
        if (now.getDate() === 1 && now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
          var videoFile = 'nwy2.mp4';
          $('#bgvid source').attr('src', videoFile);
          $("#bgvid")[0].load();
          console.log('HAPPENED!!!');
          $('#my-soon-counter').addClass('inactive');
          $('#deezer_wrapper').addClass('inactive');
        }
        now = new Date();                  // allow for time passing
        var delay = 60000 - (now % 60000); // exact ms to next minute interval
        setTimeout(loop, delay);
        console.log(now);
    })();
}

surprise();
});
