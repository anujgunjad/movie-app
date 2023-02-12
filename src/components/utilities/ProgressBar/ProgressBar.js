import React, { useEffect, useState } from 'react';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/system';

const BorderLinearProgress = styled(LinearProgress)(({ }) => ({
    height: 8,
    borderRadius: 5,
    width: 111,

    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: '#283647',
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#00E0FF',
    },
}));

function ProgressBar(props) {
    let [progress, setProgress] = useState(0);
 
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(props.barValue)
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, [props.barValue])
    return (
        <BorderLinearProgress className='smright12' variant="determinate" value={progress} />
    );
}

export default ProgressBar;