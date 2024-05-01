import styled from 'styled-components';

export const TableContainer = styled.table`
    padding: 0 20px 20px 20px;
    width: 100%;
    border-spacing: 0;
    border-radius: 16px;
`;

export const TableHeaderStyle = styled.thead`
    & > tr > td {
        padding: 10px 5px;
        border: none;
        font-weight: bold;
        color: #ffffff;
        font-size: 12px;
        background-color: #555555;
        text-align:center;
        border-spacing: 0;
        
        &:first-child {
            border-radius: 14px 0 0 0;
        }
        
        &:last-child {
            border-radius: 0 14px 0 0;
        }
    }
`;

export const TableCellStyle= styled.td`
    color: #999999;
    background-color: #ffffff;
    padding: 10px 5px;
    border-spacing: 0;
    font-size:10px;
    text-align:center;
`;

export const TableRowStyle = styled.tr`
    &:last-child {
        & > td {
            &:first-child {
                border-radius: 0 0 0 14px;
            }
    
            &:last-child {
                border-radius: 0 0 14px 0;
            }
        }
    }
`;
