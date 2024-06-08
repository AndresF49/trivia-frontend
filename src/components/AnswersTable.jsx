import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function AnswersTable({ data }) {
  const columns = [
    { id: "name", label: "Name" },
    { id: "answer", label: "Answer" },
  ];

  return (
    <Table sx={{ maxWidth: "70vw" }} aria-label="answers table">
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.id}>{column.label}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.length > 0 ? (
          data.map((row) => (
            <TableRow key={row.name}>
              {columns.map((column) => (
                <TableCell key={column.id}>{row[column.id]}</TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} align="center">
              <Typography variant="h4">No items found</Typography>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}

export default AnswersTable;
