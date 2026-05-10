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

function createDivisionCard(titleText, description) {
  const card = el("article", "border border-slate-700/40 rounded-xl p-5 bg-white/5");
  appendChildren(card, [
    el("h3", "font-semibold text-xl", titleText),
    el("p", "text-slate-300 mt-1", description),
  ]);
  return card;
}

export const title = "Divisions";

export function render() {
  const root = el("section", "space-y-6");
  const header = el("header", "py-6");
  appendChildren(header, [
    el("h2", "text-3xl font-bold", "Divisions"),
    el("p", "text-slate-300 mt-2", "UGAC divisions and responsibilities."),
  ]);

  const grid = el("div", "grid md:grid-cols-3 gap-4");
  appendChildren(grid, [
    createDivisionCard("Division 1", "Description placeholder."),
    createDivisionCard("Division 2", "Description placeholder."),
    createDivisionCard("Division 3", "Description placeholder."),
  ]);

  appendChildren(root, [header, grid]);
  return root;
}
