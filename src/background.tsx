import {
    getLocalStoragePerformanceData
} from "./components/utils/getLocalStoragePerformanceData/getLocalStoragePerformanceData";
import {
    restructurePerformanceDataAndSave
} from "./components/utils/restructurePerformanceDataAndSave/restructurePerformanceDataAndSave";
import {organiseStorageDataForSend} from "./components/utils/organiseStorageDataForSend/organiseStorageDataForSend";
import {watchForStorageChange} from "./components/utils/watchForStorageChange/watchForStorageChange";

//- Opening long-lived connection - Receiving/sending of messages
chrome.runtime.onConnect.addListener((port) => {
    const unsubscribers: Array<() => void> = [];

    //- service worker listening for message
    port.onMessage.addListener(async (msg) => {
        if (msg.message !== 'SendPerformanceData' || !msg.domain) return;

        const existingData = await getLocalStoragePerformanceData(msg.domain);

        if (existingData) {
            organiseStorageDataForSend(existingData, port);
        }

        const storageUnsubscriber = watchForStorageChange(msg.domain, async (newValue) => {
            organiseStorageDataForSend(newValue, port);
        })

        unsubscribers.push(storageUnsubscriber);
    });

    port.onDisconnect.addListener(() => {
        console.log('Popup window disconnected :(');
        unsubscribers.forEach(unsub => unsub());
    })
});

//- One Time Message (saving PerformanceData to storage)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message !== 'PerformanceData') return;
    restructurePerformanceDataAndSave(request.data);
});