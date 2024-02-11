import { useState, FC, ChangeEvent } from "react";
import { TextField, IconButton, Grow } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
type SearchComponentProps = {
  onChange?: (value: string) => void;
  searchTerm?: string;
  placeholder?: string;
};

const SearchComponent: FC<SearchComponentProps> = ({
  onChange,
  searchTerm,
  placeholder,
}) => {
  const [isSearchOpen, setSearchOpen] = useState(true);

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (onChange) {
      onChange(value); // Invoke the callback with the current search term
    }
  };

  return (
    <div>
      {isSearchOpen ? (
        <Grow
          style={{ transformOrigin: "0 0 0", width: "100%" }}
          timeout={1000}
          in={isSearchOpen}
          mountOnEnter
          unmountOnExit
        >
          <TextField
            sx={{
              "& .MuiInputBase-root": { borderRadius: "2rem", width: "100%" },
            }}
            variant="outlined"
            placeholder={placeholder ? placeholder : "Search..."}
            size="small"
            color="primary"
            InputProps={{
              startAdornment: (
                <IconButton onClick={toggleSearch} edge="start">
                  <SearchOutlined />
                </IconButton>
              ),
              endAdornment: (
                <IconButton onClick={toggleSearch} edge="start">
                  <CameraAltIcon />
                </IconButton>
              ),
            }}
            onBlur={toggleSearch}
            onChange={handleInputChange}
            value={searchTerm || ""}
          />
        </Grow>
      ) : (
        <IconButton onClick={toggleSearch}>
          <SearchOutlined />
        </IconButton>
      )}
    </div>
  );
};

export default SearchComponent;
