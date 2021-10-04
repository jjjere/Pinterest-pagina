//const alturas = [260, 153, 300];
const imgs = ["./img/260.jpg", "./img/153.jpg", "./img/300.jpg"];
const Imagen = () => {
  const indexRnd = Math.floor(Math.random() * imgs.length);
  const urlImg = imgs[indexRnd];
  //const altura = alturas[indexRnd];
  return (
    <img
      src={urlImg}
      alt="texto"
      //width="230px"
      //height={altura}
    />
  );
};

export default Imagen;
