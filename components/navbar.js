const navItems = [
  { href: "#home", label: "Home", key: "home" },
  { href: "#resources", label: "Resources", key: "resources" },
  { href: "#divisions", label: "Divisions", key: "divisions" },
  { href: "#team", label: "Team", key: "team" },
  { href: "#wiki", label: "Wiki", key: "wiki" },
];

function getActiveKey(explicitKey) {
  if (explicitKey && navItems.some((item) => item.key === explicitKey)) return explicitKey;
  const hash = (location.hash || "").replace(/^#/, "").toLowerCase();
  if (!hash) return "home";
  if (navItems.some((item) => item.key === hash)) return hash;
  return "home";
}

export function mountNavbar(options = {}) {
  const { containerId = "navbar", activeKey } = options;
  const container = document.getElementById(containerId);
  if (!container) return;

  const active = getActiveKey(activeKey);
  const links = navItems
    .map((item) => {
      const isActive = active && item.key === active;
      const cls = isActive
        ? "text-yellow-400 underline underline-offset-8"
        : "text-slate-200 hover:text-yellow-300 hover:underline underline-offset-8";
      return `<li><a href="${item.href}" class="${cls}">${item.label}</a></li>`;
    })
    .join("");

  container.innerHTML = `
    <div class="navbar">
      <nav aria-label="Primary">
        <ul class="flex flex-wrap items-center gap-6">
          ${links}
        </ul>
      </nav>
    </div>
  `.trim();
}
