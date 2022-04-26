import { Link } from "react-router-dom";

export default function NavBar() {
    return(
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
          marginBottom: "1rem"
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/introduction">Introduction</Link> |{" "}
        <Link to="/code-examples">Code Examples</Link> |{" "}
        <Link to="/endpoints">Endpoints</Link> |{" "}
        <Link to="/schema">Schema</Link> |{" "}
        <Link to="/coverage">Coverage</Link> |{" "}
        <Link to="/us-energy-infrastructure-visualization">US Energy Infrastructure Visualization</Link>
      </nav>
    )
}