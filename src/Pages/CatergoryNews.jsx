import React from 'react';
import { useParams } from 'react-router';

const CatergoryNews = () => {
    const {id} =useParams();
    return (
        <div>
          CatergoryNews {id}
        </div>
    );
};

export default CatergoryNews;