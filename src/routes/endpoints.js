import * as React from 'react'
import { Paper } from "@material-ui/core"
import NavBar from "../Components/NavBar"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../Components/App/App.css'
import EndpointTable from '../Components/EndpointTable';

export default function Endpoints() {
    return (
        <main>
            <Container maxWidth="xl" className="App">
                <Paper>
                    <NavBar/>
                    <br/>
                    <Typography variant="h4" component="h1" gutterBottom className="title">
                        Energy Infrastructure API
                    </Typography>
                    <br/>
                    <Container>
                        <Paper elevation={12}>
                            <div className='main-paper-content' id="endpoints-title">
                                <Typography variant="h5" component='h2'>
                                    Endpoints
                                </Typography>
                            </div>
                            <Container maxWidth="lg">
                                <div className='endpoint-table'>
                                    <EndpointTable></EndpointTable>
                                </div>
                            </Container>
                        </Paper>
                    </Container>
                </Paper>
            </Container>
        </main>
    )
}