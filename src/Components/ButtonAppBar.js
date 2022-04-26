import * as React from 'react';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/"><Button color="inherit">Home</Button></Link>
          <Link to="/"><Button color="inherit">Introduction</Button></Link>
          <Link to="/"><Button color="inherit">Code Examples</Button></Link>
          <Link to="/"><Button color="inherit">Endpoints</Button></Link>
          <Link to="/"><Button color="inherit">Schema</Button></Link>
          <Link to="/"><Button color="inherit">Coverage</Button></Link>
          <Link to="/"><Button color="inherit">US Energy Infrastructure Visualization</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
