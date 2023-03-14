import React, {useState} from "react";
import { Button, Card, CardBody, Form, Label, Input, FormGroup } from "reactstrap";

//Form for the user to change their profile's information
const ProfileForm = ({update, currUser}) => {
    const INITIAL_STATE = {
        firstName: currUser.firstName,
        lastName: currUser.lastName,
        email: currUser.email
    }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await update(currUser.username, formData.firstName, formData.lastName, formData.email);
    }

    return (
        <section className="col-md-4">
            <Card>
                <CardBody className="text-center">
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="firstName">
                                First Name
                            </Label>
                                <Input
                                    id="firstName"
                                    name="firstName" 
                                    type="text" 
                                    value={formData.firstName}
                                    onChange={handleChange} 
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label for="lastName">
                                Last Name
                            </Label>
                                <Input
                                    id="lastName"
                                    name="lastName" 
                                    type="text" 
                                    value={formData.lastName}
                                    onChange={handleChange} 
                                />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">
                                Email
                            </Label>
                                <Input
                                    id="email"
                                    name="email" 
                                    type="text" 
                                    value={formData.email}
                                    onChange={handleChange} 
                                />
                        </FormGroup>
                        <Button color="primary" >Register</Button>
                    </Form>
                </CardBody>
            </Card>
        </section>
    );
}

export default ProfileForm;