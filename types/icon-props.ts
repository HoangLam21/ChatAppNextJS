export interface IconSquareSize {
  size: string;
  color: string;
}
export interface IconRecSize {
  x: string;
  y: string;
  color: string;
}

export interface NavBarItems {
  unselectedIcon: string;
  selectedIcon: string;
  link: string;
}
export interface UploadFileProps {
  isUploadOpen: boolean;
  setIsUploadOpen: (isOpen: boolean) => void;
}
export interface ProfileState {
  isProfileOpen: boolean;
  setIsProfileOpen: (isOpen: boolean) => void;
}
