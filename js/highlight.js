/* ==========================================================================
   highlight.js — A small, dependency-free syntax highlighter.

   It is intentionally minimal: it tokenizes comments, strings, numbers,
   keywords, function calls and object properties for the JavaScript/TypeScript
   family plus a few Java/Python keywords (enough for the test snippets shown
   in this guide). It is NOT a full parser — it just wraps recognized pieces in
   <span class="tok-*"> so components.css can color them.

   Usage:  Highlight.toHtml(code, 'javascript')  ->  HTML string
   ========================================================================== */

(function (global) {
  "use strict";

  // Keywords across the languages used in the guide (JS/TS, Java, Python).
  var KEYWORDS = [
    // JS / TS
    "const", "let", "var", "function", "return", "if", "else", "for", "while",
    "await", "async", "import", "from", "export", "default", "new", "class",
    "extends", "try", "catch", "finally", "throw", "typeof", "instanceof",
    "this", "super", "yield", "of", "in", "switch", "case", "break", "continue",
    "true", "false", "null", "undefined", "void", "delete",
    // Java
    "public", "private", "protected", "static", "package", "interface",
    "implements", "void", "int", "String", "boolean",
    // Python
    "def", "self", "None", "True", "False", "elif", "lambda", "with", "as",
    "not", "and", "or", "pass", "assert",
  ];

  var keywordSet = {};
  KEYWORDS.forEach(function (k) { keywordSet[k] = true; });

  function escapeHtml(s) {
    return s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
  }

  /*
   * A single master regex captures, in priority order:
   *   1. line comments (// ... or # ...)
   *   2. block comments
   *   3. strings (single, double, backtick)
   *   4. numbers
   *   5. identifiers (words)
   *   6. operators / punctuation (everything else, char by char)
   * We then decide how to wrap each match.
   */
  var TOKEN_RE = new RegExp(
    [
      "(\\/\\/[^\\n]*|#[^\\n]*)",                  // 1 line comment
      "(\\/\\*[\\s\\S]*?\\*\\/)",                  // 2 block comment
      "(`(?:\\\\.|[^`\\\\])*`|'(?:\\\\.|[^'\\\\])*'|\"(?:\\\\.|[^\"\\\\])*\")", // 3 string
      "(\\b\\d[\\d_.]*\\b)",                        // 4 number
      "([A-Za-z_$][A-Za-z0-9_$]*)",                // 5 identifier
      "([^\\sA-Za-z0-9_$]+)",                      // 6 operators / punctuation
    ].join("|"),
    "g"
  );

  function span(cls, text) {
    return '<span class="' + cls + '">' + escapeHtml(text) + "</span>";
  }

  function highlight(code) {
    var out = "";
    var lastIndex = 0;
    var m;

    TOKEN_RE.lastIndex = 0;
    while ((m = TOKEN_RE.exec(code)) !== null) {
      // Emit any plain text skipped between matches (whitespace, etc.).
      if (m.index > lastIndex) {
        out += escapeHtml(code.slice(lastIndex, m.index));
      }
      lastIndex = TOKEN_RE.lastIndex;

      var comment = m[1] || m[2];
      var str = m[3];
      var num = m[4];
      var ident = m[5];
      var punct = m[6];

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
          // Look ahead: a "(" means it is a function/method call; a preceding
          // "." means it is a property/method access.
          var after = code.charAt(lastIndex);
          var before = m.index > 0 ? code.charAt(m.index - 1) : "";
          if (after === "(") {
            out += span("tok-function", ident);
          } else if (before === ".") {
            out += span("tok-property", ident);
          } else {
            out += escapeHtml(ident);
          }
        }
      } else if (punct !== undefined) {
        out += span("tok-punctuation", punct);
      }
    }

    if (lastIndex < code.length) {
      out += escapeHtml(code.slice(lastIndex));
    }
    return out;
  }

  global.Highlight = {
    /**
     * Return highlighted HTML for a code string. The language argument is
     * accepted for forward-compatibility but the tokenizer is shared.
     */
    toHtml: function (code, _language) {
      return highlight(code.replace(/\t/g, "  "));
    },
  };
})(window);
