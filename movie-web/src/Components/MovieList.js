import {useState , useEffect} from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export const MovieList = ({searchValue, clickedMovie}) => {
    const [score, setScore] = useState([])
    const classes = useStyles;
    let history = useHistory();

    useEffect(()=>{
        axios.get(`https://api.tvmaze.com/search/shows?q=${searchValue}`)
        .then(res =>{
            setScore(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }, [searchValue])

    const handleClick = (movie) => {
        clickedMovie(movie)
        history.push(`movie/${movie.show.id}`);
    }
    return (
        <div style={{display: "grid", gridTemplateColumns: "auto auto auto auto", gridGap: "2%", padding: "20px 40px"}}>
            {score.map((s,i)=> {
                return(
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={s.show.image && s.show.image.original ? s.show.image.original: (s.show.image && s.show.image.medium ? s.show.image.medium : null)}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {s.show.name ? s.show.name : "Unknown"}
                                </Typography>
                                <ui style={{textAlign: "left"}}>
                                    <li>Language: <b>{s.show.language}</b></li>
                                    <li>Run time: <b>{s.show.runtime}</b></li>
                                    <li>Status: <b>{s.show.status}</b></li>
                                </ui>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" onClick={() => handleClick(s)}>
                                Open
                            </Button>
                        </CardActions>
                    </Card>
                )
            })}
        </div>
    )
}

export default MovieList
