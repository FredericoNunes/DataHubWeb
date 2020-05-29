const progressBar = document.getElementsByClassName('progress-bar')[0]
function startcount() {
setInterval(() => {
    var limite_atividade = document.getElementById('atividade');
    var limite_recorrencia = document.getElementById('recorrencia');
    var limite_previsao = document.getElementById('previsao');
    var painel = document.getElementById('painel');
    const computedStyle = getComputedStyle(progressBar)      
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
    progressBar.style.setProperty('--width',width + 5)
    if (width < 20) {
        // atividade is visible. hide it
        limite_atividade.style.display = 'none';
      }
    else {
        // atividade is hidden. show it
        limite_atividade.style.display = 'block';
    }
    if (width < 55) {
        // recorrencia is visible. hide it
        limite_recorrencia.style.display = 'none';
      }
    else {
        // recorrencia is hidden. show it
        limite_recorrencia.style.display = 'block';
      }

    if (width < 85) {
        // previsão is visible. hide it
        limite_previsao.style.display = 'none';
      }
    else {
        // previsão is hidden. show it
        limite_previsao.style.display = 'block';
      }
    if (width < 20){
        painel.innerHTML = 'Já temos algo. Nos passe mais!'
    }
    if (width > 20 && width < 55){
        painel.innerHTML = 'Uhumm, tá começando a ficar claro!!!'
    }
    if (width > 55 && width < 75){
        painel.innerHTML = 'Os Búzios Não Mentem!'
    }
    if (width > 85){
        painel.innerHTML = 'Agora eu vejo! Você Vê?'
    }
},1500

)}

