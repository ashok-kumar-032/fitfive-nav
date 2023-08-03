import React from "react";
import { Container } from "react-bootstrap";
const Formsubmit = () => {
  const [inputData, setData] = React.useState({
    Name: "",
    email: "",
    number: "",
  });
  const userInput = (e) => {
    const myName = e.target.name;
    const value = e.target.value;
    // const { myName, value } = e.target;
    setData({ ...inputData, [myName]: value });
  };
  const Formsubmission = (e) => {
    e.preventDefault();
    setData({ Name: "", email: "", number: "" });
    console.log(inputData);
  };
  return (
    <>
      <Container className="py-5">
        <form onSubmit={Formsubmission}>
          <label className="ms-5 pe-1">Name</label>
          <input
            onChange={userInput}
            type="text"
            name="Name"
            value={inputData.Name}
            placeholder="Name"
          />
          <label className="ms-5 pe-1 my-2">Email</label>
          <input
            onChange={userInput}
            type="text"
            name="email"
            value={inputData.email}
            placeholder="Email"
          />
          <label className="ms-5 pe-1 my-2">Number</label>
          <input
            onChange={userInput}
            type="number"
            name="number"
            value={inputData.number}
            placeholder="Number"
          />
          <button type="submit" className="bg-black text-white ms-5">
            Submit
          </button>
        </form>
      </Container>
    </>
  );
};
export default Formsubmit;
