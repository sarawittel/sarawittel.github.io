document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".post-stats").forEach(async (el) => {
    const number = el.dataset.number;
    if (!number) return;

    try {
      const res = await fetch(
        `https://blog-discussion-api.vercel.app/api/discussion?number=${number}`,
      );

      const data = await res.json();

      if (data.comments === 0 && data.reactions === 0) {
        el.style.display = "none";
        return;
      }

      el.querySelector(".comment-count").textContent = data.comments;
      el.querySelector(".reaction-count").textContent = data.reactions;
    } catch (err) {
      console.error("Failed to load discussion stats", err);
      el.style.display = "none";
    }
  });
});
