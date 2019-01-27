import React from "react";
import { navigate } from "gatsby"

import {  logout } from "../services/auth"

export default () => (<>
    <h1>Welcome you are logged in</h1>
    <a className="nav-link" href="/" onClick={event => { event.preventDefault(); logout(() => navigate(`/`))}}>Logout</a>
    </>
)
