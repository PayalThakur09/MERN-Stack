import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom'

const Managepage = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  const getdata = async() =>{

    const res = await fetch("/getdata",{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
    });

    const data = await res.json();
    console.log(data);

    if(res.status === 422| !data){
        console.log("error");

    }else{
        setUserdata(data)
        console.log("get data");
    }
}
 
useEffect(()=> {
  getdata();
},[])

const deleteuser = async (id) => {

   const res2 = await fetch(`/deleteuser/${id}`,{
    method: "DELETE",
    headers: {
      "Content-Type":"application/json"
    }
   });

   const deletedata = await res2.json();
   console.log(deletedata);

   if(res2.status === 422 || !deletedata){
      console.log("error");
   }else{
     console.log("deleted");
     getdata();
   }
}

  return (
    <div className="container">
        
        <div className="add_btn1 ">
           <NavLink to="/" className="btn btn-primary">Home</NavLink>
           <NavLink to="/addpage"><button type="button" className="btn btn-primary">Add</button></NavLink>
        </div>

        <div> 
        <h3 className="heading mt-5">List of countries : </h3>
        <table className="table table-borderless mt-4">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Capital</th>
            <th scope="col"></th>
          </tr> 
        </thead>
        <tbody>
          {
            getuserdata.map((element,id)=> {
              return(
                <>
                <tr> 
                  <th scope="row">{id+1}</th>
                  <td>{element.countryname}</td>
                  <td>{element.capitalname}</td>
                  <td className="add_btn2">
                    <NavLink to={`/editpage/${element._id}`}><button className="btn btn-primary">Edit</button></NavLink>
                    <button className="btn btn-danger" onClick={()=> deleteuser(element._id)} >Delete</button>
                  </td>
                </tr>
                </>
              )
            })
          }
          
        </tbody>
      </table>
        </div>
    </div>
  )
}

export default Managepage