import { Paper } from "@material-ui/core"
import NavBar from "../Components/NavBar"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import '../Components/App/App.css'
export default function CodeExamples() {
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
                                <div className="main-paper-content">
                                    <Typography variant='h5' component='h2'>
                                        Code Examples
                                    </Typography>
                                    <br/>
                                    <Typography variant='h5' component='h2'>
                                        Making HTTP calls with <code>curl</code>
                                    </Typography>
                                    <br/>
                                    <Typography variant='body1' component='body1'>
                                        In this example, we will use <code>curl</code> set to verbose output to return all coal mines in the United States.
                                    </Typography>
                                    <pre>
                                        <code className="code-overflow-on-mobile">
                                            {"$ curl -v http://127.0.0.1:5000/api/v0.1.0/infrastructure/mines/coal"}
                                        </code>
                                    </pre>
                                    <Typography variant="body1" component="body1">
                                        You should receive something along the lines of the following:
                                    </Typography>
                                    <pre>
                                        <code>
                                            {`{
  "features": [
    {
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
    },

...

}`}
                                        </code>
                                    </pre>
                                    <Typography variant="body1" component="body1">
                                        Using the Python <code>requests</code> library
                                    </Typography>
                                    <br/>
                                    <pre>
                                        <code className="code-overflow-on-mobile">
                                            {">>> import requests"}<br/>
                                            {'>>> response = requests.get("http://127.0.0.1:5000/api/v0.1.0/infrastructure/wells/oil")'}<br/>
                                            {">>> response.json()"}<br/>
                                        </code>
                                    </pre>
                                    <Typography variant="body1" component="body1">
                                        Your output should be similar to the following:
                                    </Typography>
                                    <pre>
                                        <code>
                                            {`...

{
    'geometry': {
        'coordinates': [
            -102.4290895, 
            32.1287885
        ], 
        'type': 'Point'
    }, 
    'properties': {
        'original': {
            'class': 'VC', 
            'lat': 32.1287885, 
            'lon': -102.4290895, 
            'oilgas': 'OIL', 
            'zoom': 0
        }, 
        'required': {
            'legend': 'Oil wells', 
            'unit': None, 
            'viz_dim': 'zoom'
        }, 
        'type': {
            'primary': 'wells', 
            'secondary': 'oil'
        }
    }, 'type': 'Feature'
},

...`}
                                        </code>
                                    </pre>
                                    {/* <Container maxWidth="m"  className="App">
                                        <img src={python_requests} className="request-image" alt="Results of a Python request"/>
                                    </Container> */}
                                </div>
                            </Paper>
                    </Container>
                </Paper>
            </Container>
        </main>
    )
}