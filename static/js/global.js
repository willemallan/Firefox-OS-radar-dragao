botao = document.getElementById('ligar');
audio1 = document.getElementById('audio1');
audio2 = document.getElementById('audio2');
resultado = document.getElementById('resultado');
localizacao = document.getElementById('localizacao');

function ligar(){
    // coloca class off
    botao.classList.remove('off');
    botao.classList.add('on');
    localizacao.classList.add('localizacao');
    audio1.play();
    audio2.play();

    var options = {
      enableHighAccuracy: true,
      timeout: 7000,
      maximumAge: 0
    };

    function success(pos) {
      var crd = pos.coords;

        msg = '<p><b>Você esta em:</b></p>';
        msg += '<p>Latitude: ' + crd.latitude + '</p>';
        msg += '<p>Longitude: ' + crd.longitude + '</p>';
        // msg += '<p>Eficiência: ' + crd.accuracy + ' metro(s).' + '</p>';
        resultado.innerHTML = msg;
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);
    botao.innerHTML = 'off';
}

function parar(){
    botao.classList.remove('on');
    botao.classList.add('off');
    localizacao.classList.remove('localizacao');
    audio2.pause();
    audio1.play();
    botao.innerHTML = 'on';
}

function localizar(){

  if( botao.innerHTML == 'on' ){
    ligar();
  } else {
    parar();
  }
}

botao.addEventListener('click', localizar);
