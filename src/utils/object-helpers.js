export const updateObjInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map((i) => {
    if (i[objPropName] === itemId) {
      return { ...i, ...newObjProps };
    }
    return i;
  });
};
