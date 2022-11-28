import React from 'react';

const ListInfo = ({ data }) => {
    console.log(data)
    return (
        <div className='mt-4 mb-8'>
            <div class="overflow-x-auto">
                <table class="table w-full bordered">
                    <thead>
                        <tr>
                            <th rowSpan='2'></th>
                            <th rowSpan='2'>Name</th>
                            <th rowSpan='2'>Mobile</th>
                            <th rowSpan='2'>BirthDate</th>
                            <th rowSpan='2'>Sex</th>
                            <th colSpan='2'>Govt Issue ID</th>
                            <th colSpan='2'>Guardian Details</th>
                            <th rowSpan='2'>Email</th>
                            <th rowSpan='2'>Em.Conatct No</th>
                            <th rowSpan='2'>Address</th>
                            <th rowSpan='2'>State</th>
                            <th rowSpan='2'>City</th>
                            <th rowSpan='2'>Country</th>
                            <th rowSpan='2'>Pincode</th>
                            <th rowSpan='2'>Ocupation</th>
                            <th rowSpan='2'>Religion</th>
                            <th rowSpan='2'>Merital Status</th>
                            <th rowSpan='2'>Boold Group</th>
                            <th rowSpan='2'>Nationality</th>
                        </tr>
                        <tr>
                            <th>label</th>
                            <th>ID</th>
                            <th>Label</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((info, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{info.name}</td>
                                    <td>{info.mobile}</td>
                                    <td>{info.age}</td>
                                    <td>{info.sex}</td>
                                    <td>{info.idType}</td>
                                    <td>{info.govtId}</td>
                                    <td>{info.guardianLabel}</td>
                                    <td>{info.guardinName}</td>
                                    <td>{info.email}</td>
                                    <td>{info.emergencyNo}</td>
                                    <td>{info.address}</td>
                                    <td>{info.state}</td>
                                    <td>{info.city}</td>
                                    <td>{info.country}</td>
                                    <td>{info.pincode}</td>
                                    <td>{info.ocupation}</td>
                                    <td>{info.religion}</td>
                                    <td>{info.meritalStatus}</td>
                                    <td>{info.bloodGroup}</td>
                                    <td>{info.nationality}</td>
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListInfo;