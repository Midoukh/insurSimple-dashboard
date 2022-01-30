import {
  faListUl,
  faFileInvoiceDollar,
  fasRegEnvelope,
  fasRegFileAlt,
} from "@fortawesome/free-solid-svg-icons";

const insureLogo = require("../../public/assets/insur.png");
const nortonLogo = require("../../public/assets/norton.png");
const tabsButtons = [
  { label: "Dashboard", icon: faListUl, active: true },
  { label: "Quotes", icon: faFileInvoiceDollar, active: false },
  { label: "Messages", icon: fasRegEnvelope, active: false },
  { label: "Files", icon: fasRegFileAlt, active: false },
];

export { insureLogo, nortonLogo, tabsButtons };
