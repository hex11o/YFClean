function waitForElement(selector, callback) {
    const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) {
            callback();
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// 删除 .publicbox 元素
waitForElement('.publicbox', () => {
    const el = document.querySelector(".learn-more");
    const el2 = document.querySelector(".control-list.pull-right");
    el?.remove();
    el2?.remove();
    // 点击 #play-pause-button 元素
    const playButton = document.querySelector('#play-pause-button');
    if (playButton) {
        playButton.click();
    }
});
