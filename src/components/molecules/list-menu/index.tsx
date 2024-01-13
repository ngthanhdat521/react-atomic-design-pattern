import { Box } from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { List } from "@/components/atoms/lists";
import { Divider } from "@/components/atoms/dividers";
import { ListItem } from "@/components/atoms/list-items";
import { ListItemButton } from "@/components/atoms/list-item-buttons";
import { ListItemIcon } from "@/components/atoms/list-item-icons";
import { ListItemText } from "@/components/atoms/list-item-texts";
import React from "react";

interface IProps {
  menus: string[];
}

export const ListMenu: React.FC<IProps> = (props) => {
  const { menus } = props;

  return (
    <Box>
      <Divider />
      <List>
        {menus.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ListMenu;
