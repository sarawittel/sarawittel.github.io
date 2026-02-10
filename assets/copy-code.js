document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("pre").forEach((pre) => {
    const code = pre.querySelector("code");
    if (!code) return;

    const button = document.createElement("button");
    button.className = "copy-btn";
    button.type = "button";
    button.innerText = "Copy";

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(code.innerText).then(() => {
        const originalText = button.innerText;
        button.innerText = "Copied";

        setTimeout(() => {
          button.innerText = originalText;
        }, 1500);
      });
    });

    pre.style.position = "relative";
    pre.appendChild(button);
  });
});
