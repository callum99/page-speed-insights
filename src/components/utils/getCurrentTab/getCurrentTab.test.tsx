import {getCurrentTab} from "./getCurrentTab";

describe('Browser Tab Method',() => {
    it('Current tab is returned', async () => {
        const result = await getCurrentTab();

        expect(chrome.tabs.query).toHaveBeenCalledWith({active: true, currentWindow: true});
        expect(result.id).toBe(1);
    });
});