import { useEffect, useState } from 'react';
import Userdata from './Components/Userdata';
import Pagination from './Components/Pagination';
import './App.css';

const API = "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02";

function App() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10); // Display 10 users per page

  const fetchUsers = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.features && data.features.length > 0) {
        setUsers(data.features);
      }
      console.log(data.features);
    } catch (e) {
      console.error('Error fetching data:', e);
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <table border={2}>
        <thead>
          <tr>
            <th>Sr.no</th>
            <th>Id</th>
            <th>Type</th>
            <th>Title</th>
            <th>Place</th>
            <th>Mag</th>
            <th>Status</th>
            <th>Time</th>
            <th>Updated</th>
          </tr>
        </thead>
        <tbody>
          <Userdata users={currentUsers} currentPage={currentPage} usersPerPage={usersPerPage} />
        </tbody>
      </table>
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </>
  );
}

export default App;
