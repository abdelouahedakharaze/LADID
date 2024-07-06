// pages/Homepage.jsx

import React from 'react';
import Header from '../components/Header'; // Adjust path as needed
import Footer from '../components/Footer'; // Adjust path as needed
import CreatePostForm from '../components/CreatePostForm'; // Adjust path as needed
import PostsFeed from '../components/PostsFeed'; // Adjust path as needed
import SuggestedUsers from '../components/SuggestedUsers'; // Adjust path as needed

const Homepage = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <CreatePostForm />
            <PostsFeed />
          </div>
          <div className="col-span-1">
            <div className="sticky top-8">
              <SuggestedUsers />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
