import React from "react";
import Radio from "./Palettes-radio";

const Palettes = (props) => {
  return (
    <section className="design">
      <div className="design--container__2">
        <p className="design--subtitle">Colores</p>
        <form className="js-form design--form" action="" method="GET">
          <Radio id="js-radio-design-palette-1" paletteClass="design--palette1" colorA="design--palette1__colorA" colorB="design--palette1__colorB" colorC="design--palette1__colorC" />
          <Radio id="js-radio-design-palette-2" paletteClass="design--palette2" colorA="design--palette2__colorA" colorB="design--palette2__colorB" colorC="design--palette2__colorC" />
          <Radio id="js-radio-design-palette-3" paletteClass="design--palette3" colorA="design--palette3__colorA" colorB="design--palette3__colorB" colorC="design--palette3__colorC" />
        </form>
      </div>
    </section>
  );
};

export default Palettes;