import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Router} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import { MaisonService } from '../services/maison/maison.service';
import { IMaison } from '../shared/model/models';

@Component({
	selector: 'app-rehearsal-house',
	templateUrl: './rehearsal-house.page.html',
	styleUrls: ['./rehearsal-house.page.scss'],
	standalone: true,
	imports: [IonicModule, CommonModule, FormsModule]
})
export class RehearsalHousePage implements OnInit {

    listMaison!: IMaison[];
    public searchedMaison: IMaison[] = [];

    constructor(private maisonService: MaisonService, private router: Router) {
    }

    private _searchedHouse = '';

    public get searchedHouse(): string {
        return this._searchedHouse;
    }

    public set searchedHouse(filter: string) {
        this._searchedHouse = filter;
        this.searchedMaison = this.searchedHouse ? this.searchingHouse(this.searchedHouse) : this.listMaison;

    }

    ngOnInit(): void {
        this.maisonService.getAll().subscribe({
            next: maisons => {
                this.listMaison = maisons;
                this.searchedMaison = maisons
            },
            error: err => {
                console.log('Error: ', err);
            },
        });
    }

	detail(id: number) {
		this.router.navigate(['/tabs/rehearsal-house', id]);
	}

	addRehearsalHouse() {
		this.router.navigate(['/tabs/add-rehearsal-house']);
	}

    private searchingHouse(critere: string): IMaison[] {
        critere = critere.toLocaleLowerCase();
        return this.listMaison.filter(
            (Maison: IMaison) => (
                String(Maison.tel).toLocaleLowerCase().indexOf(critere) != -1
                || Maison.noms.toLocaleLowerCase().indexOf(critere) != -1
                || Maison.quartier.toLocaleLowerCase().indexOf(critere) != -1
            ),
        );

    }
}
