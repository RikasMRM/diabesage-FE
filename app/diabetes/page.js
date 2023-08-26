import { Typography, Card } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Page() {
    return (
        <div style={{marginTop: '50px'}}>
            <center>
                <h1>Type 2 Diabetes Prediction and <br />
                    Modelling</h1><br></br>
                <a href="/predictior">
                    <Card variant="outlined" style={{ maxWidth: '500px', marginTop: '80px' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding: '20px' }}>
                            <img src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='Image' width={"200px"} style={{ borderRadius: '10px' }} />
                            <ArrowForwardIosIcon  style={{ marginLeft: 'auto'}} />
                        </div>
                        <Typography sx={{ fontSize: '22px', padding: '20px' }}>
                            Predict Type 2 Diabetes
                        </Typography>
                    </Card>
                </a>

                <a href="/model">
                    <Card variant="outlined" style={{ maxWidth: '500px', marginTop: '20px'}}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',padding: '20px' }}>
                            <img src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='Image'width={"200px"} style={{ borderRadius: '10px' }} />
                            <ArrowForwardIosIcon style={{ marginLeft: 'auto'}}/>
                        </div>
                        <Typography sx={{ fontSize: '22px', padding: '20px' }}>
                            Train a new Type 2 <br />Diabetes Model using<br /> your dataset
                        </Typography>
                    </Card>
                </a>
            </center>
        </div>
    )
}