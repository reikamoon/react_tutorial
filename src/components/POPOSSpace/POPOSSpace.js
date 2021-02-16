import React from 'react'
import logo from '../logo.svg';
import './POPOSSpace.css';
import { Link } from 'react-router-dom';
import data from '../sfpopos-data.json'

function POPOSSpace(props) {
    // this is the equivalent of defining props.name etc.
    const { name, image, address, hours, id } = props
    return (
      <div>
        <Link to={`/details/${id}`}>
            <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
        </Link>
        <h1>
            <Link to={`/details/${id}`}>
                {name}
            </Link>
        </h1>
        <addr>{address}</addr>
        <h3 className="highlighter">{hours}</h3>
      </div>
    )
  }

export default POPOSSpace