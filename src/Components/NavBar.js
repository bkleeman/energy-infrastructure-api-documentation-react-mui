import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { Container, Paper } from "@material-ui/core";

export default function NavBar() {
    return(
      <Container>
        <nav
            style={{
              borderBottom: "solid 1px",
              paddingBottom: "1rem",
              marginBottom: "1rem",
              textAlign: 'center'
            }}
          >
          <Link to="/"><Typography variant="body1" component="body1" gutterBottom>Home</Typography></Link> |{" "}
          <Link to="/introduction"><Typography variant="body1" component="body1" gutterBottom>Introduction</Typography></Link> |{" "}
          <Link to="/code-examples"><Typography variant="body1" component="body1" gutterBottom>Code Examples</Typography></Link> |{" "}
          <Link to="/endpoints"><Typography variant="body1" component="body1" gutterBottom>Endpoints</Typography></Link> |{" "}
          <Link to="/schema"><Typography variant="body1" component="body1" gutterBottom>Schema</Typography></Link> |{" "}
          <Link to="/coverage"><Typography variant="body1" component="body1" gutterBottom>Coverage</Typography></Link> |{" "}
          <Link to="/us-energy-infrastructure-visualization"><Typography variant="body1" component="body1" gutterBottom>US Energy Infrastructure Visualization</Typography></Link>
        </nav>
      </Container>  
      
    )
}