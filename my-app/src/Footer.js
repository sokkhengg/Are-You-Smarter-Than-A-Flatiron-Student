import React from 'react'
import { Grid } from 'semantic-ui-react'

function Footer() {
    return (
        <div>
            <Grid columns="equal">
                <Grid.Column>
                </Grid.Column>

                <Grid.Column textAlign="center">
                    <p>Made by <a href="https://github.com/smh1988-2" target="_blank">Sean Hurley</a> and <a href="https://github.com/sokkhengg" target="_blank">Sok Heng</a>. Built with <a href="https://jservice.io/" target="_blank">jService API</a>.</p>
                </Grid.Column>

                <Grid.Column>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Footer
