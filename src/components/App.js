import { useEffect, useState } from 'react';
import Main from './Main';
import NavBar from './NavBar';
import Card from './Card';


const App = () =>{

  const [patients, setPatients] = useState([]);
  const [filterBy, setFilterBy] = useState('name');
  const [filterInput, setFilterInput] = useState('');

  const fetchPatients = async () => {
    const response = await fetch('http://localhost:3000/cards');
    const data = await response.json();
    setPatients(data);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const filteredPatientList = () => {
    if(!filterInput.trim()) return patients;
    const lowerFilterInput = filterInput.trim().toLowerCase();
    const newPatientsList = patients.filter(patient => {
      if(filterBy === "name") {
        return patient.patient_name.toLowerCase().includes(lowerFilterInput);
      } 
      return patient.arrhythmias.some(str => str.toLowerCase().includes(lowerFilterInput));
    })
    return newPatientsList;
  }

  const deckTodo = filteredPatientList().filter(patient => patient.status !== "DONE").map(patient => (
    <Card 
      key={patient.id}
      id={patient.id}
      patientName={patient.patient_name}
      status={patient.status}
      createdDate={patient.created_date}
      arrhythmias={patient.arrhythmias}
    />
  ));

  const deckDone = filteredPatientList().filter(patient => patient.status === "DONE").map(patient => (
    <Card 
      key={patient.id}
      id={patient.id}
      patientName={patient.patient_name}
      status={patient.status}
      createdDate={patient.created_date}
      arrhythmias={patient.arrhythmias}
    />
  ));

  const handleStatusChange = (id, boardName) => {

    //Change status when element dropped into a new board
    const newPatientsList = patients.map(patient => {
      if ((parseInt(id) === patient.id) &&
      ((boardName === "DONE" && patient.status !== "DONE") ||
      (boardName === "TODO" && (patient.status === "DONE")))) {
        patient.status = (patient.status === "DONE") ? "REJECTED" : "DONE";
      }
      return patient;
    })
    setPatients(newPatientsList);
  }

  const handleFilterInput = e => {
    setFilterInput(e.target.value);
  };

  const handleFilterBy = e => {
    setFilterBy(e.target.value);
  };

  return (
    <div className="app-container">
      <NavBar
        filterInput={filterInput}
        filterBy={filterBy}
        handleFilterInput={handleFilterInput}
        handleFilterBy={handleFilterBy}

      />
      <Main 
        deckDone={deckDone}
        deckTodo={deckTodo}
        handleStatusChange={handleStatusChange}
      />
    </div>
  )
};

export default App;