import React from 'react';
import './Image.scss';

  const renderClassNames = (props) => {
    let cN = `c_image`;
    if (props.overlayQuote) {
      cN = `${cN} c_image--has-overlay`
    }
    if (props.alignCenter) {
      cN = `${cN} c_image--align-center`
    }
    return cN;
  }

  const Image = (props) => {    
    return (
      <figure className={renderClassNames(props)}>
        <div className="c_image__img-wrapper">
          <img src={props.imgUrl} alt={props.imgAlt} />
          {props.figcaption && (
            <figcaption className="c_image__figcaption">{props.figcaption}</figcaption>
          )}
        </div>
        {props.overlayQuote && (
          <figcaption className="c_image__figcaption">
            {props.overlayQuote}
            {props.quoteName && <span>{props.quoteName}</span>}
          </figcaption>
        )}
      </figure>
    );
  }

export default Image;