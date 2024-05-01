import {gatheredPageDataType, historicPagesType} from "../../global/global.types";
import {getLocalStoragePerformanceData} from "../getLocalStoragePerformanceData/getLocalStoragePerformanceData";
import {setLocalStoragePerformanceData} from "../setLocalStoragePerformanceData/setLocalStoragePerformanceData";

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
}