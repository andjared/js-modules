export const button = (btnClassName, child) => {
  const btn = document.createElement("button");
  btn.className = btnClassName;
  btn.append(child);

  return btn;
};
