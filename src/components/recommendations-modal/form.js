import { Button } from "@mui/material";
import { useState } from "react";

export default function RecommendationsForm(props) {
    const {
        submitHandler,
    } = props;
    const [priceRange, setPriceRange] = useState("$");
    const [address, setAddress] = useState("");

    const onSubmitClick = () => {
        submitHandler(priceRange, address);
    };

    const onAddressChange = (e) => {
        setAddress(e.target.value);
    };
    const onPriceChange = (e) => {
        setPriceRange(e.target.value);
    };
    return (
        <div>
            <form>      
                <input name="address" type="text" class="feedback-input" placeholder="Current Address" onChange={onAddressChange}/> 
                &nbsp;  
                <label><strong>Price Range</strong></label>
                <select class="form-select feedback-input" aria-label="Default select example" onChange={onPriceChange}>
                    <option selected value="$$$">Expensive</option>
                    <option value="$$">Regular</option>
                    <option value="$">Cheap</option>
                </select>
                <Button class="button-59" onClick={onSubmitClick}>Submit</Button>
            </form>
        </div>
    );
}