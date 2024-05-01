import {historicPagesType} from "../../global/global.types";

/*
 * Organise current data into current and historic page data
 * @param {historicPagesType} data
 * @param {chrome.runtime.Port} port
 */
export const organiseStorageDataForSend = (data: historicPagesType, port: chrome.runtime.Port) => {
    const firstItem = Object.keys(data).length - 1;
    const currentPage = data[Object.keys(data)[firstItem]];

    port.postMessage({message: 'SentPerformanceData', currentData: currentPage, historicData: data});
};
