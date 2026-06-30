/* ==========================================================================
   scripts/lib/highlight.mjs — Build-time syntax highlighter (ESM port).

   Same minimal tokenizer used previously at runtime, but here it runs in Node
   during the build so the generated HTML ships ALREADY highlighted. That means
   the published site needs no highlighter JS at all — the colored <span>s are
   baked into the static files.
   ========================================================================== */

const KEYWORDS = [
  // JS / TS
  "const", "let", "var", "function", "return", "if", "else", "for", "while",
  "await", "async", "import", "from", "export", "default", "new", "class",
  "extends", "try", "catch", "finally", "throw", "typeof", "instanceof",
  "this", "super", "yield", "of", "in", "switch", "case", "break", "continue",
  "true", "false", "null", "undefined", "void", "delete",
  // Java
  "public", "private", "protected", "static", "package", "interface",
  "implements", "int", "String", "boolean",
  // Python
  "def", "self", "None", "True", "False", "elif", "lambda", "with", "as",
  "not", "and", "or", "pass", "assert",
];

const keywordSet = Object.fromEntries(KEYWORDS.map((k) => [k, true]));

function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const TOKEN_RE = new RegExp(
  [
    "(\\/\\/[^\\n]*|#[^\\n]*)", // 1 line comment
    "(\\/\\*[\\s\\S]*?\\*\\/)", // 2 block comment
    "(`(?:\\\\.|[^`\\\\])*`|'(?:\\\\.|[^'\\\\])*'|\"(?:\\\\.|[^\"\\\\])*\")", // 3 string
    "(\\b\\d[\\d_.]*\\b)", // 4 number
    "([A-Za-z_$][A-Za-z0-9_$]*)", // 5 identifier
    "([^\\sA-Za-z0-9_$]+)", // 6 operators / punctuation
  ].join("|"),
  "g"
);

function span(cls, text) {
  return `<span class="${cls}">${escapeHtml(text)}</span>`;
}

/** Return highlighted HTML for a code string. */
export function highlight(code) {
  code = code.replace(/\t/g, "  ");
  let out = "";
  let lastIndex = 0;
  let m;
  TOKEN_RE.lastIndex = 0;

  while ((m = TOKEN_RE.exec(code)) !== null) {
    if (m.index > lastIndex) out += escapeHtml(code.slice(lastIndex, m.index));
    lastIndex = TOKEN_RE.lastIndex;

    const [, comment1, comment2, str, num, ident, punct] = m;
    const comment = comment1 || comment2;

    if (comment !== undefined) {
      out += span("tok-comment", comment);
    } else if (str !== undefined) {
      out += span("tok-string", str);
    } else if (num !== undefined) {
      out += span("tok-number", num);
    } else if (ident !== undefined) {
      if (keywordSet[ident]) {
        out += span("tok-keyword", ident);
      } else {
        const after = code.charAt(lastIndex);
        const before = m.index > 0 ? code.charAt(m.index - 1) : "";
        if (after === "(") out += span("tok-function", ident);
        else if (before === ".") out += span("tok-property", ident);
        else out += escapeHtml(ident);
      }
    } else if (punct !== undefined) {
      out += span("tok-punctuation", punct);
    }
  }
  if (lastIndex < code.length) out += escapeHtml(code.slice(lastIndex));
  return out;
}
