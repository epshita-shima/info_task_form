import React, { useState, useEffect } from "react";
import Select from 'react-select';
import * as yup from 'yup';
import { useFormik } from "formik";
import { TextField } from "@mui/material";
import ListInfo from "../Table/ListInfo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeCompare, faCoffee } from '@fortawesome/free-solid-svg-icons'
const InsertInfo = () => {
    const validPasswordForm = yup.object({
        name: yup.string()
            .required("required"),
        age: yup.string()
            .required("required"),
        sex: yup.string()
            .required("required")
    });
    const [data, setData] = useState([])
    const [nationalitys, setNationality] = useState()
    const [countries, setCountries] = useState()
    console.log({ data })
    const options = [
        { value: 'test1', label: 'test1' },
        { value: 'test2', label: 'test2' },
        { value: 'test3', label: 'test3' }
    ]

    const initialValues = { name: "", mobile: '', age: '', sex: '', idType: '', govtId: '', guardianLabel: '', guardinName: '', email: '', emergencyNo: '', address: '', state: '', city: '', pincode: '', ocupation: '', religion: '', meritalStatus: '', bloodGroup: '' };
    console.log(initialValues)
    const { values, handleBlur, setFieldValue, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: validPasswordForm,
            onSubmit: (values, action) => {
                action.resetForm();
                setData([...data, {

                    name: values.name,
                    mobile: values.mobile,
                    age: values.age,
                    sex: values.sex,
                    idType: values.idType,
                    govtId: values.govtId,
                    guardianLabel: values.guardianLabel,
                    guardinName: values.guardinName,
                    email: values.email,
                    emergencyNo: values.emergencyNo,
                    address: values.address,
                    state: values.state,
                    city: values.city,
                    country: countries,
                    pincode: values.pincode,
                    ocupation: values.ocupation,
                    religion: values.religion,
                    meritalStatus: values.meritalStatus,
                    bloodGroup: values.bloodGroup,
                    nationality: nationalitys,
                }])

            }

        });
    return (
        <div className="container w-11/12 mx-auto shadow-lg p-4 mt-4 ">

            <form onSubmit={handleSubmit}>
                <div className="w-full ">
                    <h2 className="text-black text-[32px] text-center font-bold">Registration Form</h2>
                    <div>
                        <h3 className="text-black text-[18px] font-bold mb-2 border-b border-zinc-800 w-[140px]">Personal Details</h3>
                    </div>

                    <div className=" ">
                        <div className="flex justify-between ">
                            <div className="flex items-center w-[30%]">
                                <label htmlFor="" className="font-semibold">Name<span className="text-red-600 mr-2">*</span></label>
                                <div>
                                    <TextField
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={values.name}
                                        placeholder="Enter Name"
                                        required
                                        onBlur={handleBlur}
                                        onChange={(e) => {
                                            setFieldValue('name', e.target.value);
                                        }}
                                        size="small"
                                        className="w-full"
                                    />
                                    {errors.name && touched.name ? <p className="text-red-600">{errors.name}</p> : null}
                                </div>

                            </div>
                            <div className="flex items-center w-[40%]">
                                <label htmlFor="" className="font-semibold">Date of Birth of Age<span className="text-red-600 mr-2">*</span></label>
                                <div>
                                    <TextField
                                        type="date"
                                        name="age"
                                        id="age"
                                        onBlur={handleBlur}
                                        value={values.age}
                                        required
                                        placeholder="Date of Birth of Age"
                                        onChange={(e) => {
                                            setFieldValue('age', e.target.value);
                                        }}
                                        size="small"
                                        className="w-full"
                                    />
                                    {errors.age && touched.age ? <p className="text-red-600">{errors.age}</p> : null}
                                </div>
                            </div>
                            <div className="flex items-center w-[20%]">
                                <label htmlFor="" className="font-semibold">Sex<span className="text-red-600 mr-2">*</span></label>
                                <div>
                                    <TextField
                                        type="text"
                                        name="sex"
                                        id="sex"
                                        required
                                        onBlur={handleBlur}
                                        value={values.sex}
                                        placeholder="Enter Sex"
                                        onChange={(e) => {
                                            setFieldValue('sex', e.target.value);
                                        }}
                                        size="small"
                                        className=" bg-white placeholder:text-black w-[200px] hx-[10px]"
                                    />
                                    {errors.sex && touched.sex ? <p className="text-red-600">{errors.sex}</p> : null}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mt-2">
                                <div className="flex items-center mt-2 w-[30%]">
                                    <label htmlFor="" className="font-semibold mr-2">Mobile</label>
                                    <TextField
                                        type="tel"
                                        name="mobile"
                                        id="mobile"
                                        placeholder="Enter Mobile"
                                        onChange={(e) => {
                                            setFieldValue('mobile', e.target.value);
                                        }}
                                        size="small"
                                        className="w-full "
                                    />
                                </div>
                                <div className="flex items-center  w-[65%]">
                                    <div className="flex w-[50%] mt-2">
                                        <label className="w-[125px] mr-3 font-semibold" htmlFor="">Govt Issued Id</label>
                                        <Select
                                            name="idType"
                                            id="idType"
                                            class="form-select"
                                            aria-label="Default select example"
                                            options={options}
                                            onChange={(e) => {
                                                setFieldValue('idType', e.value)
                                            }}
                                            className="w-[300px]"

                                        />
                                    </div>
                                    <div className="ml-2 w-[50%]">
                                        <TextField
                                            type="text"
                                            name="govtId"
                                            id="govtId"
                                            placeholder="Enter Govt ID"
                                            onChange={(e) => {
                                                setFieldValue('govtId', e.target.value);

                                            }}
                                            size="small"
                                            className=" bg-white placeholder:text-black w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div>
                        <h3 className="text-black text-[18px] font-bold mb-2 border-b border-zinc-800 w-[130px] mt-4">Contact Details</h3>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center w-[45%]">
                            <div className="flex w-[50%] mt-2">
                                <label className="w-[140px] font-semibold" htmlFor="">Guardian Details</label>
                                <Select
                                    name="guardianLabel"
                                    id="guardianLabel"
                                    class="form-select"
                                    aria-label="Default select example"
                                    placeholder="Enter Label"
                                    options={options}
                                    onChange={(e) => {
                                        setFieldValue('guardianLabel', e.value)
                                    }}
                                    className="w-[300px]"

                                />
                            </div>
                            <div className="ml-2 w-[50%]">
                                <TextField
                                    type="text"
                                    name="guardinName"
                                    id="guardinName"
                                    placeholder="Enter Guardian Name"
                                    onChange={(e) => {
                                        setFieldValue('guardinName', e.target.value);

                                    }}
                                    size="small"
                                    className=" bg-white placeholder:text-black w-full"
                                />
                            </div>
                        </div>
                        <div className="w-[20%]">
                            <div className="flex">
                                <div>
                                    <label className="font-semibold mr-3" htmlFor="">Email</label>
                                </div>
                                <TextField
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    onChange={(e) => {
                                        setFieldValue('email', e.target.value);

                                    }}
                                    size="small"
                                    className=" bg-white placeholder:text-black w-full"
                                />
                            </div>
                        </div>
                        <div className="w-[30%]">
                            <div className="flex">
                                <div>
                                    <label className="font-semibold mr-3" htmlFor="">Emargengency Contact Number</label>
                                </div>
                                <TextField
                                    type="tel"
                                    name="emargencyNo"
                                    id="emargencyNo"
                                    placeholder="Enter Emergency No"
                                    onChange={(e) => {
                                        setFieldValue('emergencyNo', e.target.value);
                                    }}
                                    size="small"
                                    className=" bg-white placeholder:text-black w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <div>
                            <h3 className="text-black text-[18px] font-bold mb-2 border-b border-zinc-800 w-[130px]"> Address details</h3>
                        </div>
                        <div>
                            <div className="flex justify-between ">
                                <div className="flex items-center w-[30%]">
                                    <label htmlFor="" className="font-semibold mr-3">Address</label>
                                    <TextField
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="Enter Address"
                                        onChange={(e) => {
                                            setFieldValue('address', e.target.value);
                                            console.log(e.target.value)

                                        }}
                                        size="small"
                                        className="w-full"
                                    />
                                </div>
                                <div className="flex items-center w-[30%]">
                                    <label htmlFor="" className="font-semibold mr-3">State</label>
                                    <Select
                                        name="state"
                                        id="state"
                                        class="form-select"
                                        aria-label="Default select example"
                                        placeholder="Enter State"
                                        options={options}
                                        onChange={(e) => {
                                            setFieldValue('state', e.value)
                                            console.log(e.value)
                                        }}
                                        className="w-[300px]"

                                    />
                                </div>
                                <div className="flex items-center w-[30%]">
                                    <label htmlFor="" className="font-semibold mr-2">City</label>
                                    <Select
                                        name="city"
                                        id="city"
                                        class="form-select"
                                        aria-label="Default select example"
                                        placeholder="Enter city/town/villege"
                                        options={options}
                                        onChange={(e) => {
                                            setFieldValue('city', e.value)
                                            console.log(e.value)
                                        }}
                                        className="w-[300px]"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-2">
                                <div className="flex mt-2">
                                    <label className="w-[125px] font-semibold" htmlFor="">Country</label>
                                    <Select
                                        name="country"
                                        id="country"
                                        class="form-select"
                                        aria-label="Default select example"
                                        isMulti
                                        options={options}
                                        onChange={(e) => {
                                            setCountries(Array.isArray(e) ? e.map(x => x.value) : [])
                                        }}
                                        className="w-[450px] mr-8"
                                    />
                                </div>
                                <div className="flex items-center ml-3">
                                    <label htmlFor="" className="font-semibold mr-3">Pincode</label>
                                    <TextField
                                        type="text"
                                        name="pincode"
                                        id="pincode"
                                        placeholder="Enter pincode"
                                        onChange={(e) => {
                                            setFieldValue('pincode', e.target.value);
                                            console.log(e.target.value)

                                        }}
                                        size="small"
                                        className="w-full"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-4">
                        <div>
                            <h3 className="text-blac text-[18px]  font-bold mb-2 border-b border-zinc-800 w-[120px]"> Other details</h3>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center w-[30%]">
                                <label htmlFor="" className="font-semibold mr-3">Ocupation</label>
                                <TextField
                                    type="text"
                                    name="ocupation"
                                    id="ocupation"
                                    placeholder="Enter ocupation"
                                    onChange={(e) => {
                                        setFieldValue('ocupation', e.target.value);
                                        console.log(e.target.value)

                                    }}
                                    size="small"
                                    className="w-full"
                                />
                            </div>
                            <div className="flex items-center w-[30%]">
                                <label htmlFor="" className="font-semibold mr-2">Religion</label>
                                <Select
                                    name="religion"
                                    id="religion"
                                    class="form-select"
                                    aria-label="Default select example"
                                    placeholder="Enter religion"
                                    options={options}
                                    onChange={(e) => {
                                        setFieldValue('religion', e.value)
                                        console.log(e.value)
                                    }}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex items-center w-[30%]">
                                <label htmlFor="" className="font-semibold mr-2">Merital Status</label>
                                <Select
                                    name="meritalStatus"
                                    id="meritalStatus"
                                    class="form-select"
                                    aria-label="Default select example"
                                    placeholder="Enter merital status"
                                    options={options}
                                    onChange={(e) => {
                                        setFieldValue('meritalStatus', e.value)
                                        console.log(e.value)
                                    }}
                                    className="w-full"
                                />
                            </div>

                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-2">
                            <div className="flex items-center">
                                <label htmlFor="" className="font-semibold mr-2 w-[130px]">Blood Group</label>
                                <Select
                                    name="bloodGroup"
                                    id="bloodGroup"
                                    class="form-select"
                                    aria-label="Default select example"
                                    placeholder="Enter blood group"
                                    options={options}
                                    onChange={(e) => {
                                        setFieldValue('bloodGroup', e.value)
                                        console.log(e.value)
                                    }}
                                    className="w-full"
                                />
                            </div>
                            <div className="flex items-center ml-4">
                                <label htmlFor="" className="font-semibold mr-2">Nationality</label>
                                <Select
                                    name="nationality"
                                    id="nationality"
                                    class="form-select"
                                    isMulti
                                    aria-label="Default select example"
                                    placeholder="Enter nationality"
                                    options={options}
                                    onChange={(e) => {
                                        setNationality(Array.isArray(e) ? e.map(x => x.value) : [])

                                    }}
                                    className="w-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end">
                    <button className="btn bg-transparent border-red-600 text-red-600 hover:bg-red-700 hover:text-white w-[100px] mt-4">
                        Cancel
                        (ESC)
                    </button>

                    <div>
                        <button
                            type="submit"
                            value="Submit"

                            className="btn btn-primary text-white  w-[92px] hover:bg-green-600 bg-green-500 mt-4 ml-2"
                        >Submit <FontAwesomeIcon icon={faCodeCompare}></FontAwesomeIcon> S</button >

                    </div>

                </div>
            </form>

            <ListInfo
                data={data}
            ></ListInfo>

        </div>
    );
};

export default InsertInfo;
