(()=>{"use strict";window.addEventListener("load",(async()=>{await new Promise((e=>setTimeout(e,0)));const e={TTFB:((performance.timing.responseStart-performance.timing.fetchStart)/1e3).toFixed(1),DOMContentLoadedTime:((performance.timing.domComplete-performance.timing.domLoading)/1e3).toFixed(1),FullLoadTime:((performance.timing.loadEventEnd-performance.timing.fetchStart)/1e3).toFixed(1)},t=window.location.host,a=new Date;await(async()=>{await chrome.runtime.sendMessage({message:"PerformanceData",data:{domain:t,timestamp:a,title:"performance",data:e}})})()}))})();