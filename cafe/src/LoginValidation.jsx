function Validation(values) {
    let error = {};
  
  
    if (values.email === "") {
      error.email = "Name should not be empty";
    } else {
      error.email = "";
    }
    //Si el email esta vacio, viene un mensaje de que esta vacio. Si no cumple las reglas de arriba, dira que no hay match.
    //Si no hay errores, entonces no se enviará mensaje.
  
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else {
      error.password = "";
    }
    //Lo mismo que con email
  
    return error;
  }
  
  export default Validation;
  