import {useState , useEffect} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';

import LanguageIcon                      from '@material-ui/icons/Language';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import { useHistory }                    from "react-router-dom";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import * as moment from 'moment';


export const MovieDetailComponent = ({selectedMovie}) => {
    let history = useHistory();
    const handleClick = () => {
        history.push(`/`);
    }
    console.log(selectedMovie)
    if (selectedMovie) {
        return (
            <div>
                <img src={selectedMovie.show.image && selectedMovie.show.image.original ? selectedMovie.show.image.original : null} style={{position: "absolute", width: "100%", height: "100%", left: 0, top: 0}} />
                <div style={{position: "absolute", backgroundColor: 'black', zIndex: 100, opacity: 0.8, width: "100%", height: "100%"}}></div>
                <div style={{ padding: "10px 20px"}}>
                    <div style={{zIndex: 200, textAlign: "left", position: "relative"}}>
                        <Button style={{color: 'white'}} size="small" color="primary" onClick={() => handleClick()} >
                            <ArrowBackOutlinedIcon style={{color: "white", marginRight: 10}}></ArrowBackOutlinedIcon>
                            Back
                        </Button>
                    </div>
                    <p style={{fontSize: 24, color: "white", zIndex: 100, textAlign: "left", top: 100, position: "absolute", left: 30}}>{selectedMovie.show.name}</p>
                    <div style={{position: "absolute",bottom: 50, display: "grid", gridTemplateColumns: "55% 43%", gridGap: "1%"}}>
                        <p style={{whiteSpace: "pre-line", position: "relative", color: "white", zIndex: 100, textAlign: "left", fontSize: 22}}>
                            Summary:- {' '}
                            {(selectedMovie.show.summary).replace(/<[^>]*>?/gm, '')}
                        </p>
                        <ui style={{position: "relative", color: "white", zIndex: 100, textAlign: "left", fontSize: 18, margin: "1em"}}>
                            <li> Score: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>{selectedMovie.score}</b></li>
                            <li> Updated: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>{moment(selectedMovie.updated).format('DD/MM/YYYY')}</b></li>
                            <li> Premiered: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>{moment(selectedMovie.premiered).format('DD/MM/YYYY')}</b></li>
                            <li> Type: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>{moment(selectedMovie.type).format('DD/MM/YYYY')}</b></li>
                            <li> Language: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <b>{selectedMovie.language ? selectedMovie.language : "English"}</b></li>
                            {/*<li> Score: <b>{s.score}</b></li>*/}
                        </ui>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieDetailComponent
