function customError(message){
  this.message=message;
  this.name="customError";
  this.stack=`${this.stack}: ${this.message}`;
}