import { Button, TextField} from "@mui/material";
import { useState } from "react";

export default function RecommendationsForm(props) {
    
    const {
        submitHandler,
        isLoading,
        error
    } = props;
    const [priceRange, setPriceRange] = useState("all");
    const [address, setAddress] = useState("");

    const inputStyles = [{
        width: "100%",
        marginBottom: "15px",
        boxSizing: "border-box",
    },
    {
        '&:focus': {
            border: "2px solid black"
        }
    },
    {
        '& .MuiOutlinedInput-root::before': {
            color: "black", 
            borderRadius: "5px", 
            lineHeight: "22px", 
            backgroundColor: "transparent", 
            border: "2px solid black", 
            transition: "all 0.3s", 
            padding: "13px", 
            outline: "0"
            }
    },
];

    const buttonStyles= [
            {
              alignItems: "center", 
              backgroundColor: "#ffd404", 
              border: "2px solid #000", 
              boxSizing: "border-box", 
              color: "#000", 
              cursor: "pointer", 
              display: "inline-flex", 
              fill: "#000", 
              fontFamily: "Inter,sans-serif", 
              fontSize: "16px", 
              fontWeight: "600", 
              height: "48px", 
              justifyContent: "center", 
              letterSpacing: "-.8px", 
              lineHeight: "24px", 
              minWidth: "140px", 
              outline: "0", 
              padding: "0 17px", 
              textAlign: "center", 
              textDecoration: "none", 
              transition: "all .3s", 
              userSelect: "none", 
              WebkitUserSelect: "none", 
              touchAction: "manipulation"
            },
            {'&:focus': {
              color: "#171e29"
            }},
            {'&:hover': {
              backgroundColor: "#171e29", 
              color: "#ffd404", 
              borderColor: "#ffd404", 
              fill: "#ffd404"
            }},
            {'&:active': {
              backgroundColor: "#171e29", 
              color: "#ffd404", 
              borderColor: "#ffd404", 
              fill: "#ffd404"
            }}
    ]



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
                <TextField id="address" placeholder="Your address here" onChange={onAddressChange} helperText={error} error={!!error} sx={inputStyles} InputProps={{sx: {border: !error ? '2px solid black': '0px', borderRadius: '5px',}}}/> 
                <br/>
                <label class="price-range-label"><strong >Price Range</strong></label>
                <select class="form-select feedback-input" aria-label="Price Range" onChange={onPriceChange}>
                    <option value="all" selected>All Price ranges</option>
                    <option value="$$$$">$$$$</option>
                    <option value="$$$">$$$</option>
                    <option value="$$">$$</option>
                    <option value="$">$</option>
                </select>
                <Button disabled={isLoading} class="button-59" onClick={onSubmitClick} sx={buttonStyles}>Spin</Button>
            </form>
        </div>
    );
}