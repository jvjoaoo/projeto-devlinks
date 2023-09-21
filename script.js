function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light__mode")

  const image = document.querySelector("#profile img")
  if (html.classList.contains("light__mode")) {
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo Roxo"
    )
  } else {
    image.setAttribute("src", "./assets/avatar.png")
  }

  // troca de imagem
}
