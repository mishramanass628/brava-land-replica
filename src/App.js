// App.js
import React from 'react';
import Navbar from './Navbar';
import './App.css'
import Abovenavbar from './Abovenavbar';
import Slider from './slider';
import Roller from './Roller';

const App = () => {
  return (
    <div className='wholebody'>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <Abovenavbar />
      <Navbar />
      <Slider />
      <div>
        
        <Roller>
          <div className="scroll-item-outer">

       


          <div className="scroll-item">
            <div className="image-container">
              {/* Replace 'your-image-path.jpg' with the actual path to your image */}
              <img src="./anime.png" height={200} width={200} alt='error404' className="image" />
            </div>
            <div className="content-container">
              <h1>Future bits</h1>
             
              <a href="https://www.google.com">
                <div className='shopbutton'>Shop</div></a>
            </div>
          </div>



          <div className="scroll-item">
            <div className="image-container">
              {/* Replace 'your-image-path.jpg' with the actual path to your image */}
              <img src="./anime.png" height={200} width={200} alt='error404' className="image" />
            </div>
            <div className="content-container">
              <h1>Danketsu</h1>
              
              <a href="https://www.google.com">
                <div className='shopbutton'>Shop</div></a>
            </div>
          </div>




          <div className="scroll-item">
            <div className="image-container">
              {/* Replace 'your-image-path.jpg' with the actual path to your image */}
              <img src="./anime.png" height={200} width={200} alt='error404' className="image" />
            </div>
            <div className="content-container">
              <h1>cryptoraggies</h1>
              
              <a href="https://www.google.com">
                <div className='shopbutton'>Shop</div></a>
            </div>
          </div>




          <div className="scroll-item">
            <div className="image-container">
              {/* Replace 'your-image-path.jpg' with the actual path to your image */}
              <img src="./anime.png" height={200} width={200} alt='error404' className="image" />
            </div>
            <div className="content-container">
              <h1>Pendulum</h1>
           
              <a href="https://www.google.com">
                <div className='shopbutton'>Shop</div></a>
            </div>
          </div>




          <div className="scroll-item">
            <div className="image-container">
              {/* Replace 'your-image-path.jpg' with the actual path to your image */}
              <img src="./anime.png" height={200} width={200} alt='error404' className="image" />
            </div>
            <div className="content-container">
              <h1>Vudu Brigada</h1>
              
              <a href="https://www.google.com">
                <div className='shopbutton'>Shop</div></a>
            </div>
          </div>




          <div className="scroll-item">
            <div className="image-container">
              {/* Replace 'your-image-path.jpg' with the actual path to your image */}
              <img src="./anime.png" height={200} width={200} alt='error404' className="image" />
            </div>
            <div className="content-container">
              <h1>Bitfins</h1>
              
              <a href="https://www.google.com">
                <div className='shopbutton'>Shop</div></a>
            </div>
          </div>




          <div className="scroll-item">
            <div className="image-container">
              {/* Replace 'your-image-path.jpg' with the actual path to your image */}
              <img src="./anime.png" height={200} width={200} alt='error404' className="image" />
            </div>
            <div className="content-container">
              <h1>Dunkers</h1>
              
              <a href="https://www.google.com">
                <div className='shopbutton'>Shop</div></a>
            </div>
          </div>






          <div className="scroll-item">
            <div className="image-container">
              {/* Replace 'your-image-path.jpg' with the actual path to your image */}
              <img src="./anime.png" height={200} width={200} alt='error404' className="image" />
            </div>
            <div className="content-container">
              <h1>$hocky</h1>
              
              <a href="https://www.google.com">
                <div className='shopbutton'>Shop</div></a>
            </div>
          </div>



          <div className="scroll-item">
            <div className="image-container">
              {/* Replace 'your-image-path.jpg' with the actual path to your image */}
              <img src="./anime.png" height={200} width={200} alt='error404' className="image" />
            </div>
            <div className="content-container">
              <h1>futurefit</h1>
              
              <a href="https://www.google.com">
                <div className='shopbutton'>Shop</div></a>
            </div>
          </div>

         

          </div>




          {/* Add more items as needed */}
        </Roller>
      </div>



























      <div className='nextcomp'><h1>New Arrival</h1></div>
      

      {/* Your other components/content goes here */}
    </div>
  );
};

export default App;
