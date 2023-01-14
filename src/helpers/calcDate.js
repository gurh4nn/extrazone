export const calcDate = (date) => {
  if (!date) return;
  const convertDate = new Date(
    date.replace(/(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3")
  );
  const currentDate = new Date();
  return Math.round((convertDate - currentDate) / (1000 * 60 * 60 * 24));
};
