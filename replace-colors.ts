import fs from "fs";
let content = fs.readFileSync("src/App.tsx", "utf-8");

content = content.replace(/pink-/g, "emerald-");
content = content.replace(/rose-/g, "teal-");
content = content.replace(/purple-/g, "emerald-");
content = content.replace(/fuchsia-/g, "teal-");
content = content.replace(/rgba\(255, 105, 180,/g, "rgba(52, 211, 153,");

// but wait, remember there are some red colors intentionally added, e.g., text-red-900, red-500, etc.
// red ones can stay as red since they are for anger or locked state.

// one fill="#fbc2eb"
content = content.replace(/fill="#fbc2eb"/g, 'fill="#a7f3d0"');

fs.writeFileSync("src/App.tsx", content);
console.log("Colors updated");
