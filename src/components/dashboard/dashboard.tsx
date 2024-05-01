import React from 'react';
import {
    DashboardContainer,
    DashboardTitle,
    DashboardSubTitle,
    DashboardKeyText,
    DashboardTimeValue,
    DomainStyle,
    HeaderContainer,
    BodyContainer,
    BodyContentContainer
} from './dashboard.styled';
import Table from "../table/table";
import {DashboardProps} from "./dashboard.types";

const Dashboard = ({title, currentPage, hostName, historicPages}:DashboardProps) => {
    const TimeToFirstByte = currentPage?.performance.TTFB + 's';
    const FullLoadTime = currentPage?.performance.FullLoadTime + 's';
    const DOMContentLoadedTime = currentPage?.performance.DOMContentLoadedTime + 's';

    return (
        <DashboardContainer>
            <HeaderContainer role="banner">
                <DashboardTitle>{title}</DashboardTitle>
                <DashboardSubTitle>Page Speed metrics for: <DomainStyle>{hostName}</DomainStyle></DashboardSubTitle>
            </HeaderContainer>
            <BodyContainer>
                {!currentPage ? (
                    <BodyContentContainer aria-labelledby="current-performance">
                        <DashboardSubTitle id="current-performance">Waiting on storage data, refresh!</DashboardSubTitle>
                    </BodyContentContainer>
                ) : (
                    <>
                        <BodyContentContainer aria-labelledby="current-performance">
                            <DashboardSubTitle id="current-performance">Current peformance</DashboardSubTitle>
                        </BodyContentContainer>

                        <BodyContentContainer>
                            <DashboardKeyText>DOM Content Load Time:</DashboardKeyText>
                            <DashboardTimeValue>&nbsp;{DOMContentLoadedTime}</DashboardTimeValue>
                            <br/>
                            <DashboardKeyText>Full Load Time:</DashboardKeyText>
                            <DashboardTimeValue>&nbsp;{FullLoadTime}</DashboardTimeValue>
                            <br/>
                            <DashboardKeyText>Time to First Byte:</DashboardKeyText>
                            <DashboardTimeValue>&nbsp;{TimeToFirstByte}</DashboardTimeValue>
                        </BodyContentContainer>
                    </>
                )}

                {historicPages && (
                    <>
                        <BodyContentContainer aria-labelledby="historic-performance">
                            <DashboardSubTitle id="historic-performance">Historic Peformance</DashboardSubTitle>
                        </BodyContentContainer>
                        <Table data={historicPages} />
                    </>)
                }
            </BodyContainer>
        </DashboardContainer>
    );
};

export default Dashboard;