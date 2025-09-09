import Header from "./components/Header/Header.jsx";
import PersonList from "./components/PersonList/PersonList.jsx";
import Footer_Person from "./features/Footer/Footer_Person.jsx"; 
import { useState, useEffect, use } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  // Delete User
  function deleteUser(id) {
    var newData = data.filter((u) => u.id !== id);
    setData(newData);
  }

  // useEffect(() => {
  //   getPersonList();
  // }, []);

  async function getPersonList() {
    try {
      const response = await fetch(import.meta.env.VITE_API_URL + "/Person/list?startIndex=0&endIndex=9");
      const json = await response.json();
      console.log("Fetched data response:", json);
      if (json.isSuccess) {
        setData(json.data);
      } else {
        console.error("API call was not successful:", json.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  return (
    <div className="app">
      <Header title="Person List" />
      <main>
        <PersonList PersonList={data} deleteUser={deleteUser} />
      </main>
      <Footer_Person />
    </div>
  );
}
export default App;
