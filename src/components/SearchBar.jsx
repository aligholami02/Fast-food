import { BsSearch } from 'react-icons/bs';
import { useState } from "react";

export const SearchBar = ({ searchItems }) => {
    const [value, setValue] = useState('');
    const onSubmit = (e) => {
        e.preventDefault();
        searchItems(value)
    }

   
    return (

        <form onSubmit={onSubmit} className="search flex-fill d-flex align-items-center mr-3" action="">
            <div className="input-group">
                <input dir="rtl" className="form-control rounded-1 pe-5 border-success bg-warning" type="text" placeholder="چی میخوای؟" 
                    value={value} onChange={event => setValue(event.target.value)}/>
                <BsSearch className="position-absolute top-50 translate-middle-y text-muted me-3 ms-2" />
            </div>
        </form>
    )
}