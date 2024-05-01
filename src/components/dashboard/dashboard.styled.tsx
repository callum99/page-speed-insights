import styled, {css} from "styled-components";

const FontHeadingDefaults = css`
    font-family: Arial, "Helvetica Neue", sans-serif;
    line-height: 100%;
    font-weight: bold;
`;

const FontRegularDefaults = css`
    font-family: Arial, "Helvetica Neue", sans-serif;
    line-height: 18px;
    font-size: 14px;
`;

export const DashboardContainer = styled.div`
    width: 600px;
    height: 100%;
    background-color: #f1f2f3;
`;

export const DashboardTitle = styled.h1`
    ${FontHeadingDefaults};
    font-size: 30px;
    color: #333333;
    margin-bottom: -10px;
`;

export const DashboardSubTitle = styled.h3`
    ${FontHeadingDefaults};
    font-size:20px;
    color: #666666;
`;

export const DashboardKeyText = styled.span`
    ${FontRegularDefaults};
    color: #000000;
`;

export const DashboardTimeValue = styled.span`
    ${FontRegularDefaults};
    color: red;
`;

export const DomainStyle = styled.span`
    ${FontHeadingDefaults};
    font-size:20px;
    color: #000000;
`;

export const HeaderContainer = styled.div`
    width:100%;
    height:auto;
    display: inline-block;
    background-color:#ffffff;
    padding: 0 20px;
`;

export const BodyContainer = styled.div`
    width:100%;
    height:100%;
    display: inline-block;
`;

export const BodyContentContainer = styled.div`
    width: 100%;
    padding: 0 20px 0 20px;
    display: inline-block;
    height: auto;
`;
