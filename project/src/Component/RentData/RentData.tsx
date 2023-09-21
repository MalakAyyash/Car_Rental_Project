import React, { useEffect, useState } from 'react';
import { database } from '../Firebase/Firebase';
import { get, ref } from 'firebase/database';
import { useTable, useSortBy, usePagination  } from 'react-table';
import { FaCaretSquareUp, FaCaretSquareDown } from "react-icons/fa";
import './RentData.css';

export default function RentData() {
  const [rentData, setRentData] = useState({});
  const [filteredRentData, setFilteredRentData] = useState([]);
  const storedData = localStorage.getItem('userData');
  const userEmail = JSON.parse(storedData).Email;
  // Define columns // use memo to memoize the columns and data variables
  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'id' },
      { Header: 'Car', accessor: 'car' },
      { Header: 'From', accessor: 'from' },
      { Header: 'To', accessor: 'to' },
      { Header: 'Total', accessor: 'total', canSort: true },
    ],
    []
  );
  const data = React.useMemo(() => { //the data fetched from firebase
    return filteredRentData.map((item) => ({
      id: item.id,
      car: item.fname,
      from: item.from,
      to: item.to,
      total: item.cost,
    }));
  }, [filteredRentData]);
  useEffect(() => {
    const carRentRef = ref(database, 'carRent');
    get(carRentRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const carRentObject = snapshot.val();
          setRentData(carRentObject);
        } else {
          console.log('No data available.');
        }
      })
      .catch((error) => {
        console.error('Error getting data:', error);
      });
  }, []);
  useEffect(() => {
    if (userEmail && rentData) {
      const filteredData = Object.values(rentData).filter((item) => item.email === userEmail);
      setFilteredRentData(filteredData);
    }
  }, [userEmail, rentData]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canNextPage,
    canPreviousPage,
    pageOptions,
    nextPage,
    previousPage,
    state: { pageIndex}
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: 10 }//for pagination
    },
    useSortBy,//for sorting
    usePagination
  );
  return (
    <div className="container mt-4">
      <table {...getTableProps()} className="table table-striped table-striped">
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <FaCaretSquareDown />
                      ) : (
                        <FaCaretSquareUp />
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map(row => {
            prepareRow(row);

            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <div>
          <button  disabled={!canPreviousPage} onClick={() => previousPage()}>
            Previous Page
          </button>
          <button  disabled={!canNextPage} onClick={() => nextPage()}>
            Next Page
          </button>
        </div>
        <div>
          <span className="text-light">
            Page {pageIndex + 1} of {pageOptions.length}
          </span>
        </div>
      </div>
    </div>
  );
}