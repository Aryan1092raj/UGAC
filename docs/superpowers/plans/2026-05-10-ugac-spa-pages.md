# UGAC SPA Pages Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert `index.html` into SPA shell and move each “page” into `components/pages/*.js` DOM-builder modules, routed by hash without reload.

**Architecture:** `index.html` provides layout shell and a single `#app` mount point. `components/router.js` reads `location.hash`, picks a page module, renders DOM into `#app`, updates navbar active state and `document.title`.

**Tech Stack:** Vanilla JavaScript modules, Tailwind CSS (built to `dist/output.css`).

---

## File/Module Map (locked)

- Create: `components/router.js` — hash parsing, route table, render loop, title update.
- Create: `components/pages/home.js` — Home DOM builder (includes Quick Links).
- Create: `components/pages/resources.js` — Resources DOM builder.
- Create: `components/pages/divisions.js` — Divisions DOM builder.
- Create: `components/pages/team.js` — Team DOM builder.
- Create: `components/pages/wiki.js` — Wiki DOM builder.
- Modify: `index.html` — remove inline section markup, add `#app`.
- Modify: `components/ui.js` — replace inline `[data-route]` toggling with router mount call.
- Modify: `components/navbar.js` — keep hash links, ensure activeKey uses `home/resources/divisions/team/wiki`.

---

### Task 1: Add SPA mount point in `index.html`

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace page content with `#app` container**

Edit body layout to keep:
`#navbar`, `#main-heading`, `#decorative-icons`, `#app`, `#footer`.

Expected body skeleton (exact ids):

```html
<div id="navbar"></div>
<div id="main-heading"></div>
<div id="decorative-icons"></div>
<main id="app" class="px-6 pb-10"></main>
<div id="footer"></div>
```

- [ ] **Step 2: Ensure only one module entrypoint**

Keep:

```html
<script type="module">
  import { mountUI } from './components/ui.js';
  mountUI();
</script>
```

- [ ] **Step 3: Build CSS once**

Run: `cmd.exe /c npx tailwindcss -i .\\src\\input.css -o .\\dist\\output.css`

Expected: `Done` (ignore Browserslist warning).

---

### Task 2: Create router core (`components/router.js`)

**Files:**
- Create: `components/router.js`

- [ ] **Step 1: Implement hash parsing**

```js
export function parseRoute() {
  const raw = (location.hash || "").replace(/^#/, "").trim().toLowerCase();
  if (!raw) return { key: "home", subpath: "" };
  const [key, ...rest] = raw.split("/");
  return { key: key || "home", subpath: rest.join("/") };
}
```

- [ ] **Step 2: Implement `mountRouter`**

Router responsibilities:
1) render current route into `#app`
2) call `mountNavbar({ activeKey })`
3) set `document.title`
4) listen to `hashchange`

```js
export function mountRouter({ mountNavbar, pages, containerId = "app" }) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const render = async () => {
    const { key, subpath } = parseRoute();
    const page = pages[key] || pages.home;
    mountNavbar({ activeKey: key });

    container.replaceChildren();
    const node = page.render({ routeKey: key, subpath });
    if (node) container.appendChild(node);

    const title = page.title || (key.charAt(0).toUpperCase() + key.slice(1));
    document.title = `${title} | Undergraduate Academic Council`;
  };

  render();
  window.addEventListener("hashchange", render);
}
```

---

### Task 3: Create pages folder + Home page (`components/pages/home.js`)

**Files:**
- Create: `components/pages/home.js`

- [ ] **Step 1: Implement DOM builder helpers**

Home renders:
- UGAC overview block
- IIT Mandi at glance block
- Quick Links block (buttons to `#resources`, `#wiki`, `#team`, `#divisions`)

Skeleton (exact exports):

```js
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function linkButton(href, label, cls) {
  const a = el("a", cls, label);
  a.href = href;
  return a;
}

export const title = "Home";

export function render() {
  const root = el("section", "space-y-10");
  // build blocks and append
  return root;
}
```

---

### Task 4: Create Resources page (`components/pages/resources.js`)

**Files:**
- Create: `components/pages/resources.js`

- [ ] **Step 1: Export `title` and `render()`**

`render()` returns section with header + grid cards (tailwind classes).

```js
export const title = "Resources";
export function render() {
  const root = document.createElement("section");
  root.className = "space-y-6";
  return root;
}
```

---

### Task 5: Create Divisions page (`components/pages/divisions.js`)

**Files:**
- Create: `components/pages/divisions.js`

- [ ] **Step 1: Export `title` and `render()`**

Grid of 3 division cards, tailwind classes.

---

### Task 6: Create Team page (`components/pages/team.js`)

**Files:**
- Create: `components/pages/team.js`

- [ ] **Step 1: Export `title` and `render()`**

Includes members grid + contact form (prevent submit).

---

### Task 7: Create Wiki page (`components/pages/wiki.js`)

**Files:**
- Create: `components/pages/wiki.js`

- [ ] **Step 1: Export `title` and `render()`**

Search input + starter articles list.

---

### Task 8: Wire router in `components/ui.js`

**Files:**
- Modify: `components/ui.js`

- [ ] **Step 1: Remove old `[data-route]` toggling**

Delete `getRouteKey()`, `applyRoute()`, and `hashchange` handler logic.

- [ ] **Step 2: Mount UI + router**

Keep component mounts:
`mountMainHeading()`, `mountDecorativeIcons()`, `mountFooter()`

Add router wiring:

```js
import { mountRouter } from "./router.js";
import * as home from "./pages/home.js";
import * as resources from "./pages/resources.js";
import * as divisions from "./pages/divisions.js";
import * as team from "./pages/team.js";
import * as wiki from "./pages/wiki.js";

mountRouter({
  mountNavbar,
  pages: { home, resources, divisions, team, wiki },
});
```

---

### Task 9: Align navbar keys (`components/navbar.js`)

**Files:**
- Modify: `components/navbar.js`

- [ ] **Step 1: Ensure nav item keys match router keys**

Keys must be: `home`, `resources`, `divisions`, `team`, `wiki`.

- [ ] **Step 2: Active key derived from hash**

`getActiveKey()` should return those same keys (default `home`).

---

### Task 10: Smoke verification

**Files:**
- Test: manual

- [ ] **Step 1: Build CSS**

Run: `cmd.exe /c npx tailwindcss -i .\\src\\input.css -o .\\dist\\output.css`

- [ ] **Step 2: Open in browser**

Open `index.html` and verify:
- clicking navbar changes visible page content without reload
- URL hash updates (ex: `#wiki`)
- active link highlight updates
- `document.title` changes per page

