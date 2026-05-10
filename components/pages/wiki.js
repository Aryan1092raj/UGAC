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

export const title = "Wiki";

export function render() {
  const root = el("section", "space-y-6");

  const header = el("header", "py-6 text-center");
  appendChildren(header, [
    el("h2", "text-4xl font-bold", "Wiki"),
    el("p", "text-slate-300 mt-3", "Search and browse UGAC notes and FAQs."),
  ]);

  const container = el("div", "max-w-2xl mx-auto");
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "Search wiki...";
  input.className = "w-full p-3 border border-slate-600 rounded-lg text-black";
  input.setAttribute("aria-label", "Search wiki");

  const panel = el("div", "mt-6 border border-slate-700/40 rounded-xl p-6 bg-white/5");
  const list = el("ul", "list-disc pl-6 text-slate-200 mt-3 space-y-2");
  [
    "How to raise academic issue",
    "How UG Senate works",
    "Common policies: add/drop, grading, attendance",
  ].forEach((itemText) => list.appendChild(el("li", "", itemText)));

  appendChildren(panel, [el("h3", "font-semibold text-xl", "Starter Articles"), list]);
  appendChildren(container, [input, panel]);
  appendChildren(root, [header, container]);

  return root;
}
