import StorageChange = chrome.storage.StorageChange;

export const watchForStorageChange = (domain: string, callback: (change: any) => void) => {
    const listener = (changes: { [key: string]: StorageChange } ) => {
        const { [domain]: change } = changes;

        if (!change) return;
        callback(change.newValue);
    }

    chrome.storage.onChanged.addListener(listener);

    return () => {
        chrome.storage.onChanged.removeListener(listener);
    }
}