/*
 * Method to return current chrome tab in use
 */
export const getCurrentTab = async () => {
    const [ tab ] = await chrome.tabs.query({active: true, currentWindow: true});
    return tab;
};
