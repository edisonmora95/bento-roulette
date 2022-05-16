export default function RecommendationsForm() {
    return (
        <div>
            <form>      
                <input name="address" type="text" class="feedback-input" placeholder="Current Address" /> 
                &nbsp;  
                <label><strong>Price Range</strong></label>
                <select class="form-select feedback-input" aria-label="Default select example">
                    <option selected value="$$$">Expensive</option>
                    <option value="$$">Regular</option>
                    <option value="$">Cheap</option>
                </select>
                <input class="button-59" type="submit" value="SUBMIT"/>
            </form>
        </div>
    );
}