function carregaar() {
      var msg = window.document.getElememtById('msg')
      var img = window.document.getElementById('imagem')
      var data = new Date()
      var hora = data.getHours()
      msg.innerHTML = `Agora são ${hora} horas.`
      if (hora >= 0 && hora < 12) {
        //Bom Dia!
      }
}