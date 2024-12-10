import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './CommentCard.module.scss'
import Comment from '../../../models/comment.model';

export default function CommentCard(props: any) {
  return (
    <Card sx={{ display: 'flex', width: '400px', height: '120px' }}>
      <CardMedia
        component="img"
        image="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png"
        alt="Commentor image"
        className={styles.commentorImage}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto', textAlign: 'left' }}>
          <Typography component="div" variant="h6" className={styles.commentorName}>
            {props.author}
          </Typography>
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ color: 'text.secondary' }}
            className={styles.commentContent}
          >
            {props.content}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
