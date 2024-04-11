import React, {useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const Addpage = () => {

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

    const addinpdata = async(e) =>{
        e.preventDefault();

        console.log(inpval, ' inpval ')

        const {countryname,capitalname} = inpval;

        const res = await fetch("/addpage",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                countryname,capitalname
            })
        });

        const data = await res.json();
        console.log(data);

        if(res.status === 400 || !data){
            alert("error");
            console.log("error");
        }else{
            alert("data added");
            // console.log("data added");
            navigate("/managepage");
        }
    }


    return (
        <div className="container">

            <form className="mt-4 col-lg-6">
                <div className="mb-3">
                    <label htmlFor="countryname" className="form-label">Country Name : </label>
                    <input type="text" className="form-control" defaultValue={inpval.countryname} name="countryname" onChange={setdata} id="countryname" aria-describedby="emailHelp" />
                </div>

                <div className="mb-3">
                    <label htmlFor="capitalname" className="form-label">Capital Name : </label>
                    <input type="text"  className="form-control" defaultValue={inpval.capitalname} name="capitalname" onChange={setdata} id="capitalname" aria-describedby="emailHelp" />
                </div> 


                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button type="submit" onClick={addinpdata} className="btn btn-primary mt-3">Add Country</button>
                    <NavLink to="/managepage" className="btn btn-danger mt-3">Cancel</NavLink>
                    
                </div>

            </form>
        </div>
    )
}

export default Addpage