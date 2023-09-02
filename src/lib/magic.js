import { Magic } from 'magic-sdk';

const createMagic = (key) => {
  console.log(key);
  // We make sure that the window object is available
  // Then we create a new instance of Magic using a publishable key
  return typeof window !== 'undefined' && new Magic(key);
};
console.log(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);

// Pass in your publishable key from your .env file
export const magic = createMagic(process.env.NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY);
console.log(magic);