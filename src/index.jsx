import './style.css'
import  img1 from './img/Spotify logo.png';
import img2 from './img/Home.png';
import img3 from './img/Search.png';
import img4 from './img/Your library.png';
import img5 from './img/Create.png';
import img6 from './img/Liked.png';
import img7 from './img/your episodes.png';
import img8 from './img/grommet-icons_install-option.png';
import img9 from './img/top arrow navigation.png';
import img10 from './img/User.png';
import img11 from './img/Group 2.png';
import img12 from './img/image4.png';
import img13 from './img/image3.png';
import img14 from './img/image1.png';
import img15 from './img/image2.png';
import img16 from './img/image9.png';
import img17 from './img/image8.png';
import img18 from './img/image7.png';
import img19 from './img/image6.png';
import img20 from './img/image5.png';
import img22 from './img/bx_bxs-heart.png';
import img23 from './img/Music Player Options.png';
import img24 from './img/Right options.png';
import img21 from './img/image10.png';
import img25 from './img/image11.png';



function Index() {

  return (
    <>
    <div id="main">
        <div id="top">
            <div id="sidebar">
                <div id="logobar">
                    <img src={img1} alt=""></img>
                </div>
                <div id="homebar">
                    <div className="logos">
                        <div><img src={img2} alt=""></img></div>
                        <div>Home</div>
                    </div>
                    <div className="logos">
                        <div><img src={img3} alt=""></img></div>
                        <div>Search</div>
                    </div>
                    <div className="logos">
                        <div><img src={img4} alt=""></img></div>
                        <div>Your library</div>
                    </div>
                </div>
                <div id="playbar">
                    <div className="logos">
                        <div><img src={img5} alt=""></img></div>
                        <div>Home</div>
                    </div>
                    <div className="logos">
                        <div><img src={img6} alt=""></img></div>
                        <div>Search</div>
                    </div>
                    <div className="logos">
                        <div><img src={img7} alt=""></img></div>
                        <div>Your library</div>
                    </div>
                </div>
                <div id="favbar">
                    <div>FAV</div>
                    <div>Daily Mix1</div>                
                    <div>Discover Weekly</div>
                    <div>Malyalam</div>
                    <div>Dance/Electronic Mix</div>
                    <div>EDM/Popluar</div>
                </div>
                <div id="downbar">
                    <div className="downlogo">
                        <div><img src={img8} alt=""></img></div>
                        <div>Install App</div>
                    </div>
                </div>
            </div>
            <div id="mainbar">
                <div id="upperrow">
                    <div><img src={img9} alt="" width="30%"></img></div>
                    <div><img src={img10} alt=""></img></div>
                </div>
                <div id="gm">
                    <div>Good moring</div>
                </div>
                <div id="favlist">
                    <div className="list1">
                        <div><img src={img11} alt=""  height="100%"></img></div>
                        <div id="text11">Likked Song</div>
                    </div>
                    <div  className="list1">
                        <div><img src={img12} alt="" height="80%"></img></div>
                        <div className="text1">NEFFEX Playlist</div>
                    </div>
                    <div  className="list1">
                        <div><img src={img13} alt="" height="80%"></img></div>
                        <div className="text1">K/DA</div>
                    </div>
                    <div  className="list1">
                        <div><img src={img14} alt="" height="80%"></img></div>
                        <div className="text1">Liked Songs</div>
                    </div>
                    <div  className="list1">
                        <div><img src={img15} alt="" height="80%"></img></div>
                        <div className="text1">Dance/Electronics Mix</div>
                    </div>
                </div>
                <div id="gmm">
                    <div>Shows you might like</div>
                </div>
                <div id="songs">
                    <div className="box1">
                        <div className="playimg"><img src={img16} alt="" className="imges"></img></div>
                        <div className="songtitle">Weekly Motivtion...</div>
                        <div className="singer">Parth Jadav</div>
                    </div>
                    <div className="box1">
                        <div className="playimg"><img src={img17} alt="" className="imges"></img></div>
                        <div className="songtitle">MEDITATION SELF</div>
                        <div className="singer">Parth Jadav</div>
                    </div>
                    <div className="box1">
                        <div className="playimg"><img src={img18} alt="" className="imges"></img></div>
                        <div className="songtitle">Words beyond act...</div>
                        <div className="singer">Parth Jadav</div>
                    </div>
                    <div className="box1">
                        <div className="playimg"><img src={img19} alt="" className="imges"></img></div>
                        <div className="songtitle">The Alexa Show</div>
                        <div className="singer">Parth Jadav</div>
                    </div>
                    <div className="box1">
                        <div className="playimg"><img src={img20} alt="" className="imges"></img></div>
                        <div className="songtitle">The Stories of Ma...</div>
                        <div className="singer">Parth Jadav</div>
                    </div>
                    <div className="box1">
                        <div className="playimg"><img src={img21} alt="" className="imges"></img></div>
                        <div className="songtitle">Motivtional daily b...</div>
                        <div className="singer">Parth Jadav</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="bottombar">
            <div id="btmlft">
                <div id="btmlftimg"><img src={img25} alt="" height="80%"></img></div>
                <div id="btmlfttext">
                    <div id="text2">Dreaming On<div id="text3">NEFFEX</div></div>
                    
                </div>
                <div id="gheart"><img src={img22} alt="" height="40%"></img></div>
            </div>
            <div id="pause"><img src={img23} alt="" height="80%"></img></div>
            <div id="btmrgt"><img src={img24} alt="" height="40%"></img></div>
        </div>
        <div id="bottombar2"></div>
        <div id="triangle"></div>
    </div>
    </>
  )
}

export default Index
