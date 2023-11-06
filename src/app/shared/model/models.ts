export interface IAdmin {
	id: number,
	login: string,
	password: string,
	state: boolean
}

export interface IMaison {
	id: number,
	noms: string,
	tel: number,
	quartier: string,
	state: boolean
}

export interface IEnseignant {
	id: number,
	names: string,
	age: number,
	tel: number,
	domicile: string,
	niveau: string,
	state: boolean,
	matiere: string[]
}

export interface IContrat {
	id: number,
	date: Date,
	montant: number,
	matiere: string[],
	state: boolean,
	enseignant: IEnseignant,
	maison: IMaison
}

export interface IAdmin {
	id: number,
	login: string,
	password: string,
	state: boolean
}
