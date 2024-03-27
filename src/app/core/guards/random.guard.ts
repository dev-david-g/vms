import { CanMatchFn } from '@angular/router';

export const randomGuard: CanMatchFn = (route, state) => {
  const randomNumber = Math.floor(Math.random() * 99) + 1;
  console.log('Random number: ' + randomNumber)
  return 50 > randomNumber || true;
};
