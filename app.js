"use strict";
(() => {
  const config = window.WEDDING_CONFIG;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const target = Date.parse(config.wedding.dateISO);
  const tick = () => {
    const minutes = Math.max(0, Math.ceil((target - Date.now()) / 60000));
    document.querySelector("#cd-d").textContent = Math.floor(minutes / 1440);
    document.querySelector("#cd-h").textContent = String(Math.floor(minutes / 60) % 24).padStart(2, "0");
    document.querySelector("#cd-m").textContent = String(minutes % 60).padStart(2, "0");
  };
  tick();
  let clock = setInterval(tick, 30000);
  let audio = null, wantsMusic = false, leaving = false, navigating = null;
  const sound = document.querySelector("#sound-toggle");
  const status = document.querySelector("#sound-status");
  const updateSound = () => {
    const playing = !!audio && !audio.paused && wantsMusic;
    sound.setAttribute("aria-pressed", String(playing));
    sound.setAttribute("aria-label", playing ? "Pause background music" : "Play background music");
    sound.querySelector("span").textContent = playing ? "Music on" : "Music off";
  };
  const playMusic = async () => {
    if (!audio) {
      audio = new Audio("assets/audio/bgm.m4a");
      audio.loop = true;
      audio.preload = "none";
      audio.playsInline = true;
      audio.volume = 0.3;
      audio.addEventListener("pause", updateSound);
      audio.addEventListener("playing", updateSound);
      audio.addEventListener("error", () => {
        wantsMusic = false;
        updateSound();
        status.textContent = "Music could not load. Tap Music off to try again.";
      });
    }
    try { await audio.play(); updateSound(); }
    catch { wantsMusic = false; updateSound(); status.textContent = "Tap the music button to start the soundtrack."; }
  };
  sound.addEventListener("click", () => {
    wantsMusic = !wantsMusic;
    if (wantsMusic) { status.textContent = ""; void playMusic(); }
    else { audio?.pause(); updateSound(); }
  });
  // Never autoplay on a cold visit; a deliberate tap keeps mobile audio reliable.
  document.addEventListener("visibilitychange", () => {
    clearInterval(clock);
    if (document.hidden) { audio?.pause(); }
    else { tick(); clock = setInterval(tick, 30000); if (wantsMusic && !leaving) void playMusic(); }
  });
  const portal = document.querySelector("#world-portal-link");
  const overlay = document.querySelector("#portal-transition");
  portal.addEventListener("click", (event) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.defaultPrevented) return;
    if (leaving) { event.preventDefault(); return; }
    leaving = true;
    try {
      sessionStorage.setItem("wedding-world-audio-intent", wantsMusic ? "play" : "muted");
      sessionStorage.removeItem("wedding-world-audio-state");
    } catch {}
    audio?.pause();
    if (reduced) return;
    event.preventDefault();
    portal.setAttribute("aria-disabled", "true");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("portal-opening");
    navigating = setTimeout(() => location.assign(portal.href), 420);
  });
  addEventListener("pagehide", () => { audio?.pause(); clearInterval(clock); });
  addEventListener("pageshow", (event) => {
    if (event.persisted) { clearInterval(clock); tick(); clock = setInterval(tick, 30000); }
    clearTimeout(navigating);
    leaving = false;
    portal.removeAttribute("aria-disabled");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("portal-opening");
    if (event.persisted && wantsMusic) void playMusic();
  });
})();
