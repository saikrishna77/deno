import React, {useState} from "react";
import "../../App.css";

const Denominator = () => {
  const [c2000, setc2000] = useState(0);
  const [c500, setc500] = useState(0);
  const [c100, setc100] = useState(0);
  const [c50, setc50] = useState(0);
  const [c20, setc20] = useState(0);
  const [c10, setc10] = useState(0);
  const [c05, setc05] = useState(0);
  const [c01, setc01] = useState(0);

  return (
    <div className="main-div">
      <table>
        <tr>
          <th>Currency</th>
          <th></th>
          <th>Units</th>
          <th>Total</th>
        </tr>
        <tr>
          <th>2000</th>
          <th>X</th>
          <th>
            <input
              type="number"
              onChange={(e) => {
                setc2000(e.target.value);
              }}
            />
          </th>
          <th>
            <label>{c2000 * 2000} Rs</label>
          </th>
        </tr>
        <tr>
          <th>500</th>
          <th>X</th>
          <th>
            <input
              type="number"
              onChange={(e) => {
                setc500(e.target.value);
              }}
            />
          </th>
          <th>
            <label>{c500 * 500} Rs</label>
          </th>
        </tr>
        <tr>
          <th>100</th>
          <th>X</th>
          <th>
            <input
              type="number"
              onChange={(e) => {
                setc100(e.target.value);
              }}
            />
          </th>
          <th>
            <label>{c100 * 100} Rs</label>
          </th>
        </tr>
        <tr>
          <th>50</th>
          <th>X</th>
          <th>
            <input
              type="number"
              onChange={(e) => {
                setc50(e.target.value);
              }}
            />
          </th>
          <th>
            <label>{c50 * 50} Rs</label>
          </th>
        </tr>
        <tr>
          <th>20</th>
          <th>X</th>
          <th>
            <input
              type="number"
              onChange={(e) => {
                setc20(e.target.value);
              }}
            />
          </th>
          <th>
            <label>{c20 * 20} Rs</label>
          </th>
        </tr>
        <tr>
          <th>10</th>
          <th>X</th>
          <th>
            <input
              type="number"
              onChange={(e) => {
                setc10(e.target.value);
              }}
            />
          </th>
          <th>
            <label>{c10 * 10} Rs</label>
          </th>
        </tr>{" "}
        <tr>
          <th>5</th>
          <th>X</th>
          <th>
            <input
              type="number"
              onChange={(e) => {
                setc05(e.target.value);
              }}
            />
          </th>
          <th>
            <label>{c05 * 50} Rs</label>
          </th>
        </tr>
        <tr>
          <th>1</th>
          <th>X</th>
          <th>
            <input
              type="number"
              onChange={(e) => {
                setc01(e.target.value);
              }}
            />
          </th>
          <th>
            <label>{c01 * 1} Rs</label>
          </th>
        </tr>
        <tr>
          <td colSpan="2">
            Count :{" "}
            {Number(c2000) +
              Number(c01) +
              Number(c05) +
              Number(c10) +
              Number(c20) +
              Number(c50) +
              Number(c100) +
              Number(c500)}
          </td>
          <td colSpan="2">
            Total :{" "}
            {Number(c2000 * 2000) +
              Number(c01 * 1) +
              Number(c05 * 5) +
              Number(c10 * 10) +
              Number(c20 * 20) +
              Number(c50 * 50) +
              Number(c100 * 100) +
              Number(c500 * 500)}{" "}
            Rs
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Denominator;
