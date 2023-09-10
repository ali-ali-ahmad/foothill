import React, {useState} from 'react';
import ProfileHeader from "../components/ProfileHeader";
import { profiles } from '../data/users';
import TabsContainer from '../components/TabsContainer';
import SuggestedAccounts from '../components/SuggestedAccounts';

function UserProfileView(props) {
    const [currentId, setCurrentId] = useState(1);
    let matchedFollowers = [];

    const selectedProfile = profiles.find(profile => profile.id === currentId);

    const comparingProfile = profiles.find(profile => profile.id === 2);

    selectedProfile.followers.users.forEach((follower) => {
        if (comparingProfile.following.users.includes(follower)) {
            matchedFollowers.push(follower);
        }
    });
    return (
        <div className={props.className}>
            <ProfileHeader 
                profile={selectedProfile}
                matchedFollowers={matchedFollowers}
            />
            <TabsContainer 
                profile={selectedProfile}
            />
            <SuggestedAccounts  currentProfile={comparingProfile}/>
        </div>
    );
}

export default UserProfileView;
