import style from "./userProfile.module.scss"
import Navbar from '../../components/navbar/Navbar'

const UserProfile = () => {

    return (
      <div className={style.profileContainer}>
        <Navbar />
        <div className={style.profileHead}>
          <div className={style.profileHeadLeft}>
              <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="profile pic" />
          </div>
          <div className={style.profileHeadRight}>
              <h3>john@gmail.com</h3>
              <div className={style.followsAndPosts}>
                  <p>2 Followers</p>
                  <p>1 Following</p>
                  <p>3 Posts</p>
              </div>
          </div>
        </div>
  
        <div className={style.profilePosts}>
          <img src="https://pbs.twimg.com/media/E8CcZtGX0AkLSyh?format=jpg&name=small" alt="post pic" />
          <img src="https://pbs.twimg.com/media/E6Bs9x0XoAQnNdw?format=jpg&name=360x360" alt="post pic" />
          <img src="https://pbs.twimg.com/media/E3B9UuLWUAAQNFj.jpg" alt="post pic" />
          <img src="https://memesfeel.com/wp-content/uploads/2021/10/Twitter-reaction-memes-8.jpg" alt="post pic" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZFK9sNvugfN5rOqEuq_bnwM4XxXUtwsCsrg&usqp=CAU" alt="post pic" />
          <img src="https://static.wikia.nocookie.net/c61c2342-fe0a-4ffb-8950-cb3e536fbb75/scale-to-width/755" alt="post pic" />
        </div>
  
      </div>
    )
}

export default UserProfile
