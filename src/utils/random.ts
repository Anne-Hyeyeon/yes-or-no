export const getRandomItem = <T>(items: readonly T[] | T[]): T => {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
};
