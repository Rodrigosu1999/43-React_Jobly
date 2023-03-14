import React, {useState} from "react";
import { Button, Form, Label, Input, FormGroup } from "reactstrap";

//Form for the user to filter the companies displayed
const SearchCompanyForm = ({getCompaniesFiltered}) => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        getCompaniesFiltered(searchInput);
        setSearchInput("");
    }

    return (
        <section className="col-md Search-Form">
            <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="name">
                            Search by minEmployees, maxEmployees or name:
                            </Label>
                                <Input
                                    id="name"
                                    name="name" 
                                    type="text" 
                                    value={searchInput}
                                    onChange={handleChange} 
                                />
                        </FormGroup>
                        <Button color="primary" >Filter</Button>
                        <p>*Reset filters by clicking at filters with a blank input</p>
                    </Form>
                    
        </section>
    );
}

export default SearchCompanyForm;