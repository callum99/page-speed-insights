import {organiseStorageDataForSend} from "./organiseStorageDataForSend";
import {historicPagesType} from "../../global/global.types";
import MockPort from "../../global/port.mock";

describe('Oragnise data for send method',  () => {
   it('Organises the data to send last storage item and all historic data as separate objects', async () => {
       const data:historicPagesType = {
           '2024-04-25T11:07:38.872Z': {
               performance: {
                   TTFB: '0.1',
                   FullLoadTime: '0.2',
                   DOMContentLoadedTime: '0.4'
               }
           },
           '2024-04-25T12:08:38.872Z': {
               performance: {
                   TTFB: '0.5',
                   FullLoadTime: '0.6',
                   DOMContentLoadedTime: '0.7'
               }
           },
           '2024-04-25T13:09:38.872Z': {
               performance: {
                   TTFB: '0.8',
                   FullLoadTime: '0.9',
                   DOMContentLoadedTime: '0.0'
               }
           }
       };
       const firstItem = Object.keys(data).length - 1;
       const currentPage = data[Object.keys(data)[firstItem]];

       const port = new MockPort('mock');

       organiseStorageDataForSend(data, port);

       expect(port.postMessage).toHaveBeenCalledWith({message: 'SentPerformanceData', currentData: currentPage, historicData: data});
   });
});