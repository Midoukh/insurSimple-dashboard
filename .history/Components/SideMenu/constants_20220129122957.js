import {
  faListUl,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import { faRegEnvelope, faRegFileAlt } from "@fortawesome/fontawesome-svg-core";
const insureLogo = require("../../public/assets/insur.png");
const nortonLogo = require("../../public/assets/norton.png");
const tabsButtons = [
  { label: "Dashboard", icon: faListUl, active: true },
  { label: "Quotes", icon: faFileInvoiceDollar, active: false },
  { label: "Messages", icon: faRegEnvelope, active: false },
  { label: "Files", icon: faRegFileAlt, active: false },
];

export { insureLogo, nortonLogo, tabsButtons };
