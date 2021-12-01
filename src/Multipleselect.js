import AsyncSelect from "react-select/async";
import { useState } from "react";

const Multiselect = () => {
    //usestate
    const [selectedOption, SetSelectedOption] = useState(null)
    const [query, setQuery] = useState("");

    //handleSelection
    const handleChange = (value) => {
         SetSelectedOption(value)
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
                isMulti
                value={selectedOption}
                getOptionLabel={e => e.name}
                getOptionValue={e => e.id}
                loadOptions={loadOptions}
                onChange={handleChange}
                onInputChange={value => setQuery(value)}
            />
            <div>
                {selectedOption && selectedOption.map( sOption => {
                    return (
                    <pre style={{fontWeight: "1000", fontSize: "18px"}}>{sOption.name}</pre>
                    )
                }
                )
                }
            </div>
        </div>
    )
}


export default Multiselect