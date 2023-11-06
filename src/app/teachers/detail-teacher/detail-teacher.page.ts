import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { IEnseignant, IContrat } from 'src/app/shared/model/models';
import { EnseignantService } from 'src/app/services/enseignant/enseignant.service';

@Component({
  selector: 'app-detail-teacher',
  templateUrl: './detail-teacher.page.html',
  styleUrls: ['./detail-teacher.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailTeacherPage implements OnInit {

    public errMsg!: string; total: number = 0; lenght!: number;

    public enseignant!: IEnseignant | undefined;

    public listContrats!: IContrat[];

    constructor(private enseignantService: EnseignantService, private route: ActivatedRoute, private router: Router) {
    }

	back() {
		this.router.navigate(['/tabs/teachers']);
	}

	seaContract(id: number) {
		this.router.navigate(['/tabs/contracts', id]);
	}

    ngOnInit(): void {
        const userID = Number(this.route.snapshot.paramMap.get("id"));

        this.enseignantService.getAll().subscribe({
                next: enseignant => {
					const teach = enseignant.find(ens => ens.id == userID);
					if (teach) {
						this.enseignant = teach;
					}
                },
                error: err => this.errMsg = err
            }
        );

        this.enseignantService.getContracts(userID).subscribe({
            next: value => {
				this.listContrats = value;
				this.lenght = this.listContrats.length;
				this.listContrats.forEach(contract => {
					this.total += contract.montant;
				});
            },
            error: err => {
                console.log('Error: ', err);
            }
        });

    }

}
