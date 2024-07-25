export const randomAvatar = () => {
  const images = [
    "Ava1.png",
    "Ava2.png",
    "Ava3.png",
    "Ava4.png",
    "Ava5.png",
    "Ava6.png",
    "Ava7.png",
    "Ava8.png",
    "Ava9.png",
  ];
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};