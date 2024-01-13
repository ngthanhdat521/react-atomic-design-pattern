import * as React from "react";

const ListMenu = React.lazy(() => import("@/components/molecules/list-menu"));
const SidebarContainer = React.lazy(() => import("@/components/molecules/sidebar-container"));

export const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <ListMenu menus={["Inbox", "Starred", "Send email", "Drafts"]} />
      <ListMenu menus={["All mail", "Trash", "Spam"]} />
    </SidebarContainer>
  );
};

export default Sidebar;
