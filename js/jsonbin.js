const endpointBase = `https://api.jsonbin.io/v3/b/688ed0c3f7e7a370d1f28f20`;

  document.getElementById("enviar").addEventListener("click", async () => {
    const textarea = document.getElementById("textearea");
    const texto = textarea.value.trim();

    if (!texto) {
      alert("Digite algo antes de enviar!");
      return;
    }

    try {
      const res = await fetch(`${endpointBase}?timestamp=${Date.now()}`, {
        headers: { "Cache-Control": "no-cache" }
      });
      const data = await res.json();
      const conteudo = Array.isArray(data.record) ? data.record : [];

      conteudo.push({ comentario: texto, data: new Date().toISOString() });

      await fetch(endpointBase, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(conteudo),
      });

      textarea.value = "";
      const msg = document.getElementById("mensagem");
      msg.style.display = "block";
      setTimeout(() => (msg.style.display = "none"), 3000);
    } catch (e) {
      console.error("Erro ao salvar comentário:", e);
      alert("Erro ao salvar comentário. Veja o console.");
    }
  });