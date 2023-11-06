import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {IEnseignant} from "../shared/model/models";
import {EnseignantService} from "../services/enseignant/enseignant.service";
import {RouterLink, Router} from "@angular/router";

@Component({
	selector: 'app-teachers',
	templateUrl: './teachers.page.html',
	styleUrls: ['./teachers.page.scss'],
	standalone: true,
	imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class TeachersPage implements OnInit {

	listEnseignant!: IEnseignant[];
	public searchedEnseignant: IEnseignant[] = [];

	constructor(private enseignantService: EnseignantService, private router: Router) {
	}

	private _searchedTeacher = '';

	public get searchedTeacher(): string {
		return this._searchedTeacher;
	}

	public set searchedTeacher(filter: string) {
		this._searchedTeacher = filter;
		this.searchedEnseignant = this.searchedTeacher ? this.searchingTeacher(this.searchedTeacher) : this.listEnseignant;

	}

	ngOnInit(): void {
		this.enseignantService.getAll().subscribe({
			next: enseignants => {
				this.listEnseignant = enseignants;
				this.searchedEnseignant = enseignants;
			},
			error: err => {
				console.log('Error: ', err);
			},
		});
	}

	addTeacher() {
		this.router.navigate(['/tabs/add-teacher']);
	}

	detail(id: number) {
		this.router.navigate(['/tabs/teachers', id]);
	}

	private searchingTeacher(critere: string): IEnseignant[] {
		critere = critere.toLocaleLowerCase();
		return this.listEnseignant.filter(
			(enseignant: IEnseignant) => (
				String(enseignant.tel).toLocaleLowerCase().indexOf(critere) != -1
				|| enseignant.names.toLocaleLowerCase().indexOf(critere) != -1
				|| enseignant.domicile.toLocaleLowerCase().indexOf(critere) != -1
				|| enseignant.niveau.toLocaleLowerCase().indexOf(critere) != -1
				|| enseignant.matiere.toString().toLocaleLowerCase().indexOf(critere) != -1)
		);

	}

}
