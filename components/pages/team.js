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

function createMemberCard(name, role) {
  const card = el("li", "border border-slate-700/40 rounded-xl p-5 bg-white/5");
  appendChildren(card, [
    el("h3", "font-semibold text-xl", name),
    el("p", "text-slate-300 mt-1", role),
  ]);
  return card;
}

export const title = "Team";

export function render() {
  const root = el("section", "space-y-6");
  const header = el("header", "py-6");
  appendChildren(header, [
    el("h2", "text-3xl font-bold", "Team"),
    el("p", "text-slate-300 mt-2", "UGAC members and contact."),
  ]);

  const senateNote = el(
    "section",
    "border border-slate-700/40 rounded-xl p-6 bg-white/5 space-y-3"
  );
  appendChildren(senateNote, [
    el(
      "p",
      "text-slate-200",
      "UG Senate topmost decision making body of institute, with student representatives as few of its members. Important decisions concerning institute matters implemented only after approval of Senate."
    ),
    el(
      "p",
      "text-slate-200",
      "Director acts as ex-officio Chairman of Senate. Student members in Senate: Academic Affairs Secretary, General Secretary, Research Secretary."
    ),
    el(
      "p",
      "text-slate-200",
      "Academic Secretary works with small informal group for smooth communication with students. Showcase names:"
    ),
  ]);

  const tableWrap = el("div", "overflow-auto border border-slate-700/40 rounded-xl");
  const table = el("table", "min-w-full text-left text-sm");
  const thead = el("thead", "bg-white/5 text-slate-200");
  const headRow = el("tr", "");
  ["Name", "Roll Number", "Branch", "Email ID"].forEach((h) => {
    const th = el("th", "px-4 py-3 font-semibold whitespace-nowrap", h);
    headRow.appendChild(th);
  });
  thead.appendChild(headRow);

  const tbody = el("tbody", "divide-y divide-slate-700/40");
  const rows = [
    ["Vishnu", "B22144", "CSE", "b22144@students.iitmandi.ac.in"],
    ["Rishabh Shukla", "B22065", "DSE", "b22065@students.iitmandi.ac.in"],
    ["Unnat Maaheshwari", "B21072", "EE", "b21072@students.iitmandi.ac.in"],
    ["Sachin Kumar", "B21319", "MECH", "b21319@students.iitmandi.ac.in"],
    ["Aayushi Thakur", "B21028", "CIVIL", "b21028@students.iitmandi.ac.in"],
    ["Vinith Samson J", "B21269", "EP", "b21269@students.iitmandi.ac.in"],
    ["Vedant Rastogi", "B21027", "Bio", "b21027@students.iitmandi.ac.in"],
  ];
  rows.forEach(([name, roll, branch, email]) => {
    const tr = el("tr", "bg-black/20");
    [name, roll, branch, email].forEach((val, idx) => {
      const tdClass =
        idx === 3 ? "px-4 py-3 text-yellow-200 whitespace-nowrap" : "px-4 py-3 text-slate-200 whitespace-nowrap";
      const td = el("td", tdClass, val);
      tr.appendChild(td);
    });
    tbody.appendChild(tr);
  });

  table.appendChild(thead);
  table.appendChild(tbody);
  tableWrap.appendChild(table);

  const members = el("ul", "grid md:grid-cols-3 gap-4");
  appendChildren(members, [
    createMemberCard("Member 1", "Role"),
    createMemberCard("Member 2", "Role"),
    createMemberCard("Member 3", "Role"),
  ]);

  const form = el("form", "border border-slate-700/40 rounded-xl p-6 bg-white/5 max-w-2xl");
  form.addEventListener("submit", (event) => event.preventDefault());

  const label = el("label", "block font-semibold", "Contact team");
  label.htmlFor = "contact";

  const row = el("div", "mt-3 flex gap-3");
  const input = document.createElement("input");
  input.type = "text";
  input.id = "contact";
  input.name = "contact";
  input.placeholder = "Your message";
  input.className = "flex-1 p-3 rounded-lg text-black";

  const button = el(
    "button",
    "px-5 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300",
    "Send"
  );
  button.type = "submit";

  appendChildren(row, [input, button]);
  appendChildren(form, [
    label,
    row,
    el("p", "text-slate-400 text-sm mt-3", "Demo form. Wire to backend/email later."),
  ]);

  appendChildren(root, [header, senateNote, tableWrap, members, form]);
  return root;
}
