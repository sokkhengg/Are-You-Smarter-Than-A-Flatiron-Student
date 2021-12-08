import { Dropdown, Button, GridColumn,  Grid } from 'semantic-ui-react'

function StartForm() {
    
    const options = [
        { key: 1, text: 'Easy', value: 1 },
        { key: 2, text: 'Medium', value: 2 },
        { key: 3, text: 'Hard', value: 3 },
      ]

    return (
        <div>
            <Grid columns="equal">
                <GridColumn></GridColumn>
                    <GridColumn></GridColumn>
                    <GridColumn textAlign="center">
                        <Dropdown options={options} selection />&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button primary>Start the Quiz</Button>
                </GridColumn>
            </Grid>
             
        </div>       
    )
}

export default StartForm





