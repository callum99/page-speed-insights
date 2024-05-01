import {restructurePerformanceDataAndSave} from "./restructurePerformanceDataAndSave";
import {gatheredPageDataType, storagePageType} from "../../global/global.types";

describe('Restructure initial performance data and save to storage', () => {
    const websiteDataMock:gatheredPageDataType = {
        title: 'performance',
        timestamp: '2024-04-25T11:07:38.872Z',
        domain: 'google.com',
        data: {
            performance: {
                DOMContentLoadedTime: "0.1",
                FullLoadTime: "0.1",
                TTFB: "0.0"
            }
        }
    };
    const storeDataNotExisting:storagePageType = {
        'bbc.com': {
            '2024-04-25T11:07:38.872Z': {
                performance: {
                    DOMContentLoadedTime: "0.1",
                    FullLoadTime: "0.1",
                    TTFB: "0.0"
                }
            }
        }
    }
    const storeDataExisting:storagePageType = {
        'google.com': {
            '2024-04-25T11:07:38.872Z': {
                performance: {
                    DOMContentLoadedTime: "0.1",
                    FullLoadTime: "0.1",
                    TTFB: "0.0"
                }
            },
            '2024-04-25T12:08:38.872Z': {
                performance: {
                    DOMContentLoadedTime: "0.1",
                    FullLoadTime: "0.1",
                    TTFB: "0.0"
                }
            }
        }
    }

    beforeEach(()  => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('Gets correct data from storage', async () => {
        const websiteDataMock:gatheredPageDataType = {
            title: 'performance',
            timestamp: '2024-04-25T11:07:38.872Z',
            domain: 'google.com',
            data: {
                performance: {
                    DOMContentLoadedTime: "0.1",
                    FullLoadTime: "0.1",
                    TTFB: "0.0"
                }
            }
        };

        // Spying on get storage data method
        const getLocalStoragePerformanceData = {
            getStorage: (domain: string) => {
                return {
                    [domain]: {
                        '2024-04-25T12:08:38.872Z': {
                            performance: {
                                DOMContentLoadedTime: "0.1",
                                FullLoadTime: "0.1",
                                TTFB: "0.0"
                            }
                        }
                    }
                }
            },
        };

        await restructurePerformanceDataAndSave(websiteDataMock);

        const spyGet = jest.spyOn(getLocalStoragePerformanceData, 'getStorage');

        getLocalStoragePerformanceData.getStorage('google.com');

        expect(spyGet).toHaveBeenCalledWith('google.com');
    });

    it('Sets correct data from storage when existing data exists', async () => {
        //- overwrite return data from api to test else statement
        chrome.storage.local.get = jest.fn().mockImplementation(() => {
            return storeDataExisting;
        });

        // Spying on get storage data method
        const getLocalStoragePerformanceData = {
            getStorage: (domain: string) => {
                return storeDataExisting;
            },
        };

        // Spying on Set storage data method
        const setLocalStoragePerformanceData = {
            setStorage: (storeData: object) => Promise,
        };

        await restructurePerformanceDataAndSave(websiteDataMock);

        const spyGet = jest.spyOn(getLocalStoragePerformanceData, 'getStorage');
        const spySet = jest.spyOn(setLocalStoragePerformanceData, 'setStorage');

        const existingData = getLocalStoragePerformanceData.getStorage('bbc.com');

        if (existingData) {
            setLocalStoragePerformanceData.setStorage(storeDataExisting);
        } else {
            setLocalStoragePerformanceData.setStorage(storeDataNotExisting);
        }

        expect(spyGet).toHaveBeenCalledWith('bbc.com');
        expect(spyGet).toHaveReturnedWith(storeDataExisting);
        expect(spySet).toHaveBeenCalledWith(storeDataExisting);
        expect(spySet).toHaveReturnedWith(Promise);
    });

    it('Sets correct data from storage when NO eixsting data', async () => {
        //- overwrite return data from api to test else statement
        chrome.storage.local.get = jest.fn().mockImplementation(() => {
            return storeDataNotExisting
        })

        // Spying on get storage data method
        const getLocalStoragePerformanceData = {
            getStorage: (domain: string) => {
                return undefined;
            },
        };

        // Spying on Set storage data method
        const setLocalStoragePerformanceData = {
            setStorage: (storeData: object) => Promise,
        };

        await restructurePerformanceDataAndSave(websiteDataMock);

        const spyGet = jest.spyOn(getLocalStoragePerformanceData, 'getStorage');
        const spySet = jest.spyOn(setLocalStoragePerformanceData, 'setStorage');

        const existingData = getLocalStoragePerformanceData.getStorage('bbc.com');

        if (existingData) {
            setLocalStoragePerformanceData.setStorage(storeDataExisting);
        } else {
            setLocalStoragePerformanceData.setStorage(storeDataNotExisting);
        }

        expect(spyGet).toHaveBeenCalledWith('bbc.com');
        expect(spyGet).toHaveReturnedWith(undefined);
        expect(spySet).toHaveBeenCalledWith(storeDataNotExisting);
        expect(spySet).toHaveReturnedWith(Promise);
    });
});