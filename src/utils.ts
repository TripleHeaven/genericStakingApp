export var truncate = function (fullStr) {
  let separator = "...";

  var sepLen = separator.length,
    charsToShow = fullStr.length - sepLen,
    frontChars = 6,
    backChars = 4;

  return (
    fullStr.substr(0, frontChars) +
    separator +
    fullStr.substr(fullStr.length - backChars)
  );
};
