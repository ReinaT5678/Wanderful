
import React, {useState} from 'react';
import styled from '@emotion/styled';


const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PopupContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    position: relative; 
    max-width: 400px; 
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
`;

const Dropdown = styled.select`
    display: block;
    margin-top: 10px;
`;

const SubmitButton = styled.button`
    display: block;
    margin-top: 20px; 
    padding: 10px 20px; 
    background-color: #B0C4B1;
    transition: background-color 0.3s;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
        background-color: #c7d8c8;
    }
`;

const UploadInput = styled.input`
    display: block;
    margin-top: 10px;
`;

const InputDetails = styled.input`
    display: block;
    margin-top: 10px;
    padding: 20px; 
`;

const Option = styled.option``;



const Popup = ({ onClose, planData, onSubmit }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState('');
    const [details, setDetails] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleDetailChange = (event) => {
        setDetails(event.target.value);
    }

    const handleSubmit = () => {
        onSubmit(selectedLocation, selectedFile, details);
        onClose();
    }

    return (
        <PopupOverlay>
            <PopupContent>
                <CloseButton onClick={onClose}>x</CloseButton>
                <h3>Choose your date!</h3>
                <Dropdown value={selectedLocation} onChange={handleLocationChange}>
                    <Option value="">Select a location</Option>
                    {planData.map((planItem, index) => ( 
                        <Option key={index} value={planItem.id}>
                            {planItem.name}
                        </Option>
                    ))}
                </Dropdown>
                <h3>Upload a photo:</h3>
                <UploadInput type="file" onChange={handleFileChange} accept="image/*" />
                <h3>Insert your details: </h3>
                <InputDetails type="text" value={details} onChange={handleDetailChange}></InputDetails>

                <SubmitButton onClick={handleSubmit}>Post</SubmitButton>
            </PopupContent>
        </PopupOverlay>
    );
};

export default Popup;
