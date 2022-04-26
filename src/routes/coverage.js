import { Paper } from "@material-ui/core"
import NavBar from "../Components/NavBar"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../Components/App/App.css'
export default function Coverage() {
    return (
        <main>
            <Container maxWidth="xl" className="App">
                <Paper>
                    <NavBar/>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Energy Infrastructure API
                    </Typography>
                    <h2>Coverage</h2>
                </Paper>
            </Container>
        </main>
    )
}