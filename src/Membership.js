import React from "react"

function Membership() {
  return (
    <div className="membership">
      <div className="membership_top_section">
        <h2>Membership</h2>
      </div>
      <div className="membership_form">
        <div className="membership_flex_conainer">
          <div className="user_info">
            <div className="name">
              <label>Name</label> <br />
              <input placeholder="First...." type="text" className="name_input"/>
              <input placeholder="Last...." type="text" className="name_input"/>
            </div>
            <div className="user_contact">
              <label>Contact</label> <br />
              <input placeholder="Phone" type="number" className="contactInput"/>
              <input placeholder="E mail" type="email" className="contactInput"/>
            </div>
          </div>
          <div className="living">
            <div className="living_notice">This list only contains cities and states which have silver gym.</div>          <div className="living_form">
              <label>Select a city-state</label> <br />
              <select>
                <option>Vijaywada, Andhra Pradesh</option>
                <option>Visakhapatnam, Andhra Pradesh</option>
                <option>Guntur, Andhra Pradesh</option>
                <option>Guwahati, Assam</option>
                <option>Silchar, Assam</option>
                <option>Jorhat, Assam</option>
                <option>New Delhi, Delhi</option>
                <option>Gurugram, Haryana</option>
                <option>Faridabad, Haryana</option>
                <option>Bengaluru, Karnataka</option>
                <option>Hubballi-Dharwad, Karnataka</option>
                <option>Mysuru, Karnataka </option>
                <option>Indore, Madhya Pradesh</option>
                <option>Gwalior, Madhya Pradesh</option>
                <option>Bhopal, Madhya Pradesh</option>
                <option>Mumbai, Maharashtra</option>
                <option>Aurangabad, Maharashtra</option>
                <option>Nagpur, Maharashtra</option>
                <option>Pune, Maharashtra</option>
                <option>Shillong, Meghalaya</option>
                <option>Chandigarh, Punjab</option>
                <option>Lahore, Punjab</option>
                <option>Ajmer, Rajasthan</option>
                <option>Jaipur, Rajasthan</option>
                <option>Jodhpur, Rajasthan</option>
                <option>Chennai/Madras, Tamil Nadu</option>
                <option>Hyderabad, Telangana</option>
                <option>Nizambad, Telangana</option>
              </select>
            </div>
          </div>
        </div>
        <button>Submit</button>
      </div>
    </div>
  )
}

export default Membership;