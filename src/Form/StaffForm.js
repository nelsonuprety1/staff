import React from 'react';
import { useState } from 'react';
import '../index.css';

function StaffForm() {
  const [staffName, setStaffName] = useState('');
  const [hotelName, setHotelName] = useState('Hilton');
  const [shiftDate, setShiftDate] = useState('');
  const [shiftTime, setShiftTime] = useState('');
  const [dressCode, setDressCode] = useState('');
  const [address, setAddress] = useState('');
  const [contactPerson, setContactPerson] = useState('');

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
            onChange={e => setStaffName(e.target.value)}
          ></input>
        </label>
        <label>
          Hotel Name :{/* <input type="dropdown" placeholder="" /> */}
          <select
            value={hotelName}
            onChange={e => setHotelName(e.target.value)}
            required
          >
            <option value="hilton">Hilton</option>
            <option value="mariott">Mariott</option>
            <option value="holiday-inn">Holiday inn</option>
            <option value="Radison">Radison</option>
          </select>
        </label>

        <label>
          Shift Date :
          <input
            type="date"
            value={shiftDate}
            onChange={e => setShiftDate(e.target.value)}
            required
          />
        </label>
        <label>
          Shift Time:
          <input
            type="text"
            value={shiftTime}
            onChange={e => setShiftTime(e.target.value)}
            required
          />
        </label>
        <label>
          Dress Code :
          <input
            type="text"
            placeholder="Dress Code"
            value={dressCode}
            onChange={e => setDressCode(e.target.value)}
            required
          />
        </label>
        <label>
          Hotel Address :
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
          />
        </label>
        <label>
          Contact Person / Manager
          <input
            type="text"
            placeholder="Contact Person"
            value={contactPerson}
            onChange={e => setContactPerson(e.target.value)}
            required
          />
        </label>
        <button>Generate</button>
      </form>
      <p>Hello {staffName}.</p>
      <p>Your shift at {hotelName} is on,</p>
      <p>{shiftDate}</p>
      <p>{shiftTime}</p>
      <p>Dress code is {dressCode}.</p>
      <p>The address of hotel is {address}</p>
      <p>Contact person is {contactPerson}</p>
      <p>Please Confirm.</p>
      <p>Thank You</p>
    </div>
  );
}

export default StaffForm;
