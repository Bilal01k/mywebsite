function createWhatsAppButton(phoneNumber, position = "bottom-right") {
  const container = document.createElement("div");
  container.classList.add("quick-actions");

  const link = document.createElement("a");
  link.href = `https://wa.me/${phoneNumber}`;
  link.className = "quick-btn whatsapp-btn";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.ariaLabel = "Contact us on WhatsApp";

  const icon = document.createElement("i");
  icon.className = "fab fa-whatsapp";

  link.appendChild(icon);
  container.appendChild(link);
  document.body.appendChild(container);

  const style = document.createElement("style");
  style.textContent = `
    .quick-actions {
      position: fixed;
      ${position.includes("bottom") ? "bottom: 20px;" : "top: 20px;"}
      ${position.includes("right") ? "right: 20px;" : "left: 20px;"}
      z-index: 9999;
    }
    .quick-btn {
      background-color: #25D366;
      color: white;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 28px;
      text-decoration: none;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
      transition: all 0.3s ease;
    }
    .quick-btn:hover {
      transform: scale(1.1);
    }
  `;
  document.head.appendChild(style);
}
