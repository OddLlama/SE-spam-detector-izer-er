/*
Run this in the console on http://stackexchange.com/questions?tab=realtime.
*/

// This is the current spam-detector regex:
r=/<h2>[\s\S]*?(?:\d{10}|vashikaran|baba|love)[\s\S]*?<\/h2>/i

s=document.createElement('style');s.innerHTML='.metaInfo,.siteLink,.realtime-body-summary{display:none}.question-container{padding:2px!important}#mainArea a:visited{color:#F44!important}';document.head.appendChild(s);b=document.createElement('base');b.setAttribute('target','_blank');document.head.appendChild(b)
d=document.title;(u=document.createElement('audio')).src='http://cdn-chat.sstatic.net/chat/so.mp3';document.body.appendChild(u);(new(MutationObserver||WebKitMutationObserver)(function(m){m.forEach(function(l){for(i=0;i<l.addedNodes.length;i++){n=l.addedNodes[i],h=n.innerHTML;if(r.test(h)){u.play();document.title='### SPAM FOUND ###';n.style.backgroundColor='#FAA'}}})})).observe(document.getElementById('mainArea'),{childList:true});window.onfocus=function(){document.title=d}
