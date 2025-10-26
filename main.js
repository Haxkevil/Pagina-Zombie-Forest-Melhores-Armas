const zombie = new Audio('Audios/zombie.mp3');
const tambor = new Audio('Audios/tambor.mp3');
const armaRelaod = new Audio('Audios/arma_reload.mp3');
const armaDisparo = new Audio('Audios/arma_disparo.mp3');
const zombieMorto = new Audio('Audios/zombie_morto.mp3');

let zombieAtivo = false;
let armaCarregada = false;

const botaoZombieEl = document.querySelector('button.zombie');
const botaoReloadEl = document.querySelector('button.arma_reload');
const botaoDisparoEl = document.querySelector('button.arma_disparo');

// Remove bordas iniciais
botaoZombieEl.style.border = 'none';
botaoReloadEl.style.border = 'none';
botaoDisparoEl.style.border = 'none';

botaoZombieEl.addEventListener('click', () => {
  zombie.currentTime = 0;
  zombie.loop = true;
  zombie.play();
  
  tambor.currentTime = 0;
  tambor.loop = true;
  tambor.play();
  
  zombieAtivo = true;
  
  // Aplica bordas após ativação e outros estilos
  botaoZombieEl.style.border = '1px solid #00BFFF'; //azul
  botaoZombieEl.style.width = "100px";
  botaoZombieEl.style.height = "100px";
  
  botaoReloadEl.style.border = '1px solid yellow';
  botaoDisparoEl.style.border = '1px solid #ff4c4c'; //vermelho
});
botaoReloadEl.addEventListener('click', () => {
  if (!zombieAtivo) {
    alert('Você precisa ativar o zumbi primeiro!');
    return;
  }
  
  armaRelaod.currentTime = 0;
  armaRelaod.play();
  
  // Aguarda 1 segundo antes de considerar a arma carregada
  setTimeout(() => {
    armaCarregada = true;
    botaoReloadEl.style.border = 'none';
    
    // Muda borda da arma para verde após 1 segundo
    botaoDisparoEl.style.border = '1px solid #00ff99'; // verde
  }, 500);
});

botaoDisparoEl.addEventListener('click', () => {
  if (!zombieAtivo) {
    alert('Você precisa ativar o zumbi primeiro!');
    return;
  }
  
  if (!armaCarregada) {
    alert('Você precisa recarregar antes de disparar!');
    return;
  }
  
  zombie.pause();
  tambor.pause();
  
  armaDisparo.currentTime = 0;
  armaDisparo.play();
  
  setTimeout(() => {
    zombieMorto.currentTime = 0;
    zombieMorto.play();
    // Remove bordas iniciais
    botaoZombieEl.style.border = 'none';
    botaoReloadEl.style.border = 'none';
    botaoDisparoEl.style.border = 'none';
    botaoZombieEl.style.width = "80px";
    botaoZombieEl.style.height = "80px";
    botaoZombieEl.style.rotate = "-80deg"
    
    zombieAtivo = false;
    
    
  }, 450);
  setTimeout(() => {
    botaoZombieEl.style.rotate = "0deg"
  }, 2000)
  
  
  armaCarregada = false;
  botaoDisparoEl.style.border = '1px solid #ff4c4c'; // Volta para vermelho após disparo
})