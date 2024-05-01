const mockTabs = [{
    id: 1,
    active:true,
    currentWindow: true
}];

const mockStorage = {
    "google.com": {
        "2024-04-25T11:07:38.872Z": {
            performance: {
                DOMContentLoadedTime: "0.1",
                FullLoadTime: "0.1",
                TTFB: "0.0"
            }
        }
    }
}

const mockStorageChangeData = {
    'google.com': {
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
}

global.chrome = {
    tabs: {
        query: jest.fn().mockImplementation(() => {
            return new Promise((resolve, reject) => {
                resolve(mockTabs);
            })
        })
    },
    storage: {
        local: {
            get: jest.fn().mockImplementation(() => {
                return new Promise((resolve, reject) => {
                    resolve(mockStorage);
                })
            }),
            set: jest.fn().mockImplementation(() => {
                return new Promise((resolve, reject) => {
                    resolve(mockStorage);
                })
            })
        },
        onChanged: {
            addListener: jest.fn().mockImplementation((callback) => {
                callback(mockStorageChangeData);
            }),
            removeListener: jest.fn().mockImplementation(() => {})
        }
    },
    runtime: {
        onConnect: {
            addListener: jest.fn().mockImplementation((port) => {})
        }
    }
};