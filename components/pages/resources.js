function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function appendChildren(parent, children) {
  children.forEach((child) => parent.appendChild(child));
  return parent;
}

function createResourceCard(titleText, description, href, ariaLabel) {
  const card = el("li", "border border-slate-700/40 rounded-xl p-5 bg-white/5");
  const link = el("a", "text-yellow-300 hover:underline mt-3 inline-block", "Open");
  link.href = href;
  link.setAttribute("aria-label", ariaLabel);

  appendChildren(card, [
    el("h3", "font-semibold text-xl", titleText),
    el("p", "text-slate-300 mt-1", description),
    link,
  ]);

  return card;
}

export const title = "Resources";

export function render() {
  const root = el("section", "space-y-6");
  const header = el("header", "py-6");
  appendChildren(header, [
    el("h2", "text-3xl font-bold", "Resources"),
    el("p", "text-slate-300 mt-2", "Useful academic links and references."),
  ]);

  const list = el("ul", "grid md:grid-cols-2 gap-4");
  appendChildren(list, [
    createResourceCard("Resource 1", "Description placeholder.", "#resources", "Open resource 1"),
    createResourceCard("Resource 2", "Description placeholder.", "#resources", "Open resource 2"),
    createResourceCard("Resource 3", "Description placeholder.", "#resources", "Open resource 3"),
  ]);

  appendChildren(root, [header, list]);
  return root;
}
