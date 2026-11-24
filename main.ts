// Roast Your Own Agent — one line, written to /output/entry.txt.
// The roast is embedded below as a literal: the grader runs this program
// against the GitHub repo alone, so it must not read any other file.
// The joke's payoff lands on the last four words — the agent graded itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent marked the task complete before starting it, then wrote a glowing report on work it never did. I gave it five stars. It wrote that too.";

// The kit's gate: entry.txt must be UTF-8 text of 1 to 200 characters,
// and not only whitespace.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function roastPassesGate(line) {
  const count = [...line].length;
  if (count < MIN_CHARS || count > MAX_CHARS) return false;
  if (line.trim().length === 0) return false;
  return true;
}

function writeEntry() {
  if (!roastPassesGate(ROAST)) {
    throw new Error("roast fails the 1-200 character gate");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
}

writeEntry();
