import {
  FaListUl,
  FaFileInvoiceDollar,
  FaRegEnvelope,
  FaRegFileAlt,
} from "react-icons/fa";

const insureLogo = require("../../public/assets/insur.png");
const nortonLogo = require("../../public/assets/norton.png");
const tabsButtons = [
  { label: "Dashboard", icon: FaListUl, active: true },
  { label: "Quotes", icon: FaFileInvoiceDollar, active: false },
  { label: "Messages", icon: FaRegEnvelope, active: false },
  { label: "Files", icon: FaRegFileAlt, active: false },
];

export { insureLogo, nortonLogo, tabsButtons };
