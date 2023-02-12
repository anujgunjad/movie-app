import React from 'react';
import './SmallCard.scss';
import PlayCircleOutlineRoundedIcon from '@mui/icons-material/PlayCircleOutlineRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

function SmallCard(props) {
    return (
        <div className='card-wrp noSelect'>
            <div className='card'  onClick={props.handleOpenCard}>
                <div className='card--image_wrp'>
                    <img src={props.val.Poster} alt='' />
                </div>
                <div className='card--content'>
                    <p className='font-15 fw600 ln20 light-color smtop12 smbottom12'>{props.val.Title}</p>
                    <div className='card--content-icons'>
                        <PlayCircleOutlineRoundedIcon />
                        <AddCircleOutlineRoundedIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SmallCard;