export interface MenuProps {
  menuToggle: () => void;
  menuItems: Array<string>;
  menuOpen: boolean;
}

export type MenuListProps = {
  menuItems: [] | Array<string>;
};

export type SiteProps = {
  title: string;
  description: string;
};
