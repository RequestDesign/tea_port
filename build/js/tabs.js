const setHash = (hash) => {
    hash = hash ? `#${hash}` : window.location.href.split('#')[0];
    history.pushState('', '', hash);
};

const getHash = () => {
    if (location.hash) {
        return location.hash.replace('#', '');
    }
};

const tabs = () => {
    const tabs = document.querySelectorAll('[data-tabs]');
    let tabsActiveHash = [];

    const init = (tabsBlock) => {
        let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-titles]>*');
        let tabsContent = tabsBlock.querySelectorAll('[data-tabs-body]>*');
        const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
        const tabsActiveHashBlock = tabsActiveHash[0] == tabsBlockIndex;

        if (tabsActiveHashBlock) {
            const tabsActiveTitle = tabsBlock.querySelector('[data-tabs-titles]>._active');
            tabsActiveTitle ? tabsActiveTitle.classList.remove('_active') : null;
        }
        if (tabsContent.length) {
            tabsContent = Array.from(tabsContent).filter((item) => item.closest('[data-tabs]') === tabsBlock);
            tabsTitles = Array.from(tabsTitles).filter((item) => item.closest('[data-tabs]') === tabsBlock);
            tabsContent.forEach((tabsContentItem, index) => {
                tabsTitles[index].setAttribute('data-tabs-title', '');
                tabsContentItem.setAttribute('data-tabs-item', '');

                if (tabsActiveHashBlock && index == tabsActiveHash[1]) {
                    tabsTitles[index].classList.add('_active');
                }
                tabsContentItem.hidden = !tabsTitles[index].classList.contains('_active');
            });
        }
    };
    const setStatus = (tabsBlock) => {
        let tabsTitles = tabsBlock.querySelectorAll('[data-tabs-title]');
        let tabsContent = tabsBlock.querySelectorAll('[data-tabs-item]');
        const tabsBlockIndex = tabsBlock.dataset.tabsIndex;
        if (tabsContent.length) {
            const isHash = tabsBlock.hasAttribute('data-tabs-hash');
            tabsContent = Array.from(tabsContent).filter((item) => item.closest('[data-tabs]') === tabsBlock);
            tabsTitles = Array.from(tabsTitles).filter((item) => item.closest('[data-tabs]') === tabsBlock);
            tabsContent.forEach((tabsContentItem, index) => {
                if (tabsTitles[index].classList.contains('_active')) {
                    tabsContentItem.hidden = false;
                    if (isHash && !tabsContentItem.closest('.modal')) {
                        setHash(`tab-${tabsBlockIndex}-${index}`);
                    }
                } else {
                    tabsContentItem.hidden = true;
                }
            });
        }
    };
    const setActions = (e) => {
        const target = e.target;
        if (
            (target.closest('[data-tabs-title]') && !document.querySelector('[data-tab-btn]')) ||
            (target.closest('[data-tab-btn]') && document.querySelector('[data-tab-btn]'))
        ) {
            const tabTitle = target.closest('[data-tabs-title]');
            const tabsBlock = tabTitle.closest('[data-tabs]');
            if (!tabTitle.classList.contains('_active') && !tabsBlock.querySelector('._slide')) {
                let tabActiveTitle = tabsBlock.querySelectorAll('[data-tabs-title]._active');
                tabActiveTitle.length
                    ? (tabActiveTitle = Array.from(tabActiveTitle).filter(
                          (item) => item.closest('[data-tabs]') === tabsBlock
                      ))
                    : null;
                tabActiveTitle.length ? tabActiveTitle[0].classList.remove('_active') : null;
                tabTitle.classList.add('_active');
                setStatus(tabsBlock);
            }
            e.preventDefault();
        }
    };

    if (tabs.length) {
        const hash = getHash();
        if (hash && hash.startsWith('tab-')) {
            tabsActiveHash = hash.replace('tab-', '').split('-');
        }
        tabs.forEach((tabsBlock, index) => {
            tabsBlock.classList.add('_tab-init');
            tabsBlock.setAttribute('data-tabs-index', index);
            tabsBlock.addEventListener('click', setActions);
            init(tabsBlock);
        });
    }
};

tabs();
