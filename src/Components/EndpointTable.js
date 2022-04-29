import * as React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

// Create description column

function createData(name, description) {
  return { name, description };
}

const rows = [
  createData('/active_platforms'),
  createData('/active_platforms/oil_gas'),
  createData('/biodiesel'),
  createData('/electric_grid'),
  createData('/electric_grid/dc'),
  createData('/electric_grid/under_100'),
  createData('/electric_grid/345_735_kV_AC'),
  createData('/electric_grid/100_300_kV_AC'),
  createData('/mines'),
  createData('/mines/coal'),
  createData('/mixed_shale_chalk'),
  createData('/mixed_shale_chalk/gas'),
  createData('/pipelines'),
  createData('/pipelines/gas'),
  createData('/pipelines/oil'),
  createData('/pipelines/petroleum_product'),
  createData('/power_plants'),
  createData('/power_plants/hydroelectric'),
  createData('/power_plants/coal'),
  createData('/power_plants/natural_gas'),
  createData('/power_plants/nuclear'),
  createData('/power_plants/petroleum'),
  createData('/power_plants/wind'),
  createData('/power_plants/solar'),
  createData('/power_plants/pumped_storage  '),
  createData('/power_plants/geothermal'),
  createData('/power_plants/wood'),
  createData('/power_plants/other_fossil_gases'),
  createData('/processing_plants'),
  createData('/processing_plants/gas'),
  createData('/railroads'),
  createData('/refineries'),
  createData('/refineries/petroleum'),
  createData('/shale'),
  createData('/shale/gas'),
  createData('/strategic_reserves'),
  createData('/strategic_reserves/petroleum'),
  createData('/terminals'),
  createData('/terminals/petroleum_product'),
  createData('/terminals/import'),
  createData('/terminals/export'),
  createData('/terminals/import_and_export'),
  createData('/underground_storage'),
  createData('/underground_storage/gas'),
  createData('/wells'),
  createData('/wells/tx_capcog'),
  createData('/wells/gas'),
  createData('/wells/oil'),
];

export default function EndpointTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Endpoint</strong></TableCell>
            <TableCell><strong>Description</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}