import { socialLinks } from "../data-structures/links-data.js";
import { sectionsData } from "../data-structures/sections-data.js";
import {
  getNavlinkStructure,
  getSocialLinkStructure,
} from "../utils/structures.js";

const footerLinks = document.querySelector(" footer .links");
const socialsContainer = document.querySelector("footer .socials");

export const setupFooter = () => {
  sectionsData.map((section) => {
    const navLink = getNavlinkStructure(section);
    footerLinks.appendChild(navLink);
  });
  socialLinks.forEach((link) => {
    const socialLink = getSocialLinkStructure(link);
    socialsContainer.appendChild(socialLink);
  });
};
