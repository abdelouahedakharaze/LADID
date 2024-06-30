import React from 'react';
import MakePost from '../components/MakePost';
import SuggestedUsers from '../components/SuggestedUsers';
import Feed from '../components/Feed';

const NavigationPage = () => (
    <div className="navigation-page p-4">
        <MakePost />
        <div className="content mt-4 flex">
            <div className="left w-1/4 mr-4">
                <div className="sticky top-0">
                    <SuggestedUsers />
                </div>
            </div>
            <div className="middle w-3/4">
                <Feed />
            </div>
        </div>
    </div>
);

export default NavigationPage;
