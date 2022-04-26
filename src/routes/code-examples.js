import { Paper } from "@material-ui/core"
import NavBar from "../Components/NavBar"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../Components/App/App.css'
import curl from './../curl-output.png'
import python_requests from './../python-requests.png'
export default function CodeExamples() {
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
                                <Typography variant='h5' component='h2'>
                                    Code Examples
                                </Typography>
                                <Typography variant='h5' component='h2'>
                                    Making HTTP calls with <code>curl</code>
                                </Typography>
                                <Typography variant='body1' component='body1'>
                                    In this example, we will use <code>curl</code> set to verbose output to return all coal mines in the United States.
                                </Typography>
                                <Container maxWidth="m"  className="App">
                                    <code>
                                        $ curl -v http://127.0.0.1:5000/api/v0.1.0/infrastructure/mines/coal
                                    </code>
                                </Container>
                                <Typography variant="body1" component="body1">
                                    You should receive something along the lines of the following:
                                </Typography>
                                <Container maxWidth="m"  className="App">
                                    <img src={curl} className="request-image" alt="Results of a curl request"/>
                                </Container>
                                <Typography variant="body1" component="body1">
                                    Using the Python <code>requests</code> library
                                </Typography>
                                <br/>
                                <code style={{textAlign: "left"}}>
                                    >>> import requests<br/>
                                    >>> response = requests.get("http://127.0.0.1:5000/api/v0.1.0/infrastructure/wells/oil")<br/>
                                    >>> response.json()<br/>
                                </code>
                                <Typography variant="body1" component="body1">
                                    Your output should be similar to the following:
                                </Typography>
                                <Container maxWidth="m"  className="App">
                                    <img src={python_requests} className="request-image" alt="Results of a Python request"/>
                                </Container>
                            </Paper>
                    </Container>
                </Paper>
            </Container>
        </main>
    )
}