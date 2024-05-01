import {currentPageType, historicPagesType} from "../global/global.types";

export interface DashboardProps {
    title: string;
    currentPage?: currentPageType;
    historicPages?: historicPagesType
    hostName?: string;
}
