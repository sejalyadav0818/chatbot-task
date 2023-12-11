import { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import "../assets/style/demo.css";
import NavBar from "../components/NavBar";

const ShowData = ({ searchText }) => {
  const navigate = useNavigate();
  const [dataToEdit, setDataToEdit] = useState(null);
  const [data, setData] = useState([]);
  const totalRecordParPage = 3;
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState({ columns: "username", sortType: "asc" });
  const startIndex = (currentPage - 1) * totalRecordParPage;
  const endIndex = startIndex + totalRecordParPage;
  useEffect(() => {
    const fetchedData = JSON.parse(localStorage.getItem("FormData")) || [];
    setData(fetchedData);
  }, []);

  function sortData(columns) {
    let newSortType = sort.sortType;
    if (sort.columns === columns) {
      newSortType = sort.sortType === "asc" ? "desc" : "asc";
    } else {
      newSortType = "asc";
    }

    const sortData = [...data].sort((a, b) => {
      if (newSortType === "asc") {
        return String(a[columns]).localeCompare(String(b[columns]));
      } else {
        return String(b[columns]).localeCompare(String(a[columns]));
      }
    });
    setData(sortData);
    setSort({ columns: columns, sortType: newSortType });
  }

  const FiilterData = data.filter(
    (serachedText) =>
      serachedText.username
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(searchText.toLowerCase().replace(/\s/g, "")) ||
      serachedText.email
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(searchText.toLowerCase().replace(/\s/g, "")) ||
      serachedText.password
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(searchText.toLowerCase().replace(/\s/g, "")) ||
      serachedText.confirmPassword
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(searchText.toLowerCase().replace(/\s/g, "")) ||
      serachedText.state
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(searchText.toLowerCase().replace(/\s/g, "")) ||
      serachedText.city
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(searchText.toLowerCase().replace(/\s/g, "")) ||
      serachedText.address
        .toLowerCase()
        .replace(/\s/g, "")
        .includes(searchText.toLowerCase().replace(/\s/g, ""))
  );

  useEffect(() => {
    const fetchedData = JSON.parse(localStorage.getItem("FormData")) || [];
    setData(fetchedData);
  }, []);

  function deleteData(idToDelete) {
    let check = window.confirm("Are you sure you want to delete ?");
    if (check) {
      const updatedData = data.filter((item) => item.id !== idToDelete);
      setData(updatedData);
      localStorage.setItem("FormData", JSON.stringify(updatedData));
    }
  }

  function editData(idToEdit) {
    const selectedData = data.find((item) => item.id === idToEdit);
    setDataToEdit(selectedData);
    navigate("/edit/" + idToEdit);
  }
  return (
    <>
     <NavBar/>
      <table class="table mt-5">
        <thead class="thead-dark">
          <tr>
            <th
              scope="col"
              onClick={() => sortData("image")}
              className="bold-text"
            >
              Picture
            </th>
            <th
              scope="col"
              onClick={() => sortData("username")}
              className="bold-text"
            >
              Username
            </th>
            <th
              scope="col"
              onClick={() => sortData("email")}
              className="bold-text"
            >
              Email
            </th>
            <th
              scope="col"
              onClick={() => sortData("city")}
              className="bold-text"
            >
              City
            </th>
            <th
              scope="col"
              onClick={() => sortData("state")}
              className="bold-text"
            >
              State
            </th>
            <th
              scope="col"
              onClick={() => sortData("address")}
              className="bold-text"
            >
              Address
            </th>
            <th scope="col" className="bold-text">
              Gender
            </th>
            <th scope="col" colSpan={3} className="bold-text">
              More
            </th>
          </tr>
        </thead>
        <tbody>
          {FiilterData.slice(startIndex, endIndex).map((item, index) => {
            return (
              <tr key={index}>
                <td>
                  <img
                    src={item.image}
                    alt="Uploaded"
                    width="50"
                    height="50"
                    class="rounded-circle"
                  />
                </td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.state}</td>
                <td>{item.city}</td>
                <td>{item.address}</td>
                <td>{item.gender}</td>
                <td>
                  {" "}
                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <Button
                      variant="primary"
                      className="btn btn-primary me-md-8"
                      onClick={() => editData(item.id)}
                    >
                      Edit
                    </Button>
                    &nbsp;&nbsp;&nbsp;
                    <Button
                      variant="danger"
                      className="btn btn-danger me-md-7"
                      onClick={() => deleteData(item.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <button
              class="page-link"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              {currentPage}
            </a>
          </li>
          <button
            class="page-link"
            onClick={() => {
              setCurrentPage((prev) => {
                const newPage = Math.min(
                  prev + 1,
                  Math.ceil(FiilterData.length / totalRecordParPage)
                );
                return newPage;
              });
            }}
            disabled={
              currentPage === Math.ceil(FiilterData.length / totalRecordParPage)
            }
          >
            Next
          </button>
        </ul>
      </nav>
    </>
  );
};

export default ShowData;
