import AsyncSelect from "react-select/async";
import { useState } from "react";

const Singleselect = () => {
    //usestate
    const [selectedOption, setSelectedOption] = useState(null);
    const [query, setQuery] = useState("");

    //handleSelection
    const handleChange = (value) => {
         setSelectedOption(value)
    }
    
    //load options using api call
    const loadOptions = () => {
        return fetch("https://jsonplaceholder.typicode.com/users")
              .then(res => res.json())
              .then(data => data.filter(result => JSON.stringify(result.name.toLowerCase()).includes(query))
               )
              
    };

    return (
        <div>
            <AsyncSelect
                cacheOptions 
                defaultOptions 
                isSearchable
                value={selectedOption}
                getOptionLabel={e => e.name}
                getOptionValue={e => e.id}
                loadOptions={loadOptions}
                onChange={handleChange}
                onInputChange={value => setQuery(value)}
            />
            <pre style={{fontSize: "17px"}}>you selected {selectedOption && <strong>{selectedOption.name}</strong>} whose id is {selectedOption && <strong style={{fontWeight: "1000"}}>{selectedOption.id}</strong>}</pre>
        </div>
    )
}





export default Singleselect;
























































/*import Select from "react-select";
import { useState} from "react";

const Singleselect = () => {
    //const database = "https://jsonplaceholder.typicode.com/users"
    //const [data, setData] = useState([]); 
    //const [input, setInput] = useState("");
    const [option, setOption] = useState([]);
    
    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            if(res.ok){
                return res.json();
            }
        })
        .then((response) => {
           setOption(response)
        })
        .catch(err => console.log(err))
    }
    
    fetchData();
    
    return(
        <div>
            {
            <Select options={
                option.map(user=> {
                   return {
                       value: user.name,
                       label: user.name
                   }
                })
            }
            />
        }
          <p>{ `You have selected ${} whose id is `}</p>


        </div>
    )
}*/
