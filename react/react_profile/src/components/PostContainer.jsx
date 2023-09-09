
import repost from '../icons/repost.svg';
import moreHoriz from '../icons/moreHoriz.svg';
import comment from '../icons/comment.svg';
import heart from '../icons/heart.svg';
import insight from '../icons/insight.svg';
import upload from '../icons/upload.svg';
import styles from './css/PostContainer.module.css';


function PostContainer(props) {

    return (
        <div className={styles.container}>
            <div className={styles.repostLogo}>
                <img src={repost} alt="repost" />
                <p>React reposted</p>
            </div>
            <div className={styles.postContent}>
                <img className={styles.profilePic} src={props.profile.profilePicture} alt="ProfilePicture" />
                <div className={styles.postText}>
                    <div>
                        <h5>{props.profile.posts[0].addedBy}</h5>
                        <p>{props.profile.posts[0].dateAdded}</p>
                    </div>
                    <h5>{props.profile.posts[0].content}</h5>
                </div>
                <img src={moreHoriz} alt="more" />
            </div>
            <div className={styles.postInsight}>
                <div>
                    <img src={comment} alt="comments" />
                    <h6>{props.profile.posts[0].comments}</h6>
                </div>
                <div>
                    <img src={repost} alt="repost" />
                    <h6>{props.profile.posts[0].repost}</h6>
                </div>
                <div>
                    <img src={heart} alt="heart" />
                    <h6>{props.profile.posts[0].likes}</h6>
                </div>
                <div>
                    <img src={insight} alt="insight" />
                    <h6>{props.profile.posts[0].reached}</h6>
                </div>
                <div>
                    <img src={upload} alt="upload" />
                </div>
            </div>
        </div>
    );
}

export default PostContainer;
