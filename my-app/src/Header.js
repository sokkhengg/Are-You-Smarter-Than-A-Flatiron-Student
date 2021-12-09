import React from 'react'
import {Grid, GridColumn} from "semantic-ui-react"

function Header() {
    return (
        <div className="header">
        
            <Grid columns="equal">
                <GridColumn></GridColumn>
                <GridColumn textAlign="center">
                    <h1>
                    Are You Smarter Than A FlatIron Student? 
                    </h1>
                    <hr className="headerDivider"/>
                </GridColumn>
                <GridColumn></GridColumn>
            </Grid>

    
        </div>
    )
}

export default Header
