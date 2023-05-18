import PropTypes from "prop-types";
import {
  ProfileCard,
  ProfileDescr,
  Avatar,
  ProfileStats,
  PSLi,
  PSLabel,
  PSQuantity,
} from "./Profile.styled";

export const Profile = ({
  user,
  id,
  avatar,
  tweets,
  followers,
}) => {
    const [count, setCount] = useState(0)
  return (
    <ProfileCard id={id}>
      <ProfileDescr>
        <Avatar src={avatar} alt={user} />
      </ProfileDescr>
      <ProfileStats>
        <PSLi>
        <PSQuantity>{tweets}</PSQuantity>
          <PSLabel>Tweets</PSLabel>
        </PSLi>
        <PSLi>
        <PSQuantity>{followers}</PSQuantity>
          <PSLabel>Followers</PSLabel>
        </PSLi>
      </ProfileStats>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </ProfileCard>
  );
};

Profile.propTypes = {
  user: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
followers: PropTypes.number.isRequired,
};