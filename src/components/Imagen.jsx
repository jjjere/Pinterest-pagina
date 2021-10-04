const alturas = [128, 300, 410, 250, 180, 340, 215, 320, 153, 260];

const Imagen = () => {
  const altura = alturas[Math.floor(Math.random() * alturas.length)];
  return (
    <img
      src={`https://picsum.photos/230/${altura}.jpg`}
      alt="texto"
      //width="230px"
      //height={altura}
    />
  );
};

export default Imagen;
