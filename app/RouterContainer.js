import React from 'react';
import {Link} from 'react-router';
 const RouterContainer = (props) =>
    <div>
      <p>Hello routes</p>
      <Link to="/user">Touser</Link>
      <br/>
      <Link to="/">ToIndex</Link>
      {props.children}
    </div>;

  export default RouterContainer;