import React from 'react';
import { useState } from 'react';
import '../index.css';

function StaffForm() {
  const [staffName, setStaffName] = useState('');

  return (
    <div className="staffing">
      <h1>Staff Generator</h1>
      <form>
        <label>
          Staff Name :
          <input
            type="text"
            placeholder="Staff Name"
            value={staffName}
            required
          ></input>
        </label>
        <label>
          Hotel Name :{/* <input type="dropdown" placeholder="" /> */}
          <select>
            <option value="hilton">Hilton</option>
            <option value="mariott">Mariott</option>
            <option value="holiday-inn">Holiday inn</option>
            <option value="Radison">Radison</option>
          </select>
        </label>
        {/* <br /> */}
        <label>
          Shift Date :
          <input type="date" required />
        </label>
        <label>
          Dress Code :
          <input type="text" placeholder="Dress Code" required />
        </label>
        <label>
          Hotel Address :
          <input type="text" placeholder="Address" required />
        </label>
        <label>
          Contact Person / Manager
          <input type="text" placeholder="Contact Person" required />
        </label>
        <button>Generate</button>
      </form>
    </div>
  );
}

export default StaffForm;
