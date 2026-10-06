(function () {
  var form = document.querySelector("[data-v8mr-find]")
  if (!form) return
  var input = form.querySelector("input")
  var miss = document.querySelector("[data-v8mr-miss]")

  input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && (event.isComposing || event.keyCode === 229)) {
      event.preventDefault()
    }
  })

  form.addEventListener("submit", function (event) {
    event.preventDefault()
    var query = (input.value || "").trim().toLowerCase().replace(/^#/, "")
    if (!query) return

    var blocks = document.querySelectorAll("[data-v8mr-key]")
    var found = null
    for (var i = 0; i < blocks.length; i++) {
      var key = (blocks[i].getAttribute("data-v8mr-key") || "").toLowerCase()
      if (key.indexOf(query) !== -1) {
        found = blocks[i]
        break
      }
    }

    if (!found) {
      if (miss) miss.textContent = "Такого раздела нет. Попробуйте слово из хештега."
      return
    }

    if (miss) miss.textContent = ""
    found.scrollIntoView({ behavior: "smooth", block: "start" })
    found.setAttribute("data-v8mr-hit", "1")
    window.setTimeout(function () {
      found.removeAttribute("data-v8mr-hit")
    }, 1600)
  })
})()
