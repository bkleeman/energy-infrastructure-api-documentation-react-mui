import { Paper } from "@material-ui/core"
import NavBar from "../Components/NavBar"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../Components/App/App.css'
export default function Schema() {
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
                                <div className='main-paper-content'>
                                    <Typography variant='h5' component='h2'>
                                        Schema
                                    </Typography>
                                    <br/>
                                    <Typography variant='body1' component='body1'>
                                        Though MongoDB does not require a schema, and we do not enforce one, our data follow a certain standard that we have crafted to best represent and make it most useful. All of our data conform to GeoJSON/MongoDB specification and have certain properties, some of which are required and some of which may be null.
                                        <br/><br/>
                                        Take for example the following snippet of JSON returned at the <code>{`API_URL_PREFIX/mines/coal`}</code> endpoint:
                                        <br/><br/>
                                        <pre>
                                            <code>
                                                {`{
        "geometry": {
            "coordinates": [
            -87.26689999993238, 
            33.68890000006479
            ], 
            "type": "Point"
        }, 
        "properties": {
            "original": {
            "tot_prod": 537429
            }, 
            "required": {
            "legend": "Coal mines", 
            "unit": null, 
            "viz_dim": "tot_prod"
            }, 
            "type": {
            "primary": "mines", 
            "secondary": "coal"
            }
        }, 
        "type": "Feature"
        }, `}
                                            </code>
                                        </pre>
                                        
                                    </Typography>
                                    <Typography variant="h5" component="h4">
                                        Coordinates
                                    </Typography>
                                    <Typography variant="body1" component="body1">
                                        Note first and foremost that according to GeoJSON specification, coordinates are in lon/lat order rather than the more typical lat/lon format most people are familiar with. If you try to provide coordinates in lat/lon, you will inevitably get an out of bounds error.
                                    </Typography>
                                    <br/><br/>
                                    <Typography variant="h5" component="h4">
                                        Properties
                                    </Typography>
                                    <Typography variant="body1" component="body1">
                                        Each document has a nested <code>properties</code> document that contains information relevant to that document. Each <code>properties</code> document contains nested documents titled <code>original</code>, <code>required</code>, and <code>type</code>.
                                        <br/><br/>
                                        <code>original</code> documents contain fields and values that were kept from our original data sets, which have been sanitized and wrangled into this schema, and come from disparate sources with different standards and formats, gathered through academic research. This includes information you will see used in <code>required</code> documents as well as anything else we determined to be useful.
                                        <br/><br/>
                                        <code>required</code> documents contain the fields <code>legend</code>, <code>unit</code>, and <code>viz_dim</code>. 
                                        <br/><br/>
                                        <code>legend</code> data is used to render legend information in a front end mapping application, such as our <a href="http://us.infrastructure.rdcep.org" target="_blank" rel="noreferrer">US Energy Infrastructure Visualization</a>. 
                                        <br/><br/>
                                        <code>unit</code> data represents the unit relevant to the infrastructure type (some are still null, as a deeper dive into our data is necessary to complete this information).
                                        <br/><br/>
                                        <code>viz_dim</code> data represents the "visual dimension" of the data, which is the property used to adjust the sizing or otherwise visual representation of the data. This typically references data found in the nested <code>original</code> document.
                                        <br/><br/>
                                        The nested <code>type</code> document contains primary and secondary type information that are used to hook the data up to API endpoints. For example, a coal mine element with 
                                        <pre>
                                            <code>
    {`type:
        {
            "primary": "mines",
            "secondary: "coal"
        }`}
                                            </code>
                                        </pre>
                                        <br/>
                                        will route to an API endpoint at <code>{`API_URL_PREFIX/mines/coal`}</code>.
                                        
                                    </Typography>
                                </div>
                                
                            </Paper>
                    </Container>
                </Paper>
            </Container>
        </main>
    )
}