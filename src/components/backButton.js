import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function BackButton({ tooltip }) {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <Box display="flex" justifyContent="start" padding='10px' position='absolute' backgroundColor='#508C9B' borderRadius='50%'>
      <Tooltip title= {tooltip}>
        <IconButton onClick={handleBackClick}>
          <ArrowBackIcon sx={{ color: 'white' }}/>
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default BackButton;
