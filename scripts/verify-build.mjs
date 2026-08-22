import { access, readFile } from "node:fs/promises";

const expected = [
  "dist/index.html",
  "dist/services/index.html",
  "dist/work/index.html",
  "dist/process/index.html",
  "dist/about/index.html",
  "dist/contact/index.html",
  "dist/thanks/index.html",
  "dist/robots.txt",
  "dist/llms.txt",
  "dist/sitemap-index.xml",
];

await Promise.all(expected.map((path) => access(path)));

const contact = await readFile("dist/contact/index.html", "utf8");
if (!contact.includes('data-netlify="true"') || !contact.includes('name="contact"')) {
  throw new Error("Netlify contact form markup was not found in the static output.");
}

const services = await readFile("dist/services/index.html", "utf8");
if (!services.includes('"@type":"FAQPage"') || !services.includes('"@type":"Service"')) {
  throw new Error("Required Service or FAQ structured data is missing.");
}

console.log(`Verified ${expected.length} production files, Netlify Forms markup, and structured data.`);
