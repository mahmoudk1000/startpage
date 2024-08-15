browser.runtime.onInstalled.addListener(() => {
  const startPage = browser.runtime.getURL("../index.html");
  browser.storage.sync.set({ startPage });
});

browser.tabs.onCreated.addListener(async (tab) => {
  const { startPage } = await browser.storage.sync.get("startPage");
  if (tab.url === "about:blank") {
    browser.tabs.update(tab.id, { url: startPage });
  }
});
