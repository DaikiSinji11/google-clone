import { Box, TextField, InputAdornment, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#0F9D8A", // verde similar a tu fondo
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Logo */}
      <Typography
        sx={{
          color: "white",
          fontSize: "72px",
          fontWeight: 500,
          marginBottom: "24px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Google
      </Typography>

      {/* Buscador */}
      <TextField
        placeholder="Search Google or type a URL"
        variant="outlined"
        sx={{
          width: "560px",
          backgroundColor: "white",
          borderRadius: "30px",

          "& fieldset": {
            border: "none",
          },

          boxShadow: "0px 1px 6px rgba(32,33,36,.28)",

          "&:hover": {
            boxShadow: "0px 1px 8px rgba(32,33,36,.35)",
          },

          "& .MuiInputBase-input": {
            padding: "14px 0",
            fontSize: "16px",
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ color: "#9aa0a6" }} />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <MicIcon sx={{ color: "#4285f4" }} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}

export default App;
