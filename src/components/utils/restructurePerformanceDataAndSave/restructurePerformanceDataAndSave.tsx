import {gatheredPageDataType, historicPagesType} from "../../global/global.types";
import {getLocalStoragePerformanceData} from "../getLocalStoragePerformanceData/getLocalStoragePerformanceData";
import {setLocalStoragePerformanceData} from "../setLocalStoragePerformanceData/setLocalStoragePerformanceData";

/*
 * Restructuring Data to merge existing data with current page data
 * @param {gatheredPageDataType} incomingData
 */
export const restructurePerformanceDataAndSave = async (incomingData: gatheredPageDataType) => {
    //- Restructuring performance data
    let performanceData = {};

    const existingData:historicPagesType = await getLocalStoragePerformanceData(incomingData.domain);

    if (existingData) {
        performanceData = {
            [incomingData.domain]: {
                [incomingData.timestamp]: {
                    performance: incomingData.data
                },
                ...existingData
            }
        };
    } else {
        performanceData = {
            [incomingData.domain]: {
                [incomingData.timestamp]: {
                    performance: incomingData.data
                }
            }
        };
    }

    await setLocalStoragePerformanceData(performanceData);
};
