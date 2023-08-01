import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import mystyle from "../Style.module.css";
import logo1 from "../assets/img/undraw_social_ideas_re_j5v4.svg";
import logo2 from "../assets/img/undraw_social_serenity_vhix.svg";
import logo3 from "../assets/img/undraw_social_girl_re_kdrx.svg";
import logo4 from "../assets/img/undraw_social_strategy_re_mk87.svg";
import logo5 from "../assets/img/undraw_search_re_x5gq.svg";
import logo6 from "../assets/img/undraw_social_friends_re_7uaa.svg";

const SingleStory = () => {
  const api = [
    {
      id: 1,
      title: "MERN Stack Development",
      content:
        "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.",
      img: logo1,
    },
    {
      id: 2,
      title: "Front End Development",
      content:
        "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.",
      img: logo2,
    },
    {
      id: 3,
      title: "Backend Development",
      content:
        "Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.",
      img: logo3,
    },
    {
      id: 4,
      title: "Social Media",
      content:
        "We are professionals and experts in social media management and marketing. We ensure you the getting traffic to your website from social platforms.",
      img: logo4,
    },
    {
      id: 5,
      title: "SEO",
      content:
        "Search engine optimization: the process of making your site better for search engine. Also the job title of a person who does this for a living ",
      img: logo5,
    },
    {
      id: 6,
      title: "Digital Marketing",
      content:
        "We are professionals and experts in social media management and marketing. We ensure you the getting traffic to your website from social platforms.",
      img: logo6,
    },
  ];
  return (
    <>
      {api.map((item) => (
        <Grid item xs={12} md={4} key={item.id}>
          <Card className={mystyle.transiction}>
            <CardActionArea>
              <CardMedia
                component="img"
                className={mystyle.resImg}
                sx={{ height: "260px", maxWidth: "100%" }}
                src={item.img}
                alt="service photo 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.content}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href="https://bangla.bdnews24.com/"
              >
                Read More...
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default SingleStory;
