console.log("loaded!");

function soundBtnClick(file, champ) {
  console.log(file);

  let sound = new Audio(`sounds/${champ}/` + file);
  sound.play()
}
