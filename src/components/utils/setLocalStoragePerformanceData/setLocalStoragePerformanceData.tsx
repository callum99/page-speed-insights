import {storagePageType} from "../../global/global.types";

/*
 * Saving page data to chrome locale storage
 * @param {storagePageType} pageData
 */
export const setLocalStoragePerformanceData = async (pageData: storagePageType) => {
    return await chrome.storage.local.set(pageData);
};
