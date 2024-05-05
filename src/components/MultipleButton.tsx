import { useState, useRef, FC, Dispatch } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Loader from "./Loader";
import {
  Grow,
  Paper,
  ListItemIcon,
  ListItemText,
  Popper,
  MenuItem,
  MenuList,
  ButtonGroup,
  Button,
  SvgIconTypeMap,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

interface MenuItemProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  text: string;
}

interface MenuItemsListProps extends MenuItemProps {
  index: number;
  selectedIndex: number;
  onClick: (index: number) => void;
}

interface Props {
  options: MenuItemProps[];
  setChoice: Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
}

const MenuItemsList: FC<MenuItemsListProps> = ({
  Icon,
  text,
  index,
  selectedIndex,
  onClick,
}) => (
  <MenuItem selected={index === selectedIndex} onClick={() => onClick(index)}>
    {Icon && (
      <ListItemIcon>
        <Icon fontSize="small" />
      </ListItemIcon>
    )}
    <ListItemText sx={{ fontSize: "1.6rem", fontWeight: 400 }}>
      {text}
    </ListItemText>
  </MenuItem>
);
const MultipleButton: FC<Props> = ({ options, setChoice, isLoading }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClick = (index: number) => {
    if (index === 0) {
      setChoice("publish");
    } else if (index === 1) {
      setChoice("draft");
    }
  };

  const handleMenuItemClick = (index: number) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation();
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };

  const handleDefaultButtonClick = () => {
    handleClick(selectedIndex);
  };

  const { Icon, text } = options[selectedIndex];

  return (
    <>
      <ButtonGroup
        disableElevation
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button
          sx={{
            fontSize: "1.4rem",
            fontWeight: 600,
            textTransform: "capitalize",
            lineHeight: "1.8rem",
          }}
          startIcon={<Icon fontSize="small" />}
          type="submit"
          onClick={handleDefaultButtonClick} // This button now respects the selectedIndex
        >
          {isLoading ? <Loader /> : text}
        </Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon fontSize="large" />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {options.map((option, index) => (
                    <MenuItemsList
                      selectedIndex={selectedIndex}
                      index={index}
                      key={index}
                      Icon={option.Icon}
                      text={option.text}
                      onClick={handleMenuItemClick}
                    />
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
};

export default MultipleButton;
