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
  createData('/active_platforms', 'Active platforms'),
  createData('/active_platforms/oil_gas'),
  createData('/biodiesel'),
  createData('/electric_grid', 'All DC power lines, and all AC power lines from under 100kv-735kv. Contains the same information seen in all following electric grid endpoints.'),
  createData('/electric_grid/dc', 'All DC power lines.'),
  createData('/electric_grid/under_100', 'All AC power lines unknown and under 100kV.'),
  createData('/electric_grid/100_300_kV_AC', 'All AC power lines 100-300kV.'),
  createData('/electric_grid/345_735_kV_AC', 'All AC power lines 345-745kV.'),
  createData('/mines', 'All mines. Mine coverage currently only includes coal mines.'),
  createData('/mines/coal', 'All coal mines.'),
  createData('/mixed_shale_chalk'),
  createData('/mixed_shale_chalk/gas'),
  createData('/pipelines', 'All pipelines, including gas, oil, and petroleum product pipelines. Contains the same information seen in all following pipeline endpoints.'),
  createData('/pipelines/gas', 'All gas pipelines.'),
  createData('/pipelines/oil', 'All oil pipelines'),
  createData('/pipelines/petroleum_product', 'All petroleum product pipelines.'),
  createData('/power_plants', 'All power plants. Contains the same information seen in all power plant endpoints.'),
  createData('/power_plants/hydroelectric', 'All hydroelectric power plants.'),
  createData('/power_plants/coal', 'All coal power plants.'),
  createData('/power_plants/natural_gas', 'All natural gas power plants.'),
  createData('/power_plants/nuclear', 'All nuclear power plants.'),
  createData('/power_plants/petroleum', 'All petroleum power plants.'),
  createData('/power_plants/wind', 'All wind power plants.'),
  createData('/power_plants/solar', 'All solar power plants.'),
  createData('/power_plants/pumped_storage', 'All pumped storage power plants.'),
  createData('/power_plants/geothermal', 'All geothermal power plants.'),
  createData('/power_plants/wood', 'All wood power plants.'),
  createData('/power_plants/other_fossil_gases', 'All power plants that utilize other fossil gases.'),
  createData('/processing_plants', 'All processing plants. Processing plant coverage currently only contains information on gas processing plants.'),
  createData('/processing_plants/gas', 'All gas processing plants.'),
  createData('/railroads', 'All railroads.'),
  createData('/refineries', 'All refineries. Refinery coverage currently only contains information on petroleum refineries.'),
  createData('/refineries/petroleum', 'All petroleum refineries.'),
  createData('/shale', 'All shale plays.', 'Contains the same information found in the following shale endpoint.'),
  createData('/shale/gas', 'All gas shale plays.'),
  createData('/strategic_reserves', 'All strategic reserves. Contains the same information seen in the following strategic reserve endpoint.'),
  createData('/strategic_reserves/petroleum', 'All strategic petroleum reserves.'),
  createData('/terminals', 'All liquified natural gas (LNG) terminals.', 'Contains the same information seen in the following terminal endpoints.'),
  createData('/terminals/petroleum_product'),
  createData('/terminals/import', 'All liquified natural gas (LNG) import terminals.'),
  createData('/terminals/export', 'All liquified natural gas (LNG) export terminals.'),
  createData('/terminals/import_and_export', 'All liquified natural gas (LNG) import and export terminals.'),
  createData('/underground_storage'),
  createData('/underground_storage/gas'),
  createData('/wells', 'All wells. Contains the same information found in the following well endpoints'),
  createData('/wells/tx_capcog', 'All Texas Capital Area Council of Governments wells.'),
  createData('/wells/gas', 'All gas wells.'),
  createData('/wells/oil', 'All oil wells.'),
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