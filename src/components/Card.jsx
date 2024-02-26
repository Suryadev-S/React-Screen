import Bullets from "./cardComponents/Bullets";
import WYG from "./cardComponents/WhatYouGet";
import WLI from "./cardComponents/WhyLoveIt";

const Card = ({ title }) => {
    return (
        <>
            <div className="card">
                <div className="card-number">1</div>
                <div className="card-highlight">Best xyz</div>
                <div className="card-img">
                    <img src="pngwing.com.png" />
                </div>
                <div>
                    <div className="card-body">
                        <b>{title}-</b>                        
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste molestias sint omnis!
                        
                        <br /><b>Main highlights</b>
                        <WYG>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam magni,
                            necessitatibus, similique vel sequi consectetur molestias dolorem quidem temporibus natus praesentium. Facere, harum veniam?
                        </WYG>
                        <Bullets />
                        <WLI list={["Documentation","Easy","Out of the box"]} />
                    </div>
                </div>
                <div>
                    <div className="rating">
                        <h1>92</h1>
                        <span>Exceptional</span>
                    </div>
                    <button>view more</button>
                </div>
            </div>
        </>
    );
}

export default Card;