import React, {
    useState
} from 'react';
import HomePage from './HomePage';
import {
    Link
} from 'react-router-dom';



function App() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleSubmit = async() => {
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('http://localhost:8000/image', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            setPrediction(data[0]);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return ( <
        div style = {
            {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '100vh', // This will make the container take the full height of the viewport
            }
        } >
        <
        div class = "topnav" >
        <
        Link to = "/"
        className = "active" > Home < /Link>  < /
        div > <
        h1 > Herb Identification < /h1>    <
        input type = "file"
        accept = "image/*"
        onChange = {
            handleFileUpload
        }
        /> <
        HomePage / > <
        button onClick = {
            handleSubmit
        } > Submit < /button>    {
        prediction && < p > Prediction: {
            prediction
        } < /p>}     < /
        div >
    );
}

export default App;