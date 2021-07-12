export const addressPreview = (address: string): string => {
  return `${address.substr(0, 4)}...${address.substr(address.length - 3, 3)}`;
};

export const dollarToReadable = (dollarAmount: number): string => {
  return dollarAmount.toFixed(2);
};

export const parseBigNumber = (bigNumberStr: string): number => {
  const numString = bigNumberStr.split("");
  numString.splice(numString.length - 9, 0, ".");
  return parseFloat(numString.join(""));
};

export const formatNumber = (number: number) => {
  const numString = number? number.toString(): "";
  const preDec = numString.split(".")[0];
  const postDec = numString.split(".")[1];
  return preDec.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") + "." + postDec;
};
