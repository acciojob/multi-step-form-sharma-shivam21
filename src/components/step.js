import React from 'react';

const Step = ({ step, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <>
          <h2>Step 1: User Details</h2>
          <input
            id="first_name"
            name="first_name"
            type="text"
            placeholder="First Name"
            value={formData.first_name}
            onChange={handleChange}
          />
          <input
            id="last_name"
            name="last_name"
            type="text"
            placeholder="Last Name"
            value={formData.last_name}
            onChange={handleChange}
          />
        </>
      )}

      {step === 2 && (
        <>
          <h2>Step 2: Car Details</h2>
          <input
            id="model"
            name="model"
            type="text"
            placeholder="Car Model"
            value={formData.model}
            onChange={handleChange}
          />
          <input
            id="car_price"
            name="car_price"
            type="number"
            placeholder="Car Price"
            value={formData.car_price}
            onChange={handleChange}
          />
        </>
      )}

      {step === 3 && (
        <>
          <h2>Step 3: Payment</h2>
          <input
            id="card_info"
            name="card_info"
            type="text"
            placeholder="Card Info"
            value={formData.card_info}
            onChange={handleChange}
          />
          <input
            id="expiry_date"
            name="expiry_date"
            type="text"
            placeholder="Expiry Date"
            value={formData.expiry_date}
            onChange={handleChange}
          />
        </>
      )}

      <div style={{ marginTop: '20px' }}>
        {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
        {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default Step;
