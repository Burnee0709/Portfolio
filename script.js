import { setupAboutMe } from "./features/about-me.js";
import { setupContactMe } from "./features/contact-me.js";
import { setupFooter } from "./features/footer.js";
import { setupHome } from "./features/home.js";
import { setupNavigation } from "./features/navigation.js";
import { setupProjects } from "./features/projects.js";
import { setupReferences } from "./features/references.js";

document.addEventListener("DOMContentLoaded", () => {
  setupHome();
  setupReferences();
  setupProjects();
  setupNavigation();
  setupContactMe();
  setupAboutMe();
  setupFooter();
});
