import React from 'react'
import quiz from './images/graduation-cap-solid.svg'
import {Grid, GridColumn} from "semantic-ui-react"

function Logo() {
    return (
        <div>
            <Grid columns="equal">
                <GridColumn></GridColumn>
                <GridColumn textAlign="center">
                <img className="photo" 
                    src={quiz} alt="cat logo" width="150" />
                </GridColumn>
                <GridColumn></GridColumn>
            </Grid>
        </div>
    )
}

export default Logo