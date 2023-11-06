import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {Router} from "@angular/router";
import {GlobalsVariables} from "../shared/globals-variables";

@Component({
	selector: 'app-admin',
	templateUrl: './admin.page.html',
	styleUrls: ['./admin.page.scss'],
	standalone: true,
	imports: [IonicModule, CommonModule, FormsModule]
})
export class AdminPage implements OnInit {

	public visibility = false;
	public adminName!: string;
	// public subtitle!: string;
	protected settingView = 0;

	constructor(private param: GlobalsVariables, private route: Router) {
	}

	ngOnInit(): void {
		//this.adminName = this.param.currentUserData.login;
		console.log('Initialization complete...');

		setInterval("getState()", 1000);
	}

	// toggleSubTitle(event: any) {
	//     this.subtitle = event.value;
	// }

	toggleVisibility() {
		this.visibility = !this.visibility;
	}

	toggleSettings(number: number) {
		this.settingView = number;
	}

	getState() {
		if (!this.param.isConnected) {
			this.route.navigate(['signin']);
		}
	}
}
