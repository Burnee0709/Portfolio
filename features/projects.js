import { projects } from "../data-structures/projects-data.js";
import {
  getProjectStructure,
  getOptionStructure,
} from "../utils/structures.js";
import { getScreenSize } from "../utils/screen-size.js";
import { scrollReveal } from "../utils/scroll-reveal.js";

const projectsContainer = document.querySelector(".projects-container");
const select = document.querySelector("#projects select");
const loadMoreProjectsButton = document.querySelector("#projects button");

let initialProjectsCount = getInitialProjectsCount();
let projectsToLoadCount = getprojectsToLoadCount();
let displayedProjects = projects.slice(0, initialProjectsCount);
let filteredProjects = projects;
let currentScreenSize = getScreenSize();

export const setupProjects = () => {
  displayProjects();
  createFilterOptions();
  select.addEventListener("change", filterProjects);
  window.addEventListener("resize", resize);
  loadMoreProjectsButton.addEventListener("click", loadMoreProjects);
  animations();
};

const createFilterOptions = () => {
  const uniqueCategories = new Set(projects.map((project) => project.category));
  const categories = ["all", ...uniqueCategories];

  categories.map((category) => {
    const option = getOptionStructure(category);
    select.appendChild(option);
  });
};

const filterProjects = (e) => {
  const selectedCategory = e.target.value;

  if (selectedCategory === "all") {
    filteredProjects = projects;
  } else {
    filteredProjects = projects.filter(
      (project) => project.category === selectedCategory
    );
  }

  displayedProjects = filteredProjects.slice(0, initialProjectsCount);
  displayProjects();
};

const displayProjects = () => {
  projectsContainer.innerHTML = "";

  displayedProjects.map((project) => {
    const projectStructure = getProjectStructure(project);
    projectsContainer.appendChild(projectStructure);
  });

  const hasMoreProjects = displayedProjects.length < filteredProjects.length;
  loadMoreProjectsButton.classList.toggle("active", hasMoreProjects);
};
function getInitialProjectsCount() {
  const screenSize = getScreenSize();
  if (screenSize === "desktop") {
    return 6;
  }
  if (screenSize === "tablet") {
    return 4;
  }
  return 3;
}
function getprojectsToLoadCount() {
  const screenSize = getScreenSize();
  if (screenSize === "desktop") {
    return 2;
  }
  if (screenSize === "tablet") {
    return 2;
  }
  return 1;
}
const resize = () => {
  const newScreenSize = getScreenSize();
  if (newScreenSize === currentScreenSize) return;
  currentScreenSize = newScreenSize;
  initialProjectsCount = getInitialProjectsCount;
  projectsToLoadCount = getprojectsToLoadCount();

  displayedProjects = projects.slice(0, initialProjectsCount);
  displayProjects();
};
const loadMoreProjects = () => {
  const currentProjectCount = displayedProjects.length;
  const loadedProjects = filteredProjects.slice(
    currentProjectCount,
    currentProjectCount + projectsToLoadCount
  );
  displayedProjects.push(...loadedProjects);
  displayProjects();
};
const animations = () => {
  scrollReveal.reveal("#projects .header", {
    origin: "top",
    delay: 300,
  });

  scrollReveal.reveal(".projects-container", {
    origin: "bottom",
    delay: 400,
  });
};
