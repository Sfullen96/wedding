import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Card,
  CardContent,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { DateTime } from "luxon";

const ViewRsvps = () => {
  const [code, setCode] = useState(localStorage.getItem("ADMIN_CODE"));
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchResults = async () => {
      const f = await fetch(
        `${process.env.REACT_APP_API_URL}/wedding/rsvp?code=${code}`
      );
      const res = await f.json();
      if (!res.success) {
        setData([]);
        setError(res.error.description);
      } else {
        setError(undefined);
        setData(res?.data);
      }
    };

    if (code && code.length === 4) {
      fetchResults();
    }
  }, [code]);

  return (
    <Box
      zIndex="4"
      display="flex"
      alignItems="center"
      flexDirection="column"
      width="100%"
      textAlign="center"
      overflow="scroll"
    >
      <Card
        sx={{
          p: 0,
          height: "100%",
          width: "100%",
          textAlign: "left",
          mb: 4,
          maxHeight: "calc(100vh - 200px)",
          overflow: "auto",
        }}
        fullWidth
      >
        <CardContent>
          <TextField
            sx={{ mb: 3 }}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onBlur={(e) => {
              localStorage.setItem("ADMIN_CODE", e.target.value);
            }}
            label="Enter code to access"
          />

          {error && <Alert severity="error">{error}</Alert>}

          {data && data.length && code ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Ceremony</TableCell>
                    <TableCell align="right">Evening</TableCell>
                    <TableCell>Dietary requirements</TableCell>
                    <TableCell>Date</TableCell>
                  </TableRow>
                </TableHead>
                {data.map((rsvp) => (
                  <TableBody>
                    {rsvp.rsvp_name.map((row) => (
                      <TableRow
                        key={row.first_name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.first_name} {row.last_name}
                        </TableCell>
                        <TableCell align="right">
                          {row.ceremony === 1 ? "Yes" : "No"}
                        </TableCell>
                        <TableCell align="right">
                          {row.evening === 1 ? "Yes" : "No"}
                        </TableCell>
                        <TableCell>
                          {row.dietary_requirements &&
                          row.dietary_requirements.length
                            ? row.dietary_requirements
                                .map((d) => d.name)
                                .join(", ")
                            : "N/A"}
                        </TableCell>
                        <TableCell>
                          {DateTime.fromISO(row.created_at).toFormat(
                            "dd/MM/yyyy"
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                ))}
              </Table>
            </TableContainer>
          ) : (
            ""
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default ViewRsvps;
