/*Esta clase se creo para poder tener un poco mas de control en los Dialog que se utilizan
  para hacer operaciones CRUD en algunas pantallas
 */
export class DialogEventResponse {
  closeDialog!: boolean;
  eventCancel!: boolean;

  constructor(closeDialog: boolean, eventCancel: boolean){
    this.closeDialog = closeDialog;
    this.eventCancel = eventCancel;
  }
}
