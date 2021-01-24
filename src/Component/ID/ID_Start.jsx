import React from "react";
import "../../App.css";
const IDMaker = () => {
  return (
    <div class="">
      <div>
        <table>
          <tr>
            <td>
              {" "}
              <label>Account Type : </label>
            </td>{" "}
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Account Number</label>
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Customer ID</label>
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Customer Name</label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>IFSC Code</label>
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Mobile Number</label>
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Branch Name</label>
            </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Customer Care Number</label>
            </td>
            <td>
              <input type="number" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Upload Picture</label>
            </td>
            <td>
              <input type="file" />
            </td>
          </tr>
        </table>
      </div>
      <div>
        <div></div>
        <div>Image</div>
      </div>
    </div>
  );
};
export default IDMaker;
