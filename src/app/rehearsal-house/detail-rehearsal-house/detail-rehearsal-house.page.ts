import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { MaisonService } from 'src/app/services/maison/maison.service';
import { IMaison, IContrat } from 'src/app/shared/model/models';

@Component({
  selector: 'app-detail-rehearsal-house',
  templateUrl: './detail-rehearsal-house.page.html',
  styleUrls: ['./detail-rehearsal-house.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailRehearsalHousePage implements OnInit {

    public errMsg!: String; lenght!: number;

    public maison: IMaison | undefined = <IMaison>{};

    public currentUserData: IMaison | undefined;

    public listContrats: IContrat[] | undefined;

    constructor(private maisonService: MaisonService, private route: ActivatedRoute, private router: Router) {
    }

	back() {
		this.router.navigate(['/tabs/rehearsal-house']);
	}

	seaTeacher(id: number) {
		this.router.navigate(['/tabs/teachers', id]);
	}

    ngOnInit(): void {
        const userID = Number(this.route.snapshot.paramMap.get("id"));

        this.maisonService.getAll().subscribe({
                next: maison => {
                    this.maison = maison.find(ms => ms.id == userID);
                    this.currentUserData = this.maison;
                },
                error: err => this.errMsg = err
            }
        );

        this.maisonService.getContracts(userID).subscribe({
            next: value => {
                this.listContrats = value;
				this.lenght = this.listContrats.length;
            },
            error: err => {
                console.log('Error: ', err);
            }
        })

        console.log("On Init..." + userID);
    }

}
