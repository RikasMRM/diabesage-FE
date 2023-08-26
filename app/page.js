/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import styles from './page.module.css'
import { Typography, Card } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Home() {
  return (
    <div style={{marginTop: '50px'}}>
      <center>
        <h1>DIABESAFE</h1><br></br>
        <Typography>
        Intelligent Machine Learning Based tool for predicting <br /> Type 2 Diabetes and its complications.
        </Typography>
        <a href="/diabetes">
          <Card variant="outlined" style={{ paddingLeft: '10px', maxWidth: '500px', marginTop: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='Image' width={"50px"} style={{ borderRadius: '10px' }} />
            <Typography sx={{ fontSize: '22px', padding: '20px' }}>
              Type 2 Diabetes
            </Typography>
            <ArrowForwardIosIcon style={{ marginLeft: 'auto'}} />
          </Card>
        </a>

        <a href="/">
          <Card variant="outlined" style={{ paddingLeft: '10px', maxWidth: '500px', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='Image' width={"50px"} style={{ borderRadius: '10px' }} />
            <Typography sx={{ fontSize: '22px', padding: '20px' }}>
              ischemic Heart Disease
            </Typography>
            <ArrowForwardIosIcon style={{ marginLeft: 'auto'}} />
          </Card>
        </a>

        <a href="/">
          <Card variant="outlined" style={{ paddingLeft: '10px', maxWidth: '500px', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='Image' width={"50px"} style={{ borderRadius: '10px' }} />
            <Typography sx={{ fontSize: '22px', padding: '20px' }}>
              Chronic Kidney Disease
            </Typography>
            <ArrowForwardIosIcon style={{ marginLeft: 'auto'}}/>
          </Card>
        </a>

        <a href="/">
          <Card variant="outlined" style={{ paddingLeft: '10px', maxWidth: '500px', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='Image' width={"50px"} style={{ borderRadius: '10px' }} />
            <Typography sx={{ fontSize: '22px', padding: '20px' }}>
              Text Extraction from Medical Records
            </Typography>
            <ArrowForwardIosIcon style={{ marginLeft: 'auto'}}/>
          </Card>
        </a>
      </center>
    </div>
  )
}
