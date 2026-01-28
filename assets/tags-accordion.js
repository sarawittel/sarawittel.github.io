document.addEventListener("DOMContentLoaded", () => {
  const tagGroups = document.querySelectorAll(".tag-group");

  tagGroups.forEach((group) => {
    group.addEventListener("toggle", () => {
      if (group.open) {
        tagGroups.forEach((other) => {
          if (other !== group) {
            other.removeAttribute("open");
          }
        });
      }
    });
  });
});
