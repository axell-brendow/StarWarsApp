import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';

const CardList = ({ element, itemId, category }) => {

    const title = element.name ? element.name : element.title;
    // debugger;

    return (
        <div className="CardList col-lg-4 col-md-6">
            <div className="card-header">{title}</div>
            <div className="card-body">
                <p>Text card body</p>
            </div>
            <div className="card-footer">
                <Link
                    to={itemId}
                    className="btn btn-color"
                >I want more</Link>
            </div>
        </div>
    );
}

export default CardList;
