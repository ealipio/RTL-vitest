export const splitCamelCase = ({ word }: { word: string }) =>
  word.replace(/\B([A-Z])\B/g, ' $1');
