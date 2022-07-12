export const words = [
  "Abuse",
  "Agent",
  "Adult",
  "Anger",
  "Apple",
  "Award",
  "Basis",
  "Beach",
  "Birth",
  "Block",
  "Blood",
  "Board",
  "Brain",
  "Bread",
  "Break",
  "Brown",
  "Buyer",
  "Cause",
  "Chain",
  "Chair",
  "Chest",
  "Chief",
  "Child",
  "China",
  "Claim",
  "Class",
  'Floor','Retro',
  'Doors','Donor'
];
export const randomNum = Math.floor(Math.random() * words.length);
export const ActualWord = words[words.length-1];
export const formattedWords = words.map((word) => word.toUpperCase());
export const guessingWords = formattedWords.filter(
  (word, i) => i !== randomNum
);
