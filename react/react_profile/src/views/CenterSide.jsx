import ProfileHeader from "../components/centerSideView/ProfileHeader";
import TabsContainer from '../components/centerSideView/TabsContainer';
import SuggestedAccounts from '../components/centerSideView/SuggestedAccounts';

function CenterSide({displayedProfile, user}) {

    const matchedFollowers = displayedProfile.followers.users.filter((follower) =>
        user.following.users.includes(follower)
    );

    return (
        <div>
            <ProfileHeader 
                profile={displayedProfile}
                matchedFollowers={matchedFollowers}
            />
            <TabsContainer 
                profile={displayedProfile}
            />
            <SuggestedAccounts  currentProfile={user}/>
        </div>
    );
}

export default CenterSide;
