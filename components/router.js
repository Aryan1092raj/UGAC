function normalizeRouteKey(rawKey, pages) {
  if (!rawKey) return "home";
  if (pages[rawKey]) return rawKey;

  return "home";
}

export function parseRoute() {
  const raw = (location.hash || "").replace(/^#/, "").trim().toLowerCase();
  if (!raw) return { key: "home", subpath: "" };

  const [key, ...rest] = raw.split("/");
  return { key: key || "home", subpath: rest.join("/") };
}

export function mountRouter({ mountNavbar, pages, containerId = "app" }) {
  const container = document.getElementById(containerId);
  if (!container) return;

  let cleanup = null;
  let renderSeq = 0;

  const render = () => {
    renderSeq += 1;
    const seq = renderSeq;
    const { key, subpath } = parseRoute();
    const routeKey = normalizeRouteKey(key, pages);
    const page = pages[routeKey] || pages.home;

    mountNavbar({ activeKey: routeKey });
    container.replaceChildren();

    const node = page.render({ routeKey, subpath });
    if (node) container.appendChild(node);

    if (typeof cleanup === "function") cleanup();
    cleanup = null;

    if (typeof page.mount === "function") {
      const res = page.mount({ root: container, routeKey, subpath });
      if (typeof res === "function") {
        cleanup = res;
      } else if (res && typeof res.then === "function") {
        res.then((fn) => {
          if (seq !== renderSeq) {
            if (typeof fn === "function") fn();
            return;
          }
          if (typeof fn === "function") cleanup = fn;
        });
      }
    }

    const title = page.title || (routeKey.charAt(0).toUpperCase() + routeKey.slice(1));
    document.title = `${title} | Undergraduate Academic Council`;
  };

  render();
  window.addEventListener("hashchange", render);

  return () => {
    window.removeEventListener("hashchange", render);
    if (typeof cleanup === "function") cleanup();
  };
}
