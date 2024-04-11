import React, { useEffect, useState} from 'react'
import { NavLink,useParams,useNavigate } from 'react-router-dom'


const Editpage = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

        const navigate =  useNavigate("");

        const [inpval, setINP] = useState({
            countryname : "",
            capitalname : ""
        })  
     
        const setdata = (e)=>{
            console.log(e.target.id, e.target.value);
            const {name,value} = e.target;
            setINP((preval)=>{
                return {
                    ...preval,
                    [name]:value 
                }
            }) 
        }

        const { id } = useParams("");
        console.log(id);

        const getdata = async (e) => {
            const res = await fetch(`/getuser/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = await res.json();
            console.log(data);

            if(res.status === 422 || !data){
                console.log("error");

            }else{
                setINP(data)
                console.log("data added");
            }
        }

        useEffect(()=> {
            getdata();
        }, []);

        const updateuser = async(e) => {
            e.preventDefault();

            const {countryname,capitalname} = inpval;
            console.log(inpval, 'inpval')

            const res2 = await fetch( `/updateuser/${id}`,{
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({
                    countryname,capitalname
                })
            });

            const data2 = await res2.json();
            console.log(data2);

            
            if(res2.status === 422 || !data2){
                alert("fill the data");

            }else{
                alert("add data");
                navigate("/managepage");
            }
        }

  return (
    <div className="container">

    <form className="mt-4 col-lg-6">
        <div className="mb-3">
            <label htmlFor="countryname" className="form-label">Country Name : </label>
            <input type="text" className="form-control" defaultValue={inpval.countryname} name="countryname" onChange={setdata}id="countryname" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
            <label htmlFor="capitalname"  className="form-label">Capital Name : </label>
            <input type="text"  className="form-control" defaultValue={inpval.capitalname} name="capitalname" onChange={setdata}id="capitalname"  aria-describedby="emailHelp" /> 
        </div>


        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="submit" onClick={updateuser} className="btn btn-primary mt-3">Update</button>
            <NavLink to="/managepage" className="btn btn-danger mt-3">Cancel</NavLink>
            
        </div> 

    </form>
</div>
  )
}

export default Editpage