export default function formatHTMLUnicode(text) {
  const txtArea = document.createElement("textarea");
  txtArea.innerHTML = text;
  return txtArea.value;
}
