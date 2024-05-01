//- Waiting for webpage to finish loading to send correct data
window.addEventListener('load', async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));

    const performanceData = {
        TTFB: ((performance.timing.responseStart - performance.timing.fetchStart) /1000).toFixed(1),
        DOMContentLoadedTime: ((performance.timing.domComplete - performance.timing.domLoading) / 1000).toFixed(1),
        FullLoadTime: ((performance.timing.loadEventEnd - performance.timing.fetchStart) / 1000).toFixed(1)
    }
    const domain = window.location.host;
    const date = new Date();

    //- One Time Message (Sending PerformanceData to service worker for storing)
    await (async () => {
        await chrome.runtime.sendMessage({
            message: 'PerformanceData',
            data: {domain: domain, timestamp: date, title: 'performance', data: performanceData}
        });
    })();
});


