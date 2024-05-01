export interface currentPageType {
    performance: {
        TTFB: string,
        FullLoadTime: string,
        DOMContentLoadedTime: string
    }
}

export interface historicPagesType {
    [key: string]: currentPageType
}

export interface storagePageType {
    [key: string]: {
        [key: string]: currentPageType
    }
}

export interface gatheredPageDataType {
    title: string,
    timestamp: string,
    domain: string,
    data: currentPageType
}