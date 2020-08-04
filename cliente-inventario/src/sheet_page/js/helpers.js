const selectorUbicacion = (valor) => {
  let ubicacion = "";
  switch (valor) {
    case "1":
      ubicacion = "BOLJOV-001/(Area Realidad Perdida)";
      break;
    case "2":
      ubicacion = "BOLJOV-002/(Area QD Bar)";
      break;
    case "3":
      ubicacion = "BOLJOV-003/(Area Tricaster)";
      break;
    case "4":
      ubicacion = "BOLJOV-004/(Area BOPLUS)";
      break;
    case "5":
      ubicacion = "BOLJOV-006/(Area Presentaciones)";
      break;
    case "6":
      ubicacion = "BOLJOV-005/(Area Vestuario)";
      break;
    case "7":
      ubicacion = "BOLJOV-007/(Area Estudio)";
      break;
    case "8":
      ubicacion = "BOLJOV-008/(Area QD SHOW)";
      break;
    case "9":
      ubicacion = "BOLJOV-009/(Area Cocina)";
      break;
    case "10":
      ubicacion = "BOLJOV-015/(Area Radio)";
      break;
    case "11":
      ubicacion = "BOLJOV-014/(Area Silvia)";
      break;
    case "12":
      ubicacion = "BOLJOV-013/(Area Freddy)";
      break;
    case "13":
      ubicacion = "BOLJOV-012/(Area Edicion)";
      break;
    case "14":
      ubicacion = "BOLJOV-011/(Area Soporte Tecnico)";
      break;
    case "15":
      ubicacion = "BOLJOV-010/(Area Pasillo)";
      break;
    default:
      break;
  }
  return ubicacion;
};

export { selectorUbicacion };
