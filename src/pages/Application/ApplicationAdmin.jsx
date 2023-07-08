import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import './Admin.css';
import { useNavigate } from 'react-router';

const Admin = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchDoc = async () => {
      let list = [];
      let list2 = [];
      try {
        const res = await getDocs(collection(db, 'Application Form'));
        res.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDoc();
  }, []);

  const handleClick = (id) => {
    console.log(id);
    navigate(id);
  };

  const find = () => {};

  console.log(data);
  return (
    <div className="admin">
      <div className="tableDiv"></div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Document ID</th>
            <th>Name</th>
            <th> </th>
          </tr>
        </thead>
        {data &&
          data.map((doc) => (
            <tbody key={doc.id}>
              <tr>
                <td>{doc.id}</td>

                <td>
                  {Object.entries(doc.PersonalInfoData).filter(
                    ([key]) => key === '1'
                  ).length === 0
                    ? 'no data'
                    : Object.entries(doc.PersonalInfoData).filter(
                        ([key]) => key === '1'
                      )}
                </td>

                <td>
                  <button
                    className="tableBttn"
                    onClick={() => handleClick(doc.id)}
                  >
                    View
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
      </Table>
    </div>
  );
};

export default Admin;
