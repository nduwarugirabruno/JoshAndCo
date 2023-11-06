import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

@Component({
	selector: 'app-contracts',
	templateUrl: './contracts.page.html',
	styleUrls: ['./contracts.page.scss'],
	standalone: true,
	imports: [IonicModule, CommonModule, FormsModule]
})
export class ContractsPage implements OnInit {

	constructor() {
	}

	ngOnInit() {
	}

}
