import "./Form_Person.css";
import { useState } from "react";
import CalAge from "../../utils/calAge.jsx";
import { subYears, format } from "date-fns";

// console.log(CalAge);
export default function Form_Person({
  isModalOpen,
  setIsModalOpen,
  PersonList,
}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [bday, setBday] = useState("");
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const [address, setAddress] = useState("");

  const textAge = formatAge(age); // แปลงอายุให้อยู่ในรูปแบบที่ต้องการ
  const maxDate = format(subYears(new Date(), 1), "yyyy-MM-dd"); // กำหนดอายุขั้นต่ำ 1 ปี
  function handleSubmit(e) {
    e.preventDefault();
    const person = {
      id: PersonList.length + 1,
      firstName: firstname,
      lastName: lastname,
      age: age.years,
    };
    PersonList.push(person);
    // Close the modal after saving
    setIsModalOpen(false);
  }

  function handleBirthdayChange(e) {
    const newBday = e.target.value;
    setBday(newBday);
    setAge(CalAge(newBday));
    console.log(age);
  }

  function formatAge({ years, months, days }) {
    if (years >= 2) {
      return `${years} year`; // >= 2 ขวบ → โชว์เฉพาะปี
    }
    if (years === 0 && months === 0) {
      return `${days} Day`; // ยังไม่ครบเดือน → โชว์วัน
    }
    return `${years > 0 ? years + " Year " : ""}${months} Month ${days} Day`;
    // เด็กเล็ก < 2 ขวบ → โชว์ปี+เดือน+วัน
  }

  return (
    <section>
      <div className="head_form">
        <h2>Person Form</h2>
        <button onClick={() => setIsModalOpen(false)}>&times;</button>
      </div>
      <form onSubmit={handleSubmit}>
        {/* เพิ่ม div เพื่อจัดกลุ่ม Firstname และ Lastname */}
        <div className="name-group">
          <div className="input-wrapper">
            <label htmlFor="fname">Firstname</label>
            <input
              type="text"
              id="fname"
              value={firstname}
              required
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lname">Lastname</label>
            <input
              type="text"
              id="lname"
              value={lastname}
              required
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
        </div>
        <label htmlFor="bday">Birthday</label> {/*display bday */}
        <input
          type="date"
          id="bday"
          value={bday}
          required
          onChange={handleBirthdayChange}
          max={maxDate} // กำหนดอายุขั้นต่ำ 1 ปี
        />
        <span id="age">Age: {textAge}</span> {/* display age */}
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          rows="4"
          cols="50"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>
        <div>
          <button type="submit">SAVE</button>
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            id="cancel"
          >
            CANCEL
          </button>
        </div>
      </form>
    </section>
  );
}
