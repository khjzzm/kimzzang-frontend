import * as React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import Input from '../../atoms/input/input';
import Button from '../../atoms/button/button';
import Pay from '../../organisms/pay/pay'
import {
    ContactWrapper,
    ContactPageTitle,
    ContactPagePay,
    ContactFromWrapper,
    InputGroup,
} from './style';


const SignupSchema = Yup.object().shape({
    firstName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    message: Yup.string().required('Required'),
});



const Contact = () => {
    return (
        <Formik
            initialValues={{firstName: '', email: '', message: ''}}
            onSubmit={(values, actions) => {
                setTimeout(() => {
                    console.log({values, actions});
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 700);
            }}
            validationSchema={SignupSchema}
            render={({
                         handleChange,
                         values,
                         errors,
                         handleBlur,
                         touched,
                         isSubmitting,
                     }) => (
                <>
                    <Form>
                        <ContactWrapper>

                            <ContactPagePay>
                                <h2>Pay</h2>
                                <Pay/>
                            </ContactPagePay>

                            <ContactPageTitle>
                                <h2>Contact</h2>
                                <p>
                                    StoryHub theme comes with a contact form built-in. You can use
                                    this form with Gatsbay Js service and get up to 50 submissions
                                    for free per form per month. Also, you can easily switch to
                                    another service if you want.
                                </p>
                            </ContactPageTitle>
                            <ContactFromWrapper>
                                <InputGroup>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        value={`${values.firstName}`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label="Name"
                                        notification={`${
                                            errors.firstName && touched.firstName
                                                ? errors.firstName
                                                : ''
                                            }`}
                                    />
                                    <Input
                                        type="email"
                                        name="email"
                                        value={`${values.email}`}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        label="Email"
                                        notification={`${
                                            errors.email && touched.email ? errors.email : ''
                                            }`}
                                    />
                                </InputGroup>
                                <Input
                                    type="textarea"
                                    name="message"
                                    value={`${values.message}`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Message"
                                    notification={
                                        errors.message && touched.message ? errors.message : ''
                                    }
                                />
                                <Button
                                    title="Submit"
                                    type="submit"
                                    isLoading={isSubmitting ? true : false}
                                    loader="Submitting.."
                                />
                            </ContactFromWrapper>
                        </ContactWrapper>
                    </Form>
                </>
            )}
        />
    );
};

export default Contact;
