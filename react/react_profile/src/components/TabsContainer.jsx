import React, { useState } from 'react';
import styles from './css/TabsContainer.module.css';
import PostContainer from './PostContainer';

function TabsContainer(props){
    const [activeTab, setActiveTab] = useState('Post');

    const active = {
        borderBottom: '4px solid #1d9bf0',
        borderRadius: '5px',
        color: 'rgb(255, 255, 255)',
    }

    const handleTabClick = (tabName, e) => {
        e.preventDefault();
        setActiveTab(tabName);
    };

    return (
        <div>
            <div className={styles.tabs}>
                <input
                    className={`tab ${activeTab === 'Post' ? 'active' : ''}`}
                    type="button"
                    value="Post"
                    style={activeTab === 'Post' ? active : null}
                    onClick={(e) => handleTabClick('Post', e)}
                />
                <input
                    className={`tab ${activeTab === 'Replies' ? 'active' : ''}`}
                    type="button"
                    value="Replies"
                    style={activeTab === 'Replies' ? active : null}
                    onClick={(e) => handleTabClick('Replies', e)}
                />
                <input
                    className={`tab ${activeTab === 'Media' ? 'active' : ''}`}
                    type="button"
                    value="Media"
                    style={activeTab === 'Media' ? active : null}
                    onClick={(e) => handleTabClick('Media', e)}
                />
                <input
                    className={`tab ${activeTab === 'Likes' ? 'active' : ''}`}
                    type="button"
                    value="Likes"
                    style={activeTab === 'Likes' ? active : null}
                    onClick={(e) => handleTabClick('Likes', e)}
                />
            </div>
            <div className="tab-content">
                {activeTab === 'Post' && <PostContainer profile={props.profile}/>}
                {activeTab === 'Replies' && <div>Content for Replies</div>}
                {activeTab === 'Media' && <div>Content for Media</div>}
                {activeTab === 'Likes' && <div>Content for Likes</div>}
            </div>
        </div>
    );
};

export default TabsContainer;
