import {storagePageType} from "../../global/global.types";

export const setLocalStoragePerformanceData = async (pageData: storagePageType) => {
    return await chrome.storage.local.set(pageData);
};