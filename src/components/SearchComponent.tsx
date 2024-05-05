import { useState, FC, ChangeEvent } from "react";
import { TextField, IconButton, Grow } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

type SearchComponentProps = {
  //@ts-ignore
  onChange?: (value: string) => void;
  searchTerm?: string;
  placeholder?: string;
  name?: string;
};

const SearchComponent: FC<SearchComponentProps> = ({
  onChange,
  name,
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
    <div style={{ width: "100%" }}>
      {isSearchOpen ? (
        <Grow
          style={{ transformOrigin: "0 0 0" }}
          timeout={1000}
          in={isSearchOpen}
          mountOnEnter
          unmountOnExit
        >
          <TextField
            sx={{ "& .MuiInputBase-root": { borderRadius: "0.5rem" } }}
            variant="outlined"
            placeholder={placeholder ? placeholder : "Search..."}
            size="small"
            name={name ?? ""}
            color="primary"
            fullWidth
            InputProps={{
              startAdornment: (
                <IconButton onClick={toggleSearch} edge="start">
                  <SearchOutlined />
                </IconButton>
              ),
            }}
            // onBlur={toggleSearch}
            //@ts-expect-error sss
            onChange={onChange ? onChange : handleInputChange}
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
