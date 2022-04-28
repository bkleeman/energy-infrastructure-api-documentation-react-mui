import { Paper } from "@material-ui/core"
import NavBar from "../Components/NavBar"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../Components/App/App.css'
import viz from '../us-inf-viz.png'

export default function UsEnergyInfrastructureVisualization() {
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
                                <Typography variant='h5' component='h2'>
                                    US Energy Infrastructure Visualization
                                </Typography>
                                <Typography variant='body1' component='body1'>
                                    The US Energy Infrastructure Visualization is a data visualization created by Nathan Matteson and Benjamin Kleeman through the <a href='https://rdcep.org' target='_blank' rel='noreferrer'>Center for Research-based Decision Making on Climate and Energy Policy</a> (RDCEP) that documents all long-lived infrastructure (> 20 years service life) associated with extracting, processing, transporting, and converting energy in the U.S.
                                    <br/><br/>
                                    The project is an effort of the University of Chicago’s Center for Robust Decision-making on Climate and Energy Policy (RDCEP). Its research is documented in Chen et al 2020, “A Physical Inventory of the U.S. Energy System”, which includes documentation on data sources, validation, and comparison to estimates of depreciated value (~50% of replacement value). This paper is currently in preparation for peer review and is available here as a preprint. See also [www.rdcep.org]) for further information. All data are available on request.
                                </Typography>
                                <br/>
                                <Container maxWidth="m"  className="App">
                                    <img src={viz} className="request-image" alt="A map of the US showing railroads and coal plants."></img>
                                </Container>
                            </Paper>
                    </Container>
                </Paper>
            </Container>
        </main>
    )
}