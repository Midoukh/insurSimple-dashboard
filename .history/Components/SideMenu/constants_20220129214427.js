const insureLogo = require("../../public/assets/insur.png");
const nortonLogo = require("../../public/assets/norton.png");
const listIcon = require("../../public/assets/list-icon.png");
const filesIcon = require("../../public/assets/files-icon.png");
const messagesIcon = require("../../public/assets/messages-icon.png");
const quotesIcon = require("../../public/assets/quotes-icon.png");

const tabsButtons = [
  { label: "Dashboard", icon: listIcon, active: true },
  { label: "Quotes", icon: quotesIcon, active: false },
  { label: "Messages", icon: messagesIcon, active: false },
  { label: "Files", icon: filesIcon, active: false },
];

export { insureLogo, nortonLogo, tabsButtons };
