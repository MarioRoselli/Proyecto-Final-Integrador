//Presentación del nombre del sujeto en el pie de página, para asignarle un elemento 'js'.
const person = {
    firstName: "Peter",
    lastName: "Thompson Blake",
    id: 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };
  // Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
