import React, { useEffect, useState } from 'react';
import './LargeCard.scss';
import { Button } from '@mui/material';
import ProgressBar from '../../utilities/ProgressBar/ProgressBar';

function LargeCard(props) {
    return (
        <div className={'main_layout_content--large_card' + (props.openCard ? ' expand' : '')}>
            <div className={'large_card--img' + (props.openCard ? ' reveal' : '')}>
                <img src={props.movieData.Poster} alt='' />
            </div>
            <div className={'large_card--content' + (props.openCard ? ' reveal' : '')}>
                <h2 className='font-30 fw700 ln40 light-color '>{props.movieData.Title}</h2>
                <div className='progress_container d-flex align-center smtop10'>
                    <ProgressBar barValue={props.movieData.Metascore}/>
                    <span className='font-16 fw600 ln31 white-color'>{props.movieData.Metascore/10}/10</span>
                </div>
                <table className='font-16 fw600 light-color ln31 smtop12'>
                    <tbody>
                        <tr>
                            <td width="130px"></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Year:</td>
                            <td>
                                {props.movieData.Year}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Running Time:
                            </td>
                            <td>
                                {props.movieData.Runtime}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Directed by:
                            </td>
                            <td>
                                {props.movieData.Director}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                language:
                            </td>
                            <td>
                                {props.movieData.Language}
                            </td>
                        </tr>

                    </tbody>
                </table>

                <p className='smtop13 font-14 white-color ln18'>{props.movieData.Plot} </p>

                <div className='large_card--content-ctas smtop21'>
                    <Button
                        className='smright16'
                        style={{
                            borderRadius: 5,
                            backgroundColor: '#00E0FF',
                            padding: "0.6rem 2.1rem",
                            fontSize: "1.6rem",
                            lineHeight: '2.4rem',
                            fontWeight: 700,
                            textTransform: 'none',
                            color: '#000000',
                            boxShadow: 'none'
                        }}
                        variant="contained">Play Movie</Button>
                    <Button
                        style={{
                            borderRadius: 5,
                            color: '#00E0FF',
                            padding: "0.6rem 2.1rem",
                            fontSize: "1.6rem",
                            lineHeight: '2.4rem',
                            fontWeight: 700,
                            textTransform: 'none',
                            boxShadow: 'none',
                            borderColor: '#00E0FF',
                        }}
                        variant="outlined">Contained</Button>
                </div>

            </div>
        </div>
    );
}

export default LargeCard;