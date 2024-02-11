import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";
import { FC, ReactNode } from "react";
export const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#fff",
    color: "black",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

export const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "transparent",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:hover": {
    backgroundColor: "#f2f2f2",
    cursor: "pointer",
  },
});

interface CustomizedTablesProps {
  columns: Array<string>;
  children: ReactNode;
}
const CustomizedTables: FC<CustomizedTablesProps> = ({ columns, children }) => {
  return (
    <TableContainer>
      <Table aria-label="customized table">
        <TableHead sx={{ width: "100%" }}>
          <TableRow hover>
            {columns.map((column) => (
              <StyledTableCell key={column}>{column}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{children}</TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTables;
