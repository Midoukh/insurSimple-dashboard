const insureLogo = require("../../public/assets/insur.png");
const nortonLogo = require("../../public/assets/norton.png");
const listIcon = require("../../public/assets/list-icon.png");
const listIconActive = require("../../public/assets/list-icon-active.png");

const filesIcon = require("../../public/assets/files-icon.png");
const filesIconActive = require("../../public/assets/files-icon-active.png");

const messagesIcon = require("../../public/assets/messages-icon.png");
const messagesIconActive = require("../../public/assets/messages-icon-active.png");

const quotesIcon = require("../../public/assets/quotes-icon.png");
const quotesIconActive = require("../../public/assets/quotes-icon-active.png");

const tabsButtons = [
  {
    label: "Dashboard",
    icon: listIcon,
    active: true,
    path: "progress",
    activeIcon: listIconActive,
  },
  {
    label: "Quotes",
    icon: quotesIcon,
    active: false,
    path: "quotes",
    activeIcon: quotesIconActive,
  },
  {
    label: "Messages",
    icon: messagesIcon,
    active: false,
    path: "messages",
    activeIcon: messagesIconActive,
  },
  { label: "Files", icon: filesIcon, active: false, path: "files" },
];

export { insureLogo, nortonLogo, tabsButtons };
