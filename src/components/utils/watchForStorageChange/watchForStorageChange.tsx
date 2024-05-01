import StorageChange = chrome.storage.StorageChange;

/*
 * Listen for any changes made to storage
 * @param {string} domain
 * @param {(change: any) => void} callback
 */
export const watchForStorageChange = (domain: string, callback: (change: any) => void) => {
    const listener = (changes: { [key: string]: StorageChange } ) => {
        const { [domain]: change } = changes;

        if (!change) return;
        callback(change.newValue);
    }

    chrome.storage.onChanged.addListener(listener);

    return () => {
        chrome.storage.onChanged.removeListener(listener);
    };
};
