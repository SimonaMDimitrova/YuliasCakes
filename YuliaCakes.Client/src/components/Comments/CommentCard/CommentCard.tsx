import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './CommentCard.module.scss'

export default function CommentCard() {
  return (
    <Card sx={{ display: 'flex', width: '400px', height: '120px' }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 150 }}
        image="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
        alt="Commentor image"
        className={styles.commentorImageContainer}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
          <Typography component="div" variant="h6" className={styles.commentorName}>
            Симона Димитрова
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
            className={styles.commentContent}
          >
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incididunt ut labore et d.
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
