export const determineDamage = (actionType) => {
  const actionMap = {
    move1: () => Math.floor(Math.random() * 8) + 1,
    move2: () => Math.floor(Math.random() * 12) + 1,
    move3: () => Math.floor(Math.random() * 15) + 1,
    special: () => Math.floor(Math.random() * 12) * 2 + 1,
  };
  const attackType = actionMap[actionType];
  return attackType ? attackType() : 0;
};
