import {currentPageType, historicPagesType} from "../global/global.types";

export const singlePageMock:currentPageType = {
    performance: {
        TTFB: "0.1",
        FullLoadTime: "0.1",
        DOMContentLoadedTime: "0.1"
    }
};

export const historicPageMock:historicPagesType = {
    ["2024-04-24T10:52:20.779Z"]: {
        ...singlePageMock
    },
    ["2024-04-24T10:12:09.664Z"]: {
        ...singlePageMock
    },
    ["2024-04-24T09:34:38.019Z"]: {
        ...singlePageMock
    },
    ["2024-04-24T09:10:46.905Z"]: {
        ...singlePageMock
    },
    ["2024-04-24T08:13:14.099Z"]: {
        ...singlePageMock
    }
};
