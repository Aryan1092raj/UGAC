import { mountNavbar } from "./navbar.js";
import { mountMainHeading } from "./main-heading.js";
import { mountFooter } from "./footer.js";
import { mountRouter } from "./router.js";
import * as home from "./pages/home.js";
import * as resources from "./pages/resources.js";
import * as divisions from "./pages/divisions.js";
import * as team from "./pages/team.js";
import * as wiki from "./pages/wiki.js";
import { mountPrism } from "./prism.js";

export function mountUI() {
  mountMainHeading();
  mountFooter();

  const bgHost = document.getElementById("prism-bg");
  if (bgHost) {
    bgHost.style.position = "absolute";
    bgHost.style.inset = "0";
    mountPrism(bgHost, {
      animationType: "rotate",
      timeScale: 0.15,
      height: 3.5,
      baseWidth: 5.5,
      scale: 3.6,
      hueShift: 0,
      colorFrequency: 1,
      noise: 0.25,
      glow: 0.9,
      transparent: true,
      suspendWhenOffscreen: false,
    });
  }

  mountRouter({
    mountNavbar,
    pages: { home, resources, divisions, team, wiki },
  });
}
