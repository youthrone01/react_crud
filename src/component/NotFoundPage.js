import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <Link to="/">Go home</Link>
    <h1>404</h1>
  </div>
);

export default NotFoundPage;