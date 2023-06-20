import React,{useRef} from 'react';
import '../../App.css';
import { useState } from 'react';
import emailjs from 'emailjs-com';
export default function SignUp() {
  
    const [companyName, setCompanyName] = useState('');
    const [productName, setProductName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [gradeOfReagent, setGradeOfReagent] = useState('');
    const [city, setCity] = useState('');
    const [requiredPacking, setRequiredPacking] = useState('');
    const [country, setCountry] = useState('');
   const [requiredQuantity, setRequiredQuantity] = useState('');
   const [email, setEmail] = useState('');

   const form = useRef();
   const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_pz6qclt', 'template_cr9q6el',form.current, 'dog7qx2HLuTJT5g9f')
      .then((result) => {
        console.log(result.text);
        resetForm();
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

const resetForm = () => {
    setCompanyName('');
    setProductName('');
    setContactPerson('');
    setGradeOfReagent('');
    setCity('');
    setRequiredPacking('');
    setCountry('');
    setRequiredQuantity('');
    setEmail('');
  };

  return (
    <>
    <div className='sign-up'>
    <h1>GET IN TOUCH</h1><br></br>
    </div>
    <form className="contact-form"  ref={form} onSubmit={handleSubmit}>
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        id="companyName"
        name="companyName"
        value={companyName}
        required
        onChange={(e) => setCompanyName(e.target.value)}
      />

      <label htmlFor="productName">Product Name</label>
      <input
        type="text"
        id="productName"
        name="productName"
        value={productName}
        required
        onChange={(e) => setProductName(e.target.value)}
      />

      <label htmlFor="contactPerson">Contact Person</label>
      <input
        type="text"
        id="contactPerson"
        name="contactPerson"
        value={contactPerson}
        required
        onChange={(e) => setContactPerson(e.target.value)}
      /><br></br>

      <label htmlFor="gradeOfReagent">Grade of Reagent </label>
      <input
        type="text"
        id="gradeOfReagent"
        name="gradeOfReagent"
        value={gradeOfReagent}
        required
        onChange={(e) => setGradeOfReagent(e.target.value)}
      /><br></br>

<label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        name="city"
        value={city}
        required
        onChange={(e) => setCity(e.target.value)}
      /><br></br>

<label htmlFor="requiredPacking">Required Packing</label>
      <input
        type="text"
        id="requiredPacking"
        name="requiredPacking"
        value={requiredPacking}
        required
        onChange={(e) => setRequiredPacking(e.target.value)}
      /><br></br>

<label htmlFor="country">Country</label>
      <input
        type="text"
        id="country"
        name="country"
        value={country}
        required
        onChange={(e) => setCountry(e.target.value)}
      /><br></br>

<label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      /><br></br>

<label htmlFor="requiredQuantity">Required Quantity</label>
      <input
        type="text"
        id="requiredQuantity"
        name="requiredQuantity"
        value={requiredQuantity}
        required
        onChange={(e) => setRequiredQuantity(e.target.value)}
      /><br></br>

      <div>
        <button className='submit-button' type="submit">Submit</button><br></br>
        <button  className='reset-button' type="button" onClick={resetForm}>Reset</button>
      </div>
    </form>
    </>
  );
    
}

// TODO: Add Support email