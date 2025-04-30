import React, { useState } from "react";
import { assets } from "../assets/assets";
//inputField Component
const InputField = ({ type, placeholder, name, handleChange, address }) => (
 <input
  className="w-full px-2 py-3 border border-gray-600/30 rounded-md text-gray-500 outline-none focus:border-primary transition"
    type={type}
    placeholder={placeholder}
    onChange={handleChange}
    name={name}
    value={address[name]}
  />
);

const AddAddress = () => {


    const [address, setAddress] = useState({
        firstName: "",
        lastName: "",
        street: "",
        city: "",
        state: "",
        country: "",
        zipCode: "",
        phone: "",
        email: "",
    })


  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="mt-16 pb-16">
      <p className="text-2xl md:text-3xl text-gray-500">
        Add Shopping <span className="font-semibold text-primary">Address</span>
      </p>
      <div className="flex flex-col-reverse md:flex-row justify-between mt-10">
        <div className="fex-1 max-w-md">
          <form
            className="space-y-6 mt-6 text-sm"
            onSubmit={onSubmitHandler}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField handleChange={handleChange} address={address} name="firstName" type="text" placeholder="First Name"  />
            <InputField handleChange={handleChange} address={address} name="lastName" type="text" placeholder="Last Name"  />
            </div>
            <InputField handleChange={handleChange} address={address} name="email" type="email" placeholder="Email Address"  />
            <InputField handleChange={handleChange} address={address} name="street" type="email" placeholder="Street"  />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField handleChange={handleChange} address={address} name="city" type="text" placeholder="City"  />
                <InputField handleChange={handleChange} address={address} name="state" type="text" placeholder="State"  />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField handleChange={handleChange} address={address} name="zipCode" type="number" placeholder="Zip Code"  />
                <InputField handleChange={handleChange} address={address} name="country" type="text" placeholder="Country"  />
            </div>
            <InputField handleChange={handleChange} address={address} name="phone" type="number" placeholder="Phone Number"  />
            <button className="w-full cursor-pointer bg-primary text-white py-3 rounded-md hover:bg-green-600 transition">
              Add Address
            </button>
          </form>
        </div>
        <img
          className="md:mr-16 mb-16 md:mt-0"
          src={assets.add_address_iamge}
          alt="Add Address"
        />
      </div>
    </div>
  );
};

export default AddAddress;
