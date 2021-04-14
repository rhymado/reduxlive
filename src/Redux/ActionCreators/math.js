export const addition = (addBy) => {
  return {
    type: "ADD",
    payload: addBy,
  };
};

export const substraction = (subBy) => {
  return {
    type: "SUB",
    payload: subBy,
  };
};

export const multiplication = (mulBy) => {
  return {
    type: "MUL",
    payload: mulBy,
  };
};

export const division = (divBy) => {
  return {
    type: "DIV",
    payload: divBy,
  };
};
