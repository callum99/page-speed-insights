# Page Speed Insights Chrome Extension

## Overview
The Page Speed Insights extension is designed to help users measure and analyse the performance of web pages. It provides real-time page speed metrics such as Time to First Byte (TTFB), DOMContentLoaded time, and full page load time. Users can view historical data to track performance over time. This project serves as an introductory task to familiarise you with Chrome extension development, including working with various APIs and components like content scripts, background scripts, and the Chrome Extension Storage API.

## Features
- **Real-time Performance Metrics**: Measure performance metrics like TTFB, DOMContentLoaded, and load event timings.
- **Historical Data Tracking**: Track and store performance metrics over time for comparison.
- **User Interface**: Easy-to-use popup window for initiating diagnostics and viewing results.

## Development Components
1. **manifest.json**
  - Define permissions, background scripts, content scripts, and other necessary metadata.
2. **Background Script / Service Worker**
  - Manage long-running processes like data storage.
3. **Popup Window**
  - Provide an interface to view performance stats for the website active in the current tab as well as how it compares with the average performance of all sites visited.
4. **Content Scripts**
  - Inject scripts into web pages to gather performance data.
5. **Extension Storage API**
  - Store and retrieve historical performance data.
6. **Extension Runtime API**
  - Handle message passing between the popup, content scripts, and background script.

## Tasks
### Setup the Project
1. Initialise a new Chrome extension project.
2. Set up the `manifest.json` with necessary permissions e.g. `storage`

### Implement Features
#### Popup Window
- Create a popup HTML page and CSS for styling.

#### Content Scripts
- Set up a content script that is injected into all pages to gather performance data.
- The script should measure TTFB, DOMContentLoaded, and load event times using the Performance API.
- Ensure scripts send data back to the background script for storage.

#### Background Script / Service Worker
- Set up a background script that listens for messages from content scripts and stores the data appropriately.
- Implement functionality to return stored data to the popup for display.

#### Extension Storage API
- Implement functions to save and retrieve performance data from the extension's storage.

#### Extension Runtime API
- Set up message passing between the popup, content scripts, and background script to synchronise data and control flow.

### Testing and Debugging
- Test each component individually and then as a whole to ensure they work seamlessly together.
- Debug any issues that arise during development or testing.

## Additional Resources
- [Chrome Extensions Documentation](https://developer.chrome.com/docs/extensions/)
- [Performance Timing API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming)

This project is designed to be a comprehensive introduction to Chrome extension development, encompassing a wide range of techniques and best practices. Good luck!
