export interface IconSquareSize {
  size: string;
  color: string;
}
export interface IconRecSize {
  x: string;
  y: string;
  color: string;
}
export interface NavBarItems<T> {
  label: string;
  link: string;
  icons:T
}
