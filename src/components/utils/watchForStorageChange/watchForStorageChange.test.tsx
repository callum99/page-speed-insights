import {watchForStorageChange} from "./watchForStorageChange";

describe('watches for any changes made within storage', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('Listener is called when storage is changed', () => {
        const domain = 'google.com';
        const mockStorageChangeData = {
            [domain]: {
                oldValue: {
                    "2024-04-25T11:07:38.872Z": {
                        performance: {
                            DOMContentLoadedTime: "0.1",
                            FullLoadTime: "0.1",
                            TTFB: "0.0"
                        }
                    }
                },
                newValue: {
                    "2024-04-25T11:07:38.872Z": {
                        performance: {
                            DOMContentLoadedTime: "0.1",
                            FullLoadTime: "0.1",
                            TTFB: "0.0"
                        }
                    },
                    "2024-04-25T12:08:38.872Z": {
                        performance: {
                            DOMContentLoadedTime: "0.1",
                            FullLoadTime: "0.1",
                            TTFB: "0.0"
                        }
                    }
                }
            }
        };

        const myStorageChangedCallback = jest.fn().mockImplementation((newData: any) => {
            console.log('value updated', newData);
        });
        const stopWatchingForChanges = watchForStorageChange(domain, myStorageChangedCallback);

        expect(chrome.storage.onChanged.addListener).toHaveBeenCalledWith(expect.any(Function));
        expect(myStorageChangedCallback).toHaveBeenCalledWith(mockStorageChangeData[domain].newValue);
        expect(stopWatchingForChanges).toEqual(expect.any(Function));

        stopWatchingForChanges();

        expect(chrome.storage.onChanged.removeListener).toHaveBeenCalledWith(expect.any(Function));
    });

    it('does not callback data if changes are false', () => {
        const domain = 'google.com';

        chrome.storage.onChanged.addListener = jest.fn().mockImplementation((callback:(data: any) => void) => {
            callback({});
        });

        const myStorageChangedCallback = jest.fn().mockImplementation((newData: any) => {
            console.log('value updated', newData);
        });

        watchForStorageChange(domain, myStorageChangedCallback);

        expect(myStorageChangedCallback).not.toHaveBeenCalled();
    });
});
