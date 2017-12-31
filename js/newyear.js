
$(document).ready(function(){
  $.html5Loader({
        filesToLoad:    ' http://newyearwithoutputin.com/files.json', // this could be a JSON or simply a javascript object
        onBeforeLoad:       function () {},
        onComplete:         function () {console.log("hooray, files loaded!!!")},
        onElementLoaded:    function ( obj, elm) { },
        onUpdate:           function ( percentage ) {}
  });

function surprise() {
    (function loop() {
        var now = new Date();
        if (now.getDate() === 1 && now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
            var videoFile = 'nwy2.mp4';
            $('#bgvid source').attr('src', videoFile);
            $("#bgvid")[0].load();
            console.log('HAPPENED!!!')
        }
        now = new Date();                  // allow for time passing
        var delay = 60000 - (now % 60000); // exact ms to next minute interval
        setTimeout(loop, delay);
        console.log(now);
    })();
}

surprise();
});
