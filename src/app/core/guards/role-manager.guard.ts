import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoleGuard implements CanLoad {

//   constructor(private authService: AuthService, private router: Router) {}

//   canLoad(route: Route, segments: UrlSegment[]): boolean {
//     const currentUserString = localStorage.getItem('currentUser');

//     if (currentUserString) {
//       const currentUser = JSON.parse(currentUserString);

//       // Check if currentUser has admin role
//       if (currentUser.role === 'admin') {
//         // User is authorized to load the admin profile
//         console.log('User is loading the admin component');
//         return true;
//       } else {
//         // User is not authorized to load the admin profile, but is going to load the default profile which in this case is the Manager profile
//         console.log('User is loading the manager component');
//         return false;
//       }
//     } else {
//       this.router.navigateByUrl('/login');
//       console.log(
//         'No currentUser found in local storage, currently you are redirected to login component'
//       );
//       return false;
//     }
//   }
// }

export const roleManager: CanMatchFn = (route, state) => {
  const router = inject(Router);
  const currentUserString = localStorage.getItem('currentUser');

  if (currentUserString) {
    const currentUser = JSON.parse(currentUserString);

    // Check if currentUser has admin role
    if (currentUser.role === 'admin') {
      // User is authorized to load the admin profile
      console.log('User is loading the admin component');

      return true;
    } else {
      // User is not authorized to load the admin profile, but is going to load the default profile which in this case is the Manager profile
      console.log('User is loading the manager component');
      return false;
    }
  } else {
    router.navigateByUrl('/login');
    console.log(
      'No currentUser found in local storage, currently you are redirected to login component'
    );
    return false;
  }
};
