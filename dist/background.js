(()=>{"use strict";chrome.runtime.onMessage.addListener(((e,s,n)=>{const o={};if(s.url)return o[s.url]=e.lastReadPage,console.log(`Saving ${o}`),chrome.storage.sync.set(o),!0;console.log(`${s} url is undefined`)}))})();