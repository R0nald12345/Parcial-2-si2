export class DocenteEnsenaDTO {
  constructor( gestion, id_docenteFacultad, id_materia) {
    this.gestion = parseInt(gestion);
    this.id_docenteFacultad = parseInt(id_docenteFacultad);
    this.id_materia = parseInt(id_materia);
  }
}