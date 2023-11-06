import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MaisonService } from 'src/app/services/maison/maison.service';
import { IMaison } from 'src/app/shared/model/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-rehearsal-house',
  templateUrl: './add-rehearsal-house.page.html',
  styleUrls: ['./add-rehearsal-house.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AddRehearsalHousePage implements OnInit {

    isLoading = false;
    form!: FormGroup;
    private maison!: IMaison;

    //On vérifie que chaque champ soit rempli
    constructor(private fb: FormBuilder, private maisonService: MaisonService, private route: Router) {
        this.form = this.fb.group({
            noms: ['', Validators.required],
            tel: ['', Validators.required],
            quartier: ['', Validators.required],
        });
    }

	ngOnInit() {
	}

    //soumission du formulaire
    submit() {
        if (this.form.valid) {

            this.isLoading = true;
            this.form.value.tel = Number(this.form.value.tel);

            this.maison = {
                noms: this.form.value.noms, quartier: this.form.value.quartier,
                tel: this.form.value.tel, state: false, id: 0
            }
            try {
                this.maisonService.create(this.maison).subscribe({
                    next: data => {
                        console.log("Maison enregistrée", this.form.value);
                        setTimeout(() => {
                            this.route.navigate(['/house-tutoring']);
                        }, 2000);
                    },
                    error: err => {
                        console.log('Erreur: ', err.error);
                        setTimeout(() => {
                            this.route.navigate(['/house-tutoring']);
                        }, 2000);
                    }
                });
            } catch (error: any) {
                alert(error.error);
            }
        }
    }
}
