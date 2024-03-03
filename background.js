chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.command === "start") {
    chrome.alarms.create("openGoogle", { periodInMinutes: request.timeInterval });
    sendResponse({ result: "Started with URL: " + request.url });

    // Store URL for use when alarm triggers
    chrome.storage.local.set({ url: request.url });
  } else if (request.command === "stop") {
    chrome.alarms.clear("openGoogle");
    sendResponse({ result: "Stopped" });
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "openGoogle") {
    chrome.storage.local.get('url', function(data) {
      chrome.tabs.create({ url: data.url || "http://google.com" });
    });
  }
});
