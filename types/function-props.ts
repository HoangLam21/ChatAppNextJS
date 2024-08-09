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
export interface UpdateBase64Image extends ToggleState{
  base64:string
}
export interface AlertBoxProps extends ToggleState {
  icon: string;
  message: string;
  do: () => void;
}
