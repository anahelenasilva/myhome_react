import React from 'react';
import './styles/property.scss';

function Property() {
  return (
    <article>
      <img src="../../assets/images/" className="property__image" />
      <div className="property__details">
        <p className="property__details__header">
          USA/El Paso $ 500,00
        </p>
        <p className="property__details__description">
          Quisque ullamcorper purus in urna blandit, nec mollis ante fermentum.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
          cubilia Curae; Nulla blandit felis vitae diam iaculis interdum at et sem.
          Nullam facilisis, orci id faucibus vulputate, ipsum diam maximus
          neque, at fermentum purus orci vel dui.
        </p>
        <p>
          + details
        </p>
      </div>
    </article>
  )
}

export { Property };
