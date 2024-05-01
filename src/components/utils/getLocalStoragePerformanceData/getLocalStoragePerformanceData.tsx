/*
 * Fetch storage data for a single domain
 * @param {string} domain
 */
export const getLocalStoragePerformanceData = async (domain: string) => {
    const { [domain]: data } = await chrome.storage.local.get(domain);
    return data;
};
