import React from 'react'
import {Grid, GridColumn} from "semantic-ui-react"

function Header() {
    return (
        <div className="header">
            <Grid columns="equal">
                <GridColumn></GridColumn>
                <GridColumn textAlign="center">
                    <h3>
                    Are You Smarter Than A FlatIron Student? 
                    </h3>
                    <hr className="headerDivider"/>
                </GridColumn>
                <GridColumn></GridColumn>
            </Grid>
        </div>
    )
}

export default Header
