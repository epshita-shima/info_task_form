import React, { useState, useEffect } from "react";

import { useFormik } from "formik";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";


const InsertInfo = () => {


    const initialValues = { name: "", mobile: '', age: '', sex: '', idType: '' };
    console.log(initialValues)
    const { values, handleBlur, setFieldValue, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            onSubmit: (values, action) => {
                console.log(values)
                action.resetForm();
            }

        });
    return (
        <div className="container w-11/12 mx-auto shadow-lg p-4 mt-4 ">

            <form onSubmit={handleSubmit}>
                <div className="w-full ">
                    <div>
                        <h3 className="text-black font-bold mb-2 border-b border-zinc-800 w-[120px]">Personal Details</h3>
                    </div>

                    <div className=" ">
                        <div className="flex justify-between ">
                            <div className="flex items-center w-[30%]">
                                <label htmlFor="">Name<span className="text-red-600">*</span></label>
                                <TextField
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter Name"
                                    required
                                    onChange={(e) => {
                                        setFieldValue('name', e.target.value);
                                        console.log(e.target.value)

                                    }}
                                    size="small"
                                    className="input bg-white placeholder:text-black input-primary h-[38px] text-[16px] w-full"
                                >

                                </TextField>
                            </div>
                            <div className="flex items-center w-[40%]">
                                <label htmlFor="">Date of Birth of Age<span className="text-red-600">*</span></label>
                                <TextField
                                    type="date"
                                    name="age"
                                    id="age"
                                    required
                                    placeholder="Date of Birth of Age"
                                    onChange={(e) => {
                                        setFieldValue('age', e.target.value);
                                        console.log(e.target.value)

                                    }}
                                    size="small"
                                    className="input bg-white placeholder:text-black input-primary h-[38px] text-[16px] w-full"
                                >

                                </TextField>
                            </div>
                            <div className="flex items-center w-[20%]">
                                <label htmlFor="">Sex<span className="text-red-600">*</span></label>
                                <TextField
                                    type="text"
                                    name="sex"
                                    id="sex"
                                    required
                                    placeholder="Enter Sex"
                                    onChange={(e) => {
                                        setFieldValue('sex', e.target.value);
                                        console.log(e.target.value)

                                    }}
                                    size="small"
                                    className=" bg-white placeholder:text-black w-[200px] hx-[10px]"
                                >
                                </TextField>

                            </div>

                        </div>
                        <div>

                            <div className="flex justify-between">
                                <div className="flex items-center mt-2 w-[30%]">
                                    <label htmlFor="">Mobile</label>
                                    <TextField
                                        type="number"
                                        name="mobile"
                                        id="mobile"
                                        required
                                        placeholder="Enter Mobile"
                                        onChange={(e) => {
                                            setFieldValue('mobile', e.target.value);
                                            console.log(e.target.value)

                                        }}
                                        size="small"
                                        className="input bg-white placeholder:text-black input-primary h-[38px] text-[16px] w-[250px] "
                                    >

                                    </TextField>
                                </div>
                                <div className="flex items-center w-[65%]">
                                    <label className="w-[200px]" htmlFor="">Govt Issued Id</label>
                                    <FormControl variant="filled" sx={{ m: 1, minWidth: 180 }}>
                                        <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-filled-label"
                                            id="demo-simple-select-filled"
                                            size="small"

                                            //   value={}
                                            onChange={(e) => { setFieldValue("idType", e.value) }}
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem value={10}>Ten</MenuItem>
                                            <MenuItem value={20}>Twenty</MenuItem>
                                            <MenuItem value={30}>Thirty</MenuItem>


                                        </Select>

                                    </FormControl>
                                    <TextField
                                        type="text"
                                        name="govtId"
                                        id="govtId"
                                        required
                                        placeholder="Enter Govt ID"
                                        onChange={(e) => {
                                            setFieldValue('govtId', e.target.value);
                                            console.log(e.target.value)

                                        }}
                                        size="small"
                                        className=" bg-white placeholder:text-black w-full"
                                    >

                                    </TextField>
                                </div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    {/* <div className="flex">
                        <div className="w-full">
                            <Select
                                class="form-select"
                                aria-label="Default select example"
                                name="groupId"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    console.log(e.value);
                                    setFieldValue("GroupId", e.value);

                                }}
                            ></Select>
                        </div>

                    </div> */}
                    <label htmlFor="" className="text-[#581C87] font-bold mt-2">
                        Category Name
                    </label>
                    {/* <input
                        type="text"
                        name="CategoryName"
                        id="CategoryName"
                        required
                        onChange={(e) => {
                            setFieldValue('updateName', e.target.value);
                            console.log(e.target.value)

                        }}
                        className="input bg-white placeholder:text-black input-primary h-[38px] text-[16px] w-full mb-2 mt-2"
                    /> */}
                </div>

                <div className="flex items-center">
                    <input
                        type="submit"
                        value="Update"
                        className="custom-btn text-white hover:bg-[#581C87] bg-[#581C87] mt-4"
                    />

                </div>
            </form>


        </div>
    );
};

export default InsertInfo;
