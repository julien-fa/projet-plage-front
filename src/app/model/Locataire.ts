export class Locataire {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  password: string = '';

  constructor(nom: string, prenom: string, email: string, password: string) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
  }
}
