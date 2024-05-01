import React, {useEffect, useState} from 'react';
import {getCurrentTab} from "./components/utils/getCurrentTab/getCurrentTab";
import Dashboard from "./components/dashboard/dashboard";

const App = ({}) => {
    const [currentPage, setCurrentPage] = useState(undefined);
    const [historicPages, setHistoricPages] = useState(undefined);
    const [hostUrl, setHostUrl] = useState<string | undefined>(undefined);

    useEffect(() => {
        getCurrentTab().then((tab) => {
            if (!tab.url) return;
            setHostUrl((new URL(tab.url)).hostname);
        })
    }, []);

    useEffect(() => {
        if (!hostUrl) return;

        const port = chrome.runtime.connect({name: 'long-lived-sending'});
        port.postMessage({message: 'SendPerformanceData', domain: hostUrl});

        port.onMessage.addListener((msg: any) => {
            if (msg.message !== 'SentPerformanceData') return;
            setCurrentPage(msg.currentData);
            setHistoricPages(msg.historicData);
        });

        return () => {
            port.disconnect();
        }
    }, [hostUrl]);

    return (
        <Dashboard currentPage={currentPage} historicPages={historicPages} title="Performance Insights" hostName={hostUrl}/>
    );
};

export default App;