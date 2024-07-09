function pilComputer() {
  const comp = Math.random();
  if (comp < 0.34) return 'gajah';
  if (comp >= 0.34 && comp < 0.67) return 'orang';
  return 'semut';
}

function getHasil(comp, player) {
  if (player == comp) return 'Seri!';
  if (player == 'gajah') return comp == 'orang' ? 'Menang!' : 'Kalah!';
  if (player == 'orang') return comp == 'gajah' ? 'Kalah!' : 'Menang!';
  if (player == 'semut') return comp == 'orang' ? 'Kalah!' : 'Menang!';
}

function putar() {
  const imgComputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'semut', 'orang'];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilPlayer = document.querySelectorAll('li img');
pilPlayer.forEach(function (pil) {
  pil.addEventListener('click', function () {
    const pilihanComputer = pilComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    putar();

    setTimeout(function () {
      // tampilan pilihan komputer
      const imgComputer = document.querySelector('.img-komputer');
      imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

      // info hasil
      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000);
  });
});

// // pilihan player
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//   const pilihanComputer = pilComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   // tampilan pilihan komputer
//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   // info hasil
//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// // pilihan player
// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//   const pilihanComputer = pilComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   // tampilan pilihan komputer
//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   // info hasil
//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });

// // pilihan player
// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//   const pilihanComputer = pilComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);

//   // tampilan pilihan komputer
//   const imgComputer = document.querySelector('.img-komputer');
//   imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

//   // info hasil
//   const info = document.querySelector('.info');
//   info.innerHTML = hasil;
// });
