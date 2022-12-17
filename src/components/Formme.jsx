import React,{useState} from 'react'

export const Formme = () => {
const [resorse,setResorse]=useState("");
const [id,setId]=useState(1);

const handleSubmit=(e)=>{
e.preventDefault();


}
const resourceChange=(e)=>{
    setResorse(e.target.value);
}
const idChange=(e)=>{
    setId(e.target.value);
}

  return (
    <>
     <form onSubmit={handleSubmit}>
                <label htmlFor="resource">Search for:</label>
                <select name="resource" id="resource" onChange={resourceChange}>
                    <option value="" disabled>Please select resource:</option>
                    <option value="people">People</option>
                    <option value="planets" >Planets</option>
                    <option value="starships" >Starships</option>
                    <option value="vehicles" >Vehicles</option>
                    <option value="species">Species</option>
                </select>
                <label htmlFor="id">ID:</label>
                <input type="number" name="id" id="id" onChange={idChange} value={inputs.id} />
                <button>Search</button>
            </form>
    </>
  )
}
export default Formme;
