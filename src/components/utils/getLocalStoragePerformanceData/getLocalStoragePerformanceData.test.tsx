import {getLocalStoragePerformanceData} from "./getLocalStoragePerformanceData";
import {storagePageType} from "../../global/global.types";

describe('Get Locale chrome storage method', () => {
    it('Get storage for a set domain', async () => {
        const result:storagePageType = {
            "google.com": {
                "2024-04-25T11:07:38.872Z": {
                    "performance": {
                        "DOMContentLoadedTime": "0.1",
                        "FullLoadTime": "0.1",
                        "TTFB": "0.0"
                    }
                }
            }
        };

        await getLocalStoragePerformanceData("google.com");

        expect(chrome.storage.local.get).toHaveBeenCalledWith("google.com");

        return chrome.storage.local.get("google.com").then(data => {
            expect(data).toStrictEqual(result);
        });
    });
});
