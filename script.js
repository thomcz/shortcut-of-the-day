
const WINDOWS = 0;
const MAC = 1;

let actualShortcut;

function intiShortcut() {
    actualShortcut = getShortcut();
    setShortcut(WINDOWS);
}

function setMacShortcut() {
    setShortcut(MAC);
}

function setWindowsShortcut() {
    setShortcut(WINDOWS);
}

function setShortcut(os) {
    document.getElementById("action").innerHTML = actualShortcut.action;
    document.getElementById("shortcut").innerHTML = '[' + actualShortcut.shortcut[os] + ']';
    document.getElementById("description").innerHTML = actualShortcut.description;
}

function getShortcut() {
    let index = getRandomShortcutIndex();
    return shortcuts[index];
}

function getRandomShortcutIndex() {
    return Math.floor((Math.random() * (shortcuts.length)) + 0);
}
