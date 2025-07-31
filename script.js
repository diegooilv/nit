function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    const content = section.querySelector(".content");
    if (content && content.style.display !== "block") {
      toggleContent(content);
    }
  }
}

function toggleSection(header) {
  const content = header.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    toggleContent(content);
  }
}

function toggleContent(content) {
  // fecha outras abertas
  document.querySelectorAll(".concept .content").forEach((el) => {
    if (el !== content) el.style.display = "none";
  });
  content.style.display = "block";
}

function expandAll() {
  document.querySelectorAll(".concept .content").forEach((el) => {
    el.style.display = "block";
  });
}
