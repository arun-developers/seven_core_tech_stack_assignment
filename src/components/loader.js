import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function Loader() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
      width="100%"
    >
      <CircularProgress />
    </Box>
  );
}

export default Loader;
