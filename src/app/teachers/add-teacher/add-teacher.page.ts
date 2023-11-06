import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IEnseignant } from 'src/app/shared/model/models';
import { EnseignantService } from 'src/app/services/enseignant/enseignant.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.page.html',
  styleUrls: ['./add-teacher.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AddTeacherPage implements OnInit {

    isLoading = false;

    form!: FormGroup;

    private enseignant!: IEnseignant;

    //On vérifie que chaque champ soit rempli
    constructor(private fb: FormBuilder, private enseignantService: EnseignantService, private router: Router) {
        this.form = this.fb.group({
            names: ['', Validators.required],
            age: ['', Validators.required],
            tel: ['', Validators.required],
            domicile: ['', Validators.required],
            niveau: ['', Validators.required],
            matiere: ['', Validators.required]
        });
    }

	ngOnInit() {
	}

    //soumission du formulaire
    submit() {
        if (this.form.valid) {

            this.isLoading = true;
            this.form.value.age = Number(this.form.value.age);
            this.form.value.tel = Number(this.form.value.tel);

            this.enseignant = {
                names: this.form.value.names, age: this.form.value.age, tel: this.form.value.tel,
                domicile: this.form.value.domicile, niveau: this.form.value.niveau, state: false,
                matiere: (((this.form.value.matiere).replace(';', ',')).replace(' ', '')).split(','), id: 0
            }
            try {
                this.enseignantService.create(this.enseignant).subscribe({
                    next: data => {
                        console.log("Entreprise enregistrée", this.form.value);
                        setTimeout(() => {
                            this.router.navigate(['/teachers']);
                        }, 2000);
                    },
                    error: err => {
                        console.log('Erreur: ', err.error);
                        setTimeout(() => {
                            this.router.navigate(['/teachers']);
                        }, 2000);
                    }
                });
            } catch (error: any) {
                alert(error)
            }
        }
    }
}
