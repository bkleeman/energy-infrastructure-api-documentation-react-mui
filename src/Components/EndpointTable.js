import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../Components/App/App.css'

function createData(name, description, source) {
  return { name, description, source };
}

const rows = [
  createData('/active_platforms', 'Active platforms', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/active_platforms/oil_gas', '', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/biodiesel', '', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/electric_grid', 'All DC power lines, and all AC power lines from under 100kv-735kv. Contains the same information seen in all following electric grid endpoints.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/electric_grid/dc', 'All DC power lines.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/electric_grid/under_100', 'All AC power lines unknown and under 100kV.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/electric_grid/100_300_kV_AC', 'All AC power lines 100-300kV.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/electric_grid/345_735_kV_AC', 'All AC power lines 345-745kV.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/mines', 'All mines. Mine coverage currently only includes coal mines.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/mines/coal', 'All coal mines.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/mixed_shale_chalk', '', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/mixed_shale_chalk/gas', '', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/pipelines', 'All pipelines, including gas, oil, and petroleum product pipelines. Contains the same information seen in all following pipeline endpoints.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/pipelines/gas', 'All gas pipelines.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/pipelines/oil', 'All oil pipelines', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/pipelines/petroleum_product', 'All petroleum product pipelines.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants', 'All power plants. Contains the same information seen in all power plant endpoints.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants/hydroelectric', 'All hydroelectric power plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants/coal', 'All coal power plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants/natural_gas', 'All natural gas power plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants/nuclear', 'All nuclear power plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants/petroleum', 'All petroleum power plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants/wind', 'All wind power plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants/solar', 'All solar power plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants/pumped_storage', 'All pumped storage power plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants/geothermal', 'All geothermal power plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants/wood', 'All wood power plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/power_plants/other_fossil_gases', 'All power plants that utilize other fossil gases.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/processing_plants', 'All processing plants. Processing plant coverage currently only contains information on gas processing plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/processing_plants/gas', 'All gas processing plants.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/railroads', 'All railroads.', <a href="https://apps.nationalmap.gov/downloader/#startUp" target="_blank" rel="noreferrer">USGS National Map</a>),
  createData('/refineries', 'All refineries. Refinery coverage currently only contains information on petroleum refineries.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/refineries/petroleum', 'All petroleum refineries.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/shale', 'All shale plays. Contains the same information found in the following shale endpoint.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/shale/gas', 'All gas shale plays.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/strategic_reserves', 'All strategic reserves. Contains the same information seen in the following strategic reserve endpoint.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/strategic_reserves/petroleum', 'All strategic petroleum reserves.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/terminals', 'All liquified natural gas (LNG) terminals. Contains the same information seen in the following terminal endpoints.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/terminals/petroleum_product', '', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/terminals/import', 'All liquified natural gas (LNG) import terminals.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/terminals/export', 'All liquified natural gas (LNG) export terminals.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/terminals/import_and_export', 'All liquified natural gas (LNG) import and export terminals.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/underground_storage', '', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/underground_storage/gas', '', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/wells', 'All wells. Contains the same information found in the following well endpoints', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/wells/tx_capcog', 'All Texas Capital Area Council of Governments wells.', 'CAPCOG'),
  createData('/wells/gas', 'All gas wells.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
  createData('/wells/oil', 'All oil wells.', <a href="https://www.eia.gov/" target="_blank" rel="noreferrer">EIA</a>),
];

export default function EndpointTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='left'><strong>Endpoint</strong></TableCell>
            <TableCell align='left'><strong>Description</strong></TableCell>
            <TableCell align='left'><strong>Source</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow align='center'
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align='left'>
                <pre><code><a href={"http://127.0.0.1:5000/api/v0.1.0/infrastructure"+row.name} target='_blank' rel='noreferrer'>{row.name}</a></code></pre>
              </TableCell>
              <TableCell align='left'>{row.description}</TableCell>
              <TableCell align='left'>{row.source}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}