import React from 'react';
import {TableContainer, TableHeaderStyle, TableCellStyle, TableRowStyle} from "./table.styled";
import {TableProps} from "./table.types";

const Table = ({ data }:TableProps ) => {
    const dataLength = Object.keys(data).length;
    const fifthToLastItem = dataLength - 5;
    const lessThanFiveItems = 0;
    let historicData:TableProps['data'] = {};
    let rowReturnMax;

    if (dataLength < 5) {
        rowReturnMax = lessThanFiveItems;
    } else {
        rowReturnMax = fifthToLastItem;
    }

    for(let i = rowReturnMax; i < dataLength; i++) {
        Object.assign(historicData, {[Object.keys(data)[i]]: data[Object.keys(data)[i]]});
    }

    return (
        <TableContainer role="table" aria-label="Historic Performance">
            <TableHeaderStyle role="rowgroup">
                <tr role="row">
                    <td role="columnheader">Date</td>
                    <td role="columnheader">DOMContentLoadTime</td>
                    <td role="columnheader">FullLoadTime</td>
                    <td role="columnheader">TTFB</td>
                </tr>
            </TableHeaderStyle>
            <tbody role="rowgroup">
                {historicData && Object.entries(historicData).map((page) => (
                        <TableRowStyle role="row" key={'row' + page}>
                            <TableCellStyle role="cell">{page[0]}</TableCellStyle>
                            <TableCellStyle role="cell">{page[1].performance.DOMContentLoadedTime}</TableCellStyle>
                            <TableCellStyle role="cell">{page[1].performance.FullLoadTime}</TableCellStyle>
                            <TableCellStyle role="cell">{page[1].performance.TTFB}</TableCellStyle>
                        </TableRowStyle>
                    )
                )}
            </tbody>
        </TableContainer>
    );
}

export default Table;