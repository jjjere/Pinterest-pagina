import "./styles/Main.css";
import Imagen from "./Imagen";
import Masonry from 'react-masonry-css'
<source />;
const Main = () => {
  return (
    <main>
      <Masonry
        breakpointCols={5}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
        <Imagen/>
      </Masonry>
      
    </main>
  );
};

export default Main;
