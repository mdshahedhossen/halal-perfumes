import React from 'react';
import ReactPlayer from 'react-player';
import './OurFactory.css';

const OurFactory = () => {
    return (
        <div id='factoryVideo'>
            <div>
                <h1 className='text-title'>Our Factory Live Video</h1>
            </div>
          <div className='player-wrapper'>
          <ReactPlayer
           width='70%'
           className='react-player'
           controls
           url='https://www.youtube.com/watch?v=a4_qWzISsOc'
           onReady={()=>console.log('onReady callback')}
           onStart={()=>console.log('onReady callback')}
           onPause={()=>console.log('onReady callback')}
           onEnded={()=>console.log('onReady callback')}
           onError={()=>console.log('onReady callback')}
           >    
           </ReactPlayer>
          </div>
            
        </div>
    );
};

export default OurFactory;