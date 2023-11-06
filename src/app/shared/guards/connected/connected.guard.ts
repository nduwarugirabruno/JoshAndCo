import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {GlobalVariables} from "../../global-variables";

@Injectable({
	providedIn: 'root'
})
export class ConnectedGuard implements CanActivate {

	constructor(private param: GlobalVariables, private router: Router) {
	}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		if (this.param.isConnected) {
			this.router.navigate(['admin']);
			return false;
		}

		return true;
	}

}
