function carregar() {
      var msg = window.document.getElementById('msg')
      var img = window.document.getElementById('imagem')
      var data = new Date()
      var hora = data.getHours()
      msg.innerHTML = `Agora são ${hora} horas.`
      if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = 'fotomanha.png.png'
        document.body.style.background = '#d8adac'

      } else if (hora >= 12 && hora <18) {
        //Boa Tarde!
        img.src = 'fototarde.png.png'
        document.body.style.background = '#f79b3e'

      } else {
        //Boa Noite!
        img.src = 'fotonoite.png.png'
        document.body.style.background = '#243841'
      }
}