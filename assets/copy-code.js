document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre").forEach((pre) => {
    const code = pre.querySelector("code");
    if (!code) return;

    const button = document.createElement("button");
    button.className = "copy-btn";
    button.type = "button";
    button.innerHTML = "⧉";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(code.innerText).then(() => {
        button.innerHTML = "✓";
        setTimeout(() => {
          button.innerText = "Copy";
        }, 2000);
      });
    });

    pre.style.position = "relative";
    pre.appendChild(button);
  });
});
