import React from "react";

const First = () => {
  return (
    <>
      <form>
        <label>
          Your Name <span style={{ color: "red" }}>*</span>
        </label>
        <input type="text" name="name" placeholder="Enter your Name"></input>
        <br></br>
        <label>
          Father Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your Father Name"
        ></input>
        <br></br>
        <label>
          Mother Name <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Enter your Mother Name"
        ></input>
        <br></br>
        <label>
          Aadhar Number <span style={{ color: "red" }}>*</span>
        </label>
        <input
          type="number"
          name="Aadhar"
          placeholder="Enter your Aadhar Number"
        ></input>
        <br></br>
        <label>Mobile Number</label>
        <input
          type="number"
          name="mobile"
          placeholder="Enter Mobile Number"
        ></input>
        <br></br>
        <label>Email Id</label>
        <input type="email" name="mail" placeholder="Enter Email Id"></input>
        <br></br>
        <label>Date Of Birth</label>
        <input type="date"></input>
        <br></br>
        <label>Gender</label>
        <input type="radio" name="gender" value={"male"}></input> Male
        <input type="radio" name="gender" value={"female"}></input> Female
        <input type="radio" name="gender" value={"other"}></input> Other
        <br></br>
        <label>Religion</label>
        <select name="rel">
          <option disabled selected value={""}>
            -- Select --
          </option>
          <option value={"hindu"}>Hindu</option>
          <option value={"islam"}>Islam</option>
          <option value={"sikh"}>Sikh</option>
          <option value={"other"}>Other</option>
        </select>
        <br></br>
        <label>Blood Type</label>
        <select name="Blood Type">
          <option disabled selected value={""}>
            -- Select --
          </option>
          <option value={"AB+"}>AB+</option>
          <option value={"AB-"}>AB-</option>
          <option value={"B+"}>B+</option>
          <option value={"B-"}>B-</option>
          <option value={"O+"}>O+</option>
          <option value={"O-"}>O-</option>
        </select>
        <br></br>
        <label>Image</label>
        <input type="file"></input>
        <br></br>
        <label>Post</label>
        <input
          type="text"
          name="Post"
          placeholder="Enter Your Village Post"
        ></input>
        <br></br>
        <label>PS</label>
        <input
          type="text"
          name="PS"
          placeholder="Enter Your Village PS"
        ></input>
        <br></br>
        <label>District</label>
        <input
          type="text"
          name="Dist"
          placeholder="Enter Your Village Dist"
        ></input>
        <br></br>
        <label>State</label>
        <select name="State">
          <option disabled selected value={""}>
            -- Select Your State --
          </option>
          <option value={"West Bengal"}>WEST BENGAL</option>
          <option value={"Patna"}>PATNA</option>
          <option value={"Maharastra"}>MAHARASTRA</option>
          <option value={"Delhi"}>DELHI</option>
          <option value={"Punjab"}>PUNJAB</option>
        </select>
        <br></br>
        <label>Pin Code</label>
        <input type="number" name="PinCode" placeholder="Enter Pincode"></input>
        <br></br>
        <label>Xth Class Percentage(%)</label>
        <input
          type="number"
          name="Percentage"
          placeholder="Enter Your Xth percentage"
        ></input>
        <br></br>
        <label>Xth Class Passing Year</label>
        <input
          type="number"
          name="PassYear"
          placeholder="Enter Your Xth passing year"
        ></input>
        <br></br>
        <label>Xth Board</label>
        <select name="Xth Board">
          <option disabled selected value={""}>
            -- Select Your Xth Board--
          </option>
          <option value={"ICSE"}>ICSE</option>
          <option value={"CBSE"}>CBSE</option>
          <option value={"State Board"}>State Board</option>
        </select>
        <br></br>
        <label>XII th Class Percentage(%)</label>
        <input
          type="number"
          name="Percentage"
          placeholder="Enter Your XIIth percentage"
        ></input>
        <br></br>
        <label>XII th Class Passing Year</label>
        <input
          type="number"
          name="PassYear"
          placeholder="Enter Your XII th passing year"
        ></input>
        <br></br>
        <label>XII th Board</label>
        <select name="XII th Board">
          <option disabled selected value={""}>
            -- Select Your XII th Board--
          </option>
          <option value={"ICSE"}>ICSE</option>
          <option value={"CBSE"}>CBSE</option>
          <option value={"State Board"}>State Board</option>
        </select>
        <br></br>
        <label>Graduation Overall Percentage(%)</label>
        <input
          type="number"
          name="Percentage"
          placeholder="Enter Your Graduation Overall Percentage"
        ></input>
        <br></br>
        <label>Graduation Passing Year</label>
        <input
          type="number"
          name="PassYear"
          placeholder="Enter Your Graduation Passing Year"
        ></input>
        <br></br>
        <label>Xth Board</label>
        <select name="Xth Board">
          <option disabled selected value={""}>
            -- Select Your Xth Board--
          </option>
          <option value={"ICSE"}>ICSE</option>
          <option value={"CBSE"}>CBSE</option>
          <option value={"State Board"}>State Board</option>
        </select>
        <br></br>
        <label>Password</label>
        <input type="password"></input>
        <br></br>
        <button>Submit</button>
      </form>
    </>
  );
};

export default First;
