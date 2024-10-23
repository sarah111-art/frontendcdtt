import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useToasts } from "react-toast-notifications";
import { v4 as uuidv4 } from "uuid";

import { ModalFrom } from "../Components/modalform";
import "../styles/Product.css"; // Import tệp CSS
const Payment = () => {

  const MY_BANK = {
    BANK_ID: "MB",
    ACCOUNT_NO: "0989807405",
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    orderId: uuidv4(),
    user: "",
    cartItems: "",
    customerPhoneNumber: "",
    name,
    email,
    city,
    streetAddress,
    orderStatus: "PENDING",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowModal(true);
  };
  const { addToast } = useToasts();
  const submitForm = async () => {
    const formData = {
      orderId: uuidv4(),
      user:"",
      cartItems: "",
      customerPhoneNumber: "",
      name,
      email,
      city,
      streetAddress,
      orderStatus: "PENDING",
    };
    setPaymentInfo(formData);
    if (
      !formData.cartItems ||
      !formData.customerPhoneNumber ||
      !name ||
      !email ||
      !city ||
      !streetAddress
    ) {
      addToast("the field form not value", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
<div className="container">
    <h2 className="title">CheckOut Information</h2>
    <Form className="form" id="checkoutForm" onSubmit={handleSubmit}>
        <Form.Group controlId="formName" className="form-group">
            <Form.Label className="label">Name</Form.Label>
            <Form.Control className="form-input"
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(ev) => setName(ev.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formEmail" className="form-group">
            <Form.Label className="label">Email</Form.Label>
            <Form.Control className="form-input"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formCity" className="form-group">
            <Form.Label className="label">City</Form.Label>
            <Form.Control className="form-input"
                type="text"
                placeholder="Enter your city"
                value={city}
                onChange={(ev) => setCity(ev.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formStreetAddress" className="form-group">
            <Form.Label className="label">Street Address</Form.Label>
            <Form.Control className="form-input"
                type="text"
                placeholder="Enter your street address"
                value={streetAddress}
                onChange={(ev) => setStreetAddress(ev.target.value)}
            />
        </Form.Group>

        <Form.Group controlId="formPhone" className="form-group">
            <Form.Label className="label">Phone</Form.Label>
            <Form.Control className="form-input"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(ev) => setPhone(ev.target.value)}
            />
        </Form.Group>

        <Button
            type="submit"
            onClick={() => {
                submitForm();
            }}
            className="button"
            style={{ marginTop: "20px" }}
        >
            Continue to payment
        </Button>
    </Form>
    <ModalFrom
        showModal={showModal}
        submitForm={submitForm}
        handleClose={handleClose}
        setShowModal={setShowModal}
        paymentInfo={paymentInfo}
        MY_BANK={MY_BANK}
    />
</div>

  );
};

export default Payment;
