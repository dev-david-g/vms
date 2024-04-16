import { CanDeactivateFn, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> = (
  component: CanComponentDeactivate
) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};

export interface CanComponentDeactivate {
  canDeactivate: () => CanDeactivateType;
}

export type CanDeactivateType =
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree;
