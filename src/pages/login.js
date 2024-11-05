import React, {useEffect, useState} from 'react';
import './login.css';

function Login() {

  const [goToUserAuth, setGoToUserAuth] = React.useState(false)

  // use window.location.href when linking to pages in diff venv
    // return null says to React don't run anything w < Navigate />
      // window.location.hr