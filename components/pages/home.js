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

function bulletList(items) {
  const list = el("ul", "list-disc pl-6 text-slate-200 space-y-2");
  items.forEach((item) => list.appendChild(el("li", "", item)));
  return list;
}

function detailList(items) {
  const list = el("ul", "list-disc pl-6 text-slate-200 space-y-2");

  items.forEach(({ label, value }) => {
    const item = document.createElement("li");
    const strong = el("strong", "text-white", `${label}:`);
    item.append(strong, ` ${value}`);
    list.appendChild(item);
  });

  return list;
}

function linkButton(href, label, className) {
  const link = el("a", className, label);
  link.href = href;
  return link;
}

export const title = "Home";

export function render() {
  const root = el("section", "space-y-10");

  const hero = el("section", "rounded-2xl border border-slate-700/30 bg-black/20 backdrop-blur-sm p-6 md:p-10");
  appendChildren(hero, [
    el("h2", "text-3xl md:text-4xl font-extrabold", "UGAC"),
    el(
      "p",
      "text-slate-200 mt-3 max-w-3xl",
      "UG Academic Council (UGAC) is official student academic body at IIT Mandi for undergraduates. It supports academic policies, student issues, and coordination with institute academic system."
    ),
  ]);

  const ugacOverview = el("section", "py-6");
  appendChildren(ugacOverview, [
    el("h2", "text-3xl font-bold mb-4", "🏛️ UGAC Overview & Senate"),
    el(
      "p",
      "mb-4 text-slate-200",
      "Undergraduate Academic Council (UGAC) at IIT Mandi — student-led body working on academic policies, student support, and representation to administration, alongside UG Academic Secretary and UG Senate."
    ),
    bulletList([
      "Bridge between students and UG Senate.",
      "Student leadership via Academic Affairs Secretary + student senators.",
    ]),
  ]);

  const iitOverview = el("section", "py-6");
  appendChildren(iitOverview, [
    el("h2", "text-3xl font-bold mb-4", "🎓 IIT Mandi at a Glance"),
    detailList([
      {
        label: "Location",
        value: "Kamand Valley, along Uhl River, ~14 km from Mandi city (Himachal Pradesh).",
      },
      { label: "Established", value: "2009" },
      { label: "Programs", value: "B.Tech in CSE, EE, ME, CE, Data Science, more." },
    ]),
  ]);

  appendChildren(root, [hero, ugacOverview, iitOverview]);
  return root;
}
