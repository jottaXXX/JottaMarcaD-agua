(function () {
  // Evita duplicação
  if (document.getElementById("marca-jotta")) return;

  // Cria o elemento da marca d'água
  const link = document.createElement("a");
  link.id = "marca-jotta";
  link.href = "https://www.instagram.com/jotta.sx_";
  link.target = "_blank";
  link.style.cssText = `
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 6px 10px;
    background: #fff;
    border-radius: 8px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 12px;
    color: #000;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    z-index: 999999;
  `;

  const img = document.createElement("img");
  img.src = "https://customer-assets.emergentagent.com/job_designvault-2/artifacts/u1uufic1_20250507_114747%20%281%29.jpg";
  img.alt = "Logo Jotta";
  img.style.cssText = "width: 20px; height: 20px; margin-right: 8px; border-radius: 50%;";

  const text = document.createElement("span");
  text.textContent = "Feito por Jamison Gabriel";

  link.appendChild(img);
  link.appendChild(text);
  document.body.appendChild(link);
})();
