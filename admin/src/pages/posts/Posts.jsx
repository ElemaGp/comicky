import style from "./posts.module.css"
import React, { useState } from 'react'
import { userRows } from "../../dummyData";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";

//so to explain how the table works. The "field" of each column represents the property of the "userRow" object it will contain. So if eg. the field is "email", it means that that coulumn (whose "headerName" you'll most likely name "Email") will have in the cells underneath it the "email" values of each userRow item. Now in the case where you dont want the value to be gotten directly using the "field", you can just give the field any name you like. Then create a "renderCell" where you basically write jsx to display whatever you want to in each cell underneath that column. To access any of the "userRow" properties from the renderCell, use "params.row.<thatProperty>".

const Posts = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className={style.userListUser}>
            <img className={style.userListImg} src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {/* <Link to={"/user/" + params.row.id}> */}
              <button className={style.userListEdit}>Edit</button>
            {/* </Link> */}
            <DeleteOutline
              className={style.userListDelete}
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
    
  return (
    <div className={style.userList}>
      <DataGrid
        rows={data}
        rowsPerPageOptions={[8]}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  )
}

export default Posts