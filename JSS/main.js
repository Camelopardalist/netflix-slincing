const TabItems = document.querySelectorAll('.tab-item');
const TabContentItems = document.querySelectorAll('.tab-content-item');

// select tab content item 
function selectItem(e) {
    removeBorder();
    removeShow();
    // Ad border to current tab
    this.classList.add('tab-border');
    // Grab Content item from DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItem.classList.add('show');
}

function removeBorder() {
    TabItems.forEach(item => {
        item.classList.remove('tab-border');
    });
}

function removeShow() {
    TabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}

//listen for tab click
TabItems.forEach(item => {
    item.addEventListener('click', selectItem);
});