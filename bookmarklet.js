javascript:(()=>{let s=document.getElementById('yt_clean_ui');if(s){s.remove();document.body.style.cursor='default';document.documentElement.style.cursor='default';}else{s=document.createElement('style');s.id='yt_clean_ui';s.textContent=`
/* KEEP VIDEO VISIBLE */
#movie_player{
  opacity:1 !important;
  visibility:visible !important;
}

/* HIDE ALL CONTROLS + OVERLAYS */
.ytp-chrome-top,
.ytp-chrome-bottom,
.ytp-gradient-top,
.ytp-gradient-bottom,
.ytp-progress-bar-container,
.ytp-ce-element,
.ytp-cards-button,
.ytp-endscreen-content,
.ytp-title,
.ytp-title-text,
.ytp-title-channel,
.ytp-paid-content-overlay,
.ytp-overlays-container,
.ytp-fullscreen-quick-actions,
.ytp-pause-overlay,
.ytp-show-cards-title,
#masthead,
ytd-guide-renderer,
ytd-comments{
  display:none !important;
  visibility:hidden !important;
  opacity:0 !important;
}

/* FORCE CURSOR ALWAYS VISIBLE */
html,body,*{
  cursor:default !important;
}
`;document.head.appendChild(s);} })();void 0;
