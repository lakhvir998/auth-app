import React from "react";
import { Router } from "@reach/router"
import Layout from "../components/layout";
import Login from "../components/login"


export default () => (
    <Layout>
       <Router>
            <Login path="/"/>
       </Router>
    </Layout>
)
