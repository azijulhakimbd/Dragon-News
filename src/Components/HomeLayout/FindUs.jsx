import React from 'react';

const FindUs = () => {
    return (
        <div>
             {/* Finds Us */}
      <div>
        <h2 className="font-bold text-2xl py-5">Finds Us On</h2>
        <div className="flex justify-between">
          <div className="join join-vertical w-full">
            <button className="btn bg-base-100 py-10 justify-start join-item">
              <img src="https://i.postimg.cc/mZjhwf7K/fb.png" alt="Facebook" />
              Facebook
            </button>
            <button className="btn bg-base-100 py-10 justify-start join-item">
              <img
                src="https://i.postimg.cc/KvYjpqNj/instagram.png"
                alt="Instagram"
              />
              Instagram
            </button>
            <button className="btn bg-base-100 py-10 justify-start join-item">
              <img
                src="https://i.postimg.cc/mgvQsfX8/twitter.png"
                alt="Twitter"
              />
              Twitter
            </button>
          </div>
        </div>
      </div>
        </div>
    );
};

export default FindUs;