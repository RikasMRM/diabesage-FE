import { Typography, Card, Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Page() {
    return (
        <div style={{marginTop: '50px'}}>
            <center>
                <h1>AutoML Model Training For Type 2 Diabetes</h1><br></br>
                <Card variant="outlined" style={{ maxWidth: '500px', marginTop: '80px', marginBottom: '40px' }}>
                    <Typography sx={{ fontSize: '22px', padding: '20px' }}>
                        Upload your Type 2 Diabetes Dataset
                    </Typography>
                    <img src="https://cdn.pixabay.com/photo/2021/10/11/00/59/upload-6699084_640.png" width={"100px"}  style={{margin: '40px'}}/>
                    <br />
                    <input type='file' />
                </Card>

                <Button variant="contained">Train Dataset</Button>
            </center>
        </div>
    )
}