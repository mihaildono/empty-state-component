import React from 'react';
import empty from '../static/images/empty.svg';
import welcome from '../static/images/welcome.png';

const IMAGES_MAPPING = {
    welcome: welcome,
    empty: empty
};

const EmptyState = props => {
    const { type, textCollection, buttonInfo } = props;

    return (
        <div className="container">
            <img src={IMAGES_MAPPING[type]} className="empty-img"/>
            {textCollection.map((text, i) => <p key={`item-${i}`} className="item">{text}</p>)}
            {buttonInfo ? (
                <button onClick={buttonInfo.handler} className="item btn">{buttonInfo.text}</button>
            ) : null}
        </div>
    );
};

export default EmptyState;
