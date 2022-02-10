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
      "Single QR",
      "Undo",
      "Do you want to stop?",
      "Stop Recording",
      "Finish Recording",
      "Continue Recording"
    ],
    EventTitles: [
      "Crossed Tarmac Line",
      "HP Shot Made",
      "Picked up Cargo",
      "Dropped Cargo",
      "Scored on Lower Hub",
      "Failed on Lower Hub",
      "Scored on Upper Hub",
      "Failed on Upper Hub",
      "Hangar Climb Low",
      "Hangar Climb Mid",
      "Failed Hangar Climb",
      "Hangar Climb High",
      "Hangar Climb Traversal",
      "Played Defense"
    ],
    ButtonName: [
      "Crossed Tarmac Line",
      "HP Shot Made",
      "Picked up Cargo",
      "Dropped Cargo",
      "Scored on Lower Hub",
      "Failed",
      "Scored on Upper Hub",
      "Failed",
      "Hangar Climb Low",
      "Mid",
      "Failed",
      "High",
      "Traversal",
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
      "Match Calificatorio",
      "Cuartos de Final",
      "Semi-finales",
      "Final",
      "Num. de Match",
      "Iniciar",
      "Regresar",
      "Un solo QR",
      "Deshacer",
      "Deseas detenerla?",
      "Parar Grabación",
      "Finalizar Grabación",
      "Continuar Grabación"
    ],
    EventTitles: [
      "Línea Asfaltada Cruzada",
      "HP Tiro Hecho",
      "Cargo Recogido",
      "Cargo Caida",
      "Puntaje en Cubo Inferior",
      "Fallido en Cubo Inferior",
      "Puntaje en Cubo Superior",
      "Fallido en Cubo Superior",
      "Hangar subida baja",
      "Hangar subida media",
      "Fallido Hangar Climb",
      "Hangar subida alta",
      "Hangar ascenso transversal",
      "Played Defense"
    ],
    ButtonName: [
      "Línea Asfaltada Cruzada",
      "HP Tiro Hecho",
      "Cargo Recogido",
      "Cargo Caida",
      "Puntaje en Cargo Ship",
      "Fallido",
      "Puntaje en Cohete Niv 1",
      "Fallido",
      "Hangar subida baja",
      "Media",
      "Fallido",
      "Alta",
      "Transversal",
      "Jugo Defense"
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
