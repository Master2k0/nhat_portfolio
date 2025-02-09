export type IItem = {
  icon: string;
  alt: string;
};

export type ISidebarItem = {
  id: string;
  href: string;
  name: string;
  status: {
    normal: IItem;
    hover: IItem;
    active: IItem;
  };
};

export enum StatusEnum {
  normal = "normal",
  hover = "hover",
  active = "active",
}
