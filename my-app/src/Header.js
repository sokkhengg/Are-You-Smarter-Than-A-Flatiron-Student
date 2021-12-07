import React from 'react'
import {Link} from "react-router-dom" 
import {Grid, GridColumn} from "semantic-ui-react"

function Header() {
    return (
        <div className="header">
        <Link to="/">
            <Grid columns="equal">
                <GridColumn></GridColumn>
                <GridColumn textAlign="center">
                    <h1>
                    Welcome to Quiz App
                    </h1>
                    <hr className="headerDivider"/>
                </GridColumn>
                <GridColumn></GridColumn>
            </Grid>
           

        </Link>
        </div>
    )
}

export default Header
