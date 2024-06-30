import React from 'react';
import Feed from '../components/Feed';
import SuggestedUsers from '../components/SuggestedUsers';

const HomePage = () => (
  <div className="home-page">
    <Feed />
    <SuggestedUsers />
  </div>
);

export default HomePage;
