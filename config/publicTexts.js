var translationObj = {
  EN: {
    Form: [
      "Your Team Number",
      "Robot Team Number",
      "Test",
      "Practice Field",
      "Practice Match",
      "Qualification",
      "Quarterfinal",
      "Semifinal",
      "Final",
      "Match Number",
      "Start",
      "Back",
      "Single QR"
    ],
    EventTitles: [
      "Crossed Hab Line Lvl 1",
      "Crossed Hab Line Lvl 2",
      "Picked up Cargo",
      "Dropped Cargo",
      "Picked up Hatch",
      "Dropped Hatch",
      "Scored on Cargo Ship",
      "Failed on Cargo Ship",
      "Scored on Rocket Lvl 1",
      "Failed on Rocket Lvl 1",
      "Scored on Rocket Lvl 2",
      "Failed on Rocket Lvl 2",
      "Scored on Rocket Lvl 3",
      "Failed on Rocket Lvl 3",
      "Hab Climb Lvl 1",
      "Hab Climb Lvl 2",
      "Hab Climb Lvl 3",
      "Failed Hab Climb",
      "Played Defense",
      "Crossed Field"
    ],
    ButtonName: [
      "Crossed Hab Line Lvl 1",
      "Lvl 2",
      "Picked up Cargo",
      "Dropped Cargo",
      "Picked up Hatch",
      "Dropped Hatch",
      "Scored on Cargo Ship",
      "Failed",
      "Scored on Rocket Lvl 1",
      "Failed",
      "Scored on Rocket Lvl 2",
      "Failed",
      "Scored on Rocket Lvl 3",
      "Failed",
      "Hab Climb Lvl 1",
      "Lvl 2",
      "Lvl 3",
      "Failed",
      "Crossed Field",
      "Played Defense"
    ]
  },
  ES: {
    Form: [
      "Numero de Equipo",
      "Numero de Equipo del Robot",
      "Prueba",
      "Practica de Campo",
      "Match de Practica",
      "Match de Calificacion",
      "Cuartos de Final",
      "Semi-finales",
      "Final",
      "Numero de Match",
      "Iniciar",
      "Regresar",
      "Single QR"
    ],
    EventTitles: [
      "Cruzado Linea HAB Niv 1",
      "Cruzado Linea HAB Niv 2",
      "Carga Recuperad",
      "Carga Caida",
      "Hatch Recuperado",
      "Hatch Caido",
      "Puntaje en Cargo Ship",
      "Fallido en Cargo Ship",
      "Puntaje en Cohete Niv 1",
      "Fallido en Cohete Niv 1",
      "Puntaje en Cohete Niv 2",
      "Fallido en Cohete Niv 2",
      "Puntaje en Cohete Niv 3",
      "Fallido en Cohete Niv 3",
      "Hab Climb Niv 1",
      "Hab Climb Niv 2",
      "Hab Climb Niv 3",
      "Fallido Hab Climb",
      "Played Defense",
      "Crossed Field"
    ],
    ButtonName: [
      "Cruzado Linea HAB Niv 1",
      "Niv 2",
      "Carga Recuperad",
      "Carga Caida",
      "Hatch Recuperado",
      "Hatch Caido",
      "Puntaje en Cargo Ship",
      "Fallido",
      "Puntaje en Cohete Niv 1",
      "Fallido",
      "Puntaje en Cohete Niv 2",
      "Fallido",
      "Puntaje en Cohete Niv 3",
      "Fallido",
      "Hab Climb Niv 1",
      "Niv 2",
      "Niv 3",
      "Fallido",
      "Crossed Field",
      "Played Defense"
    ]
  }
};
var chosenTranslationObj = {};
if(localStorage.lang == null) {
  chosenTranslationObj = translationObj.EN;
}
else {
  chosenTranslationObj = translationObj[localStorage.lang];
}
