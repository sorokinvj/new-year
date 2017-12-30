
$(document).ready(function(){
function surprise(cb) {
    (function loop() {
        var now = new Date();
        if (now.getDate() === 1 && now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
            $("#bgvid")[0].load();
            console.log('HAPPENED!!!')

        }
        now = new Date();                  // allow for time passing
        var delay = 60000 - (now % 60000); // exact ms to next minute interval
        setTimeout(loop, delay);
        console.log(now);
    })();
}

function changevideo() {
  var videoFile = 'nwy.mp4';
  $('#bgvid source').attr('src', videoFile);
}
surprise(changevideo());
});
