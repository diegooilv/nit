function toggleSection(header) {
  const content = header.nextElementSibling;
  if (!content) return;

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    toggleContent(content);
  }
}

function toggleContent(content) {
  document.querySelectorAll(".concept .content").forEach((el) => {
    if (el !== content) el.style.display = "none";
  });
  content.style.display = content.style.display === "block" ? "none" : "block";
}

function expandAll() {
  document.querySelectorAll(".concept .content").forEach((el) => {
    el.style.display = "block";
  });
}

function mostrarMensagem() {
  const msg = document.getElementById("mensagem");
  const text = document.getElementById("textearea");
  text.value = "";
  msg.style.display = "block";
  setTimeout(() => {
    msg.style.display = "none";
  }, 2000); 
}
