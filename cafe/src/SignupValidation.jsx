function Validation(values) {
    let error = {};

    if (values.firstName === "") {
        error.firstName = "First name should not be empty";
      } else {
        error.firstName = "";
      }

      if (values.lastName === "") {
        error.lastName = "Last name should not be empty";
      } else {
        error.lastName = "";
      }
  
    if (values.email === "") {
      error.email = "Email should not be empty";
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
  