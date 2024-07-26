export interface NavBarItems {
  unselectedIcon: string;
  selectedIcon: string;
  link: string;
}
export interface ToggleState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
export interface DataState {
  data: Object;
  setData: (newData: object) => void;
}
export interface AlertBoxProps extends ToggleState {
  icon: string;
  message: string;
  do: () => void;
}
