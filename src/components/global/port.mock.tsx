class MockPort implements chrome.runtime.Port
{
    public name: string;

    public constructor(name: string)
    {
        this.name = name;
    }

    public postMessage: (message: any) => void = jest.fn();
    public disconnect: () => void = jest.fn();
    public onDisconnect: chrome.runtime.PortDisconnectEvent = {
        addRules: jest.fn(),
        hasListeners: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        hasListener: jest.fn(),
        getRules: jest.fn(),
        removeRules: jest.fn()
    };
    public onMessage: chrome.runtime.PortMessageEvent = {
        addRules: jest.fn(),
        hasListeners: jest.fn(),
        addListener: jest.fn(),
        removeListener: jest.fn(),
        hasListener: jest.fn(),
        getRules: jest.fn(),
        removeRules: jest.fn()
    }
}

export default MockPort;