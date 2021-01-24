import React, {useState} from "react";
import "../../App.css";
import ReactToPrint from "react-to-print";

const IDMaker = () => {
  let componentRef = React.createRef(null);
  const [acNumber, setAcNumber] = useState();
  const [acType, setAcType] = useState();
  const [CustomerID, setCustomerID] = useState();
  const [CustomerName, setCustomerName] = useState();
  const [IFSC, setIFSC] = useState();
  const [Mobile, setMobile] = useState();
  const [BranchName, setBranchName] = useState();
  const [CustomerCare, setCustomerCare] = useState();
  const [file, setFile] = useState();
  return (
    <div class="">
      <div>
        <table>
          <tr>
            <td>
              <label>Account Type : </label>
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setAcType(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Account Number</label>
            </td>
            <td>
              <input
                type="number"
                onChange={(e) => {
                  setAcNumber(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Customer ID</label>
            </td>
            <td>
              <input
                type="number"
                onChange={(e) => {
                  setCustomerID(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Customer Name</label>
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setCustomerName(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>IFSC Code</label>
            </td>
            <td>
              <input
                type="number"
                onChange={(e) => {
                  setIFSC(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Mobile Number</label>
            </td>
            <td>
              <input
                type="number"
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Branch Name</label>
            </td>
            <td>
              <input
                type="text"
                onChange={(e) => {
                  setBranchName(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Customer Care Number</label>
            </td>
            <td>
              <input
                type="number"
                onChange={(e) => {
                  setCustomerName(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Upload Picture</label>
            </td>
            <td>
              <input
                type="file"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  setFile(e.target.files[0]);
                }}
              />
            </td>
          </tr>
        </table>
      </div>
      <br></br>
      <br></br>
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
          {" "}
          <ReactToPrint
            trigger={() => <button type="primary">Print</button>}
            content={() => componentRef}
          />
        </div>
        <div
          ref={(el) => {
            componentRef = el;
          }}
        >
          <div style={{display: "flex", justifyContent: "space-around"}}>
            <div>
              <div>
                <div>Account Type : </div>
                <div>{acType}</div>
              </div>
              <div>
                <div>Account Number : </div>
                <div>{acNumber}</div>
              </div>
              <div>
                <div>Customer ID : </div>
                <div>{CustomerID}</div>
              </div>
              <div>
                <div>Customer Name : </div>
                <div>{CustomerName}</div>
              </div>
              <div>
                <div>IFSC Code : </div>
                <div>{IFSC}</div>
              </div>
              <div>
                <div>Mobile Number : </div>
                <div>{Mobile}</div>
              </div>
              <div>
                <div>Branch Name : </div>
                <div>{BranchName}</div>
              </div>
              <div>
                <div>Customer Care : </div>
                <div>{CustomerCare}</div>
              </div>
            </div>

            <div>
              <img src={file} alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default IDMaker;
