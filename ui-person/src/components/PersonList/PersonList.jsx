import { use, useState } from "react";
import User from "../User/User.jsx";
import Form_Person from "../../features/Person/Form_Person.jsx";
import Modal from 'react-modal';

export default function PersonList({ PersonList, deleteUser }) {
  const [show, setShow] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); //open - close modal
  // console.log(PersonList);
  return (
    <>
      {/* call component User */}
      {show && <User PersonList={PersonList} deleteUser = {deleteUser}/>}

      {/* Button Hide */}
      <div
        style={{display: "flex",gap: 10,alignItems: "center", flexDirection: "column",margin: 10}} >
        {show && `Total: ${PersonList.length} ${PersonList.length > 1 ? "persons" : "person"}`}
        <button onClick={() => setShow(!show)}>
          {show ? "Hide Data" : "Show Table"}
        </button>
        <button onClick={() => (setIsModalOpen(!isModalOpen))}>Create Person</button>
        
        <Modal isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)} 
        contentLabel="Person Form"
        className={"Modal"}>        
          <Form_Person isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} PersonList={PersonList} />
        </Modal>
      </div>
    </>
  );
  console.table(PersonList);
}
