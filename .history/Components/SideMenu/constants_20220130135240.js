const insureLogo = require("../../public/assets/insur.png");
const nortonLogo = require("../../public/assets/norton.png");
const listIcon = require("../../public/assets/list-icon.png");
const filesIcon = require("../../public/assets/files-icon.png");
const messagesIcon = require("../../public/assets/messages-icon.png");
const quotesIcon = require("../../public/assets/quotes-icon.png");

const tabsButtons = [
  { label: "Dashboard", icon: listIcon, active: true, path: "progress" },
  { label: "Quotes", icon: quotesIcon, active: false, path: "quotes" },
  { label: "Messages", icon: messagesIcon, active: false, path: "messages" },
  { label: "Files", icon: filesIcon, active: false, path: "files" },
];

export { insureLogo, nortonLogo, tabsButtons };
