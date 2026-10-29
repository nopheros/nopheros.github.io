// Demo clip player: shared by voice-actor.html and broadcaster.html.
// Audio objects are created here rather than as <audio> tags so the
// site-wide audioPlayer plugin (active.js) doesn't wrap them.
(function () {
  var players = [];

  function fmt(s) {
    if (!isFinite(s) || s < 0) s = 0;
    var m = Math.floor(s / 60), r = Math.floor(s % 60);
    return m + ':' + (r < 10 ? '0' : '') + r;
  }

  function parseTime(t) {
    var p = (t || '0:00').split(':');
    return Number(p[0]) * 60 + Number(p[1]);
  }

  function setup(el) {
    var audio = new Audio();
    audio.preload = 'none';
    var btn = el.querySelector('.dp-btn');
    var track = el.querySelector('.dp-track');
    var fill = el.querySelector('.dp-fill');
    var time = el.querySelector('.dp-time');
    var known = parseTime(el.getAttribute('data-duration'));
    var loaded = false;

    function duration() {
      return isFinite(audio.duration) && audio.duration > 0 ? audio.duration : known;
    }

    function render() {
      var d = duration();
      fill.style.width = (d ? Math.min(audio.currentTime / d, 1) * 100 : 0) + '%';
      time.textContent = fmt(audio.currentTime) + ' / ' + fmt(d);
      track.setAttribute('aria-valuenow', Math.floor(audio.currentTime));
      track.setAttribute('aria-valuetext', time.textContent);
    }

    function load() {
      if (!loaded) { audio.src = el.getAttribute('data-src'); loaded = true; }
    }

    function play() {
      players.forEach(function (p) { if (p.audio !== audio) p.audio.pause(); });
      load();
      audio.play();
    }

    function seekTo(fraction) {
      load();
      var d = duration();
      if (!d) return;
      audio.currentTime = Math.max(0, Math.min(fraction, 1)) * d;
      render();
    }

    btn.addEventListener('click', function () {
      if (audio.paused) play(); else audio.pause();
    });

    track.addEventListener('pointerdown', function (e) {
      var rect = track.getBoundingClientRect();
      seekTo((e.clientX - rect.left) / rect.width);
    });

    track.addEventListener('keydown', function (e) {
      var step = e.key === 'ArrowRight' ? 5 : e.key === 'ArrowLeft' ? -5 : 0;
      if (!step) return;
      e.preventDefault();
      var d = duration();
      if (d) seekTo((audio.currentTime + step) / d);
    });

    audio.addEventListener('play', function () {
      el.classList.add('is-playing');
      btn.setAttribute('aria-label', 'Pause ' + el.getAttribute('data-title'));
    });
    audio.addEventListener('pause', function () {
      el.classList.remove('is-playing');
      btn.setAttribute('aria-label', 'Play ' + el.getAttribute('data-title'));
    });
    audio.addEventListener('ended', function () { audio.currentTime = 0; render(); });
    audio.addEventListener('timeupdate', render);
    audio.addEventListener('loadedmetadata', render);

    btn.setAttribute('aria-label', 'Play ' + el.getAttribute('data-title'));
    track.setAttribute('aria-valuemax', Math.floor(known));
    render();
    players.push({ audio: audio });
  }

  document.querySelectorAll('.demo-player').forEach(setup);
})();
