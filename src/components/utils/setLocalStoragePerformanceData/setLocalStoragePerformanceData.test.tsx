import {setLocalStoragePerformanceData} from "./setLocalStoragePerformanceData";
import {storagePageType} from "../../global/global.types";

describe('Set storage method', () => {
    it('Set storage of page performance data ', async () => {
        const pageData:storagePageType = {
            "google.com": {
                "2024-04-25T11:07:38.872Z": {
                    "performance": {
                        "DOMContentLoadedTime": "0.1",
                        "FullLoadTime": "0.1",
                        "TTFB": "0.0"
                    }
                }
            }
        }

        await setLocalStoragePerformanceData(pageData);

        expect(chrome.storage.local.set).toHaveBeenCalledWith(pageData);
    });
});