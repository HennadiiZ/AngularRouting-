import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,  Router,  RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate{


    constructor(
        private authService: AuthService,
        //public authService: AuthService
        private router: Router
    ){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>   | Promise<boolean>  | boolean {
        //  return null as any
        return this.authService.isAuthenticated().then((isAuth) =>{
            if(isAuth) {
                return true
            }else{
                this.router.navigate(['/'], {
                    queryParams:{
                        auth: false
                    }
                })
            }
        })
    }
}