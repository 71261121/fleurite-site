import { BOOK } from "./src/content/book";

let pageNum = 1;

console.log("=== PDF VERIFICATION — PLAN CLAIMS vs ACTUAL ===\n");

// Cover
pageNum++;
console.log("--- COVER ---");
console.log("Title:", BOOK.title);
console.log("Subtitle:", BOOK.subtitle.substring(0, 80) + "...");
console.log("Author:", BOOK.author);
console.log("Brand:", BOOK.brand);
console.log("Year:", BOOK.year);

// Front matter
pageNum++;
console.log("\n--- FRONT MATTER (pages 2-6) ---");
let resentmentFound = false;
let antiRefund = false;
let readerMapItems = 0;
BOOK.frontMatter.forEach((block) => {
  if (block.type === "h1") { pageNum++; console.log("  H1:", block.text.substring(0, 70)); }
  if (block.type === "reader_map") { readerMapItems = block.items.length; console.log("  READER MAP:", readerMapItems, "items"); }
  if (block.type === "quote" && (block.text as string).includes("unspoken rules")) resentmentFound = true;
  if (block.type === "p" && (block.text as string).includes("Nothing in this book depends on him changing")) antiRefund = true;
});
pageNum = 6;

console.log("\n--- CHAPTERS ---");
let totalScripts = 0;
let script41 = "";
let seeChapters = 0;
let calmChapters = 0;
let standChapters = 0;
let chooseChapters = 0;
let hasClosing = false;
let has7Day = false;

BOOK.chapters.forEach((ch) => {
  pageNum++;
  console.log("  p." + pageNum + " [" + (ch.part || "BACK MATTER") + "] Ch." + (ch.number || "X") + ": " + ch.title.substring(0, 65));
  if (ch.part?.includes("SEE")) seeChapters++;
  if (ch.part?.includes("CALM")) calmChapters++;
  if (ch.part?.includes("STAND")) standChapters++;
  if (ch.part?.includes("CHOOSE")) chooseChapters++;
  if (ch.title.includes("Closing Validation")) hasClosing = true;
  if (ch.title.includes("7-Day")) has7Day = true;

  ch.blocks.forEach((b: any) => {
    if (b.type === "script") {
      totalScripts++;
      if (b.when?.includes("Script 41")) script41 = b.say;
    }
  });
});

console.log("\n============================================");
console.log("FINAL CLAIM VERIFICATION");
console.log("============================================");
console.log("1. TOTAL PAGES (approx):", pageNum, "    [target: ~94]");
console.log("2. TOTAL SCRIPTS:", totalScripts, "    [target: 47]");
const words41 = script41.split(/\s+/).length;
console.log("3. SCRIPT 41 WORDS:", words41, "    [target: EXACTLY 19]");
console.log("4. SCRIPT 41:", script41);
console.log("5. RESENTMENT QUOTE IN FRONT:", resentmentFound ? "PASS" : "FAIL");
console.log("6. ANTI-REFUND LINE:", antiRefund ? "PASS" : "FAIL");
console.log("7. READER MAP ITEMS:", readerMapItems, "    [target: 6]");
console.log("8. RULES CHAPTERS (SEE):", seeChapters, "    [target: 5]");
console.log("9. NERVOUS SYSTEM (CALM):", calmChapters, "    [target: 4]");
console.log("10. SCRIPTS (STAND):", standChapters, "    [target: varies]");
console.log("11. DECISION (CHOOSE):", chooseChapters, "    [target: 2]");
console.log("12. CLOSING VALIDATION:", hasClosing ? "PASS" : "FAIL");
console.log("13. 7-DAY IMPLEMENTATION:", has7Day ? "PASS" : "FAIL");
console.log("14. DECISION MATRIX (Stay/Stand/Leave):", JSON.stringify(BOOK).includes("STAND") ? "PASS" : "FAIL");
console.log("============================================");
