export interface MenuProps {
  menuToggle: () => void;
  menuItems: Array<string>;
}

export type MenuListProps = {
  menuItems: [] | Array<string>;
};
