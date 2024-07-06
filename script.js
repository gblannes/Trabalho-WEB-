// Declarando um váriavel
const accordionItems = document.querySelectorAll(".accordion_item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".accordion_header");
  // Função de Click
  accordionHeader.addEventListener("click", () => {
    const accordionContent = item.querySelector(".accordion_content");
    const activeItem = document.querySelector(".active");

    toggleAccordion(item, accordionContent, activeItem);
  });
});

// Função de Verificação 
function toggleAccordion(item, content, activeItem) {
  const iconItem = item.querySelector(".icon");
  const icons = document.querySelectorAll(".icon");

  icons.forEach((icon) => (icon.innerHTML = "🡫"));

  // Condição de Ativação
  if (activeItem) {
    activeItem.style.height = 0;
    activeItem.classList.remove("active");
  }

  if (content !== activeItem) {
    iconItem.innerHTML = "🡱";
    content.classList.add("active");
    content.style.height = content.scrollHeight + "px";
  }
}

function colorClick(radio) {
  // Remove a selação de classe de todas as labels
  document.querySelectorAll('.typeSex label').forEach(label => {
    label.classList.remove('selected');
  });

  // Adiciona a seleção de classe ao 
  document.querySelector(`label[for=${radio.id}]`).classList.add('selected');
}