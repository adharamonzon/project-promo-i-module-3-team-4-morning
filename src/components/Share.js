import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';
const Share = (props) => {
  return (
    <div className={props.display}>
      <div className='share--button__container'>
        <Button buttonClass='share--button' iconClass='far fa-address-card' text='Crear tarjeta' />
      </div>
      {/* <!-- Tarjeta Creada --> */}
      <div className='share--card--created'>
        <div className='share--card--created--text'>La tarjeta ha sido creada</div>
        <div className='share--card--created--awesome-prof'>url creada</div>
        <div className='share--card--created--button__container'></div>
        <Button buttonClass='share--card--created--button' href='https://twitter.com/intent/tweet?text=Hey!%20Mira%20que%20tarjeta%20he%20creado' iconClass='fab fa-twitter' text='Compartir en twitter' />
      </div>
    </div>
  );
};

export default Share;
Share.propTypes = {
  display: PropTypes.string,
};
