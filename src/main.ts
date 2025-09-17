import "./style.css";

type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

//APARTADO 1
// (A) Lista de paciente de pediatria

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
  );
};

console.log(obtenPacientesAsignadosAPediatria(pacientes));

//(B) Lista de pacientes de pediatria menores de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (paciente: Pacientes): boolean =>
      paciente.especialidad === "Pediatra" && paciente.edad < 10
  );
};

console.log(obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes));

// APARTADO 2
// Activar protocolo de URGENCIA

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  let activarProctolo = false;

  activarProctolo = pacientes.some(
    (paciente: Pacientes): boolean =>
      paciente.frecuenciaCardiaca > 100 && paciente.temperatura > 39
  );

  return activarProctolo;
};

console.log(
  " Tenemos que activar el protocolo de urgencia ? : " +
    activarProtocoloUrgencia(pacientes)
);

// APARTADO 3
// Reasignar los pacientes del Pediatra a Medico de Familia

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  const nuevaLista: Pacientes[] = pacientes.map((paciente: Pacientes) => {
    if (paciente.especialidad === "Pediatra") {
      return { ...paciente, especialidad: "Medico de familia" };
    } else {
      return paciente;
    }
  });

  return nuevaLista;
};

console.log(reasignaPacientesAMedicoFamilia(pacientes));

//APARTADO 4
// comprobar si el Pediatra tiene pacientes asignados

const HayPacientesDePediatria = (pacientes: Pacientes[]): boolean => {
  let pediatraACasa = false;

  pediatraACasa = pacientes.some(
    (paciente: Pacientes): boolean => paciente.especialidad === "Pediatra"
  );

  return pediatraACasa;
};

console.log(
  " El pediatra puede irse a casa ?:" + HayPacientesDePediatria(pacientes)
);
