import React from 'react';
import { useState } from 'react';
import '../index.css';

function StaffForm() {
  const [staffName, setStaffName] = useState('');
  const [hotelName, setHotelName] = useState('');
  const [shiftDate, setShiftDate] = useState('');
  const [shiftTime, setShiftTime] = useState('');
  const [dressCode, setDressCode] = useState('');
  const [address, setAddress] = useState('');
  const [contactPerson, setContactPerson] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const staffObj = {
      staffName,
      hotelName,
      shiftDate,
      shiftTime,
      dressCode,
      address,
      contactPerson,
    };
    console.log(staffObj);
  }

  return (
    <div className="staffing">
      <h1>Staff Generator</h1>
      <form onSubmit={handleSubmit}>
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
          Hotel Name :
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
      </form>
      <div className="renderedStaff">
        <section>
          <p>Hello {staffName}.</p>
          <p>Your shift at {hotelName} is on,</p>
          <p>{shiftDate}</p>
          <p>From : {shiftTime}</p>
          <p>Dress code : {dressCode}.</p>
          <p>The address of hotel : {address}</p>
          <p>Contact person : {contactPerson}</p>
          <p>Please Confirm.</p>
          <p>Thank You</p>
        </section>
      </div>
    </div>
  );
}

export default StaffForm;
