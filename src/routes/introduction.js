import { Paper } from "@material-ui/core"
import NavBar from "../Components/NavBar"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../Components/App/App.css'
export default function Introduction() {
    return (
        <main>
            <Container maxWidth="xl" className="App">
                <Paper>
                    <NavBar/>
                    <br/>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Energy Infrastructure API
                    </Typography>
                    <br/>
                    <Container>
                        <Paper elevation={12}>
                            <Typography variant='body1' component='body1'>
                                This site contains technical documentation for RDCEP's Energy Infrastructure API, currently being used to power the US Energy Infrastructure Visualization.
                                <br/>
                                Here you can find endpoints, examples, and anything else you need to know.
                            </Typography>
                            <Typography variant='h5' component='h2'>
                                Getting Started
                            </Typography>
                            <Typography variant='body1' component='body1'>
                                Visit <a href="http://127.0.0.1:5000/api/v0.1.0/infrastructure/" target="_blank" rel="noreferrer">http://127.0.0.1:5000/api/v0.1.0/infrastructure/</a> for a list of endpoints.
                                <br/>
                                View some of our <a href="/code-examples">code examples</a> for tips on how to get started with your use case.
                            </Typography>
                        </Paper>
                    </Container>
                    
                </Paper>
            </Container>
        </main>
    )
}