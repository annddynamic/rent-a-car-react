import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://www.progresscars.com/Uploads/ImageCollection/9a03acdc-e1ed-4bd2-802a-1e71f18e479d.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://www.progresscars.com/Uploads/ImageCollection/5e07e7f8-6f08-44f4-8c9f-7440fb11a739.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://cdn2.rcstatic.com/images/rc-guides/January_uploads/besttime.jpg',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div className="each-fade" key={index}>
              <div className="image-container">
                <img src={fadeImage.url} alt="Link currently not working!" style={{width:'100%'}}/>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    )
}

export default Slideshow;