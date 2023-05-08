import React from 'react';
import ICON1 from '../../../assets/images/icons/1.png'
import ICON2 from '../../../assets/images/icons/2.png'
import ICON3 from '../../../assets/images/icons/3.png'
import ICON4 from '../../../assets/images/icons/4.png'

const Features = () => {
    return (
        <div className='py-5 container'>

            <div className='d-flex gap-4'>
                <div>
                    <div className="image">
                        <img src={ICON1} className='img-fluid' width={40} alt="" />
                    </div>
                    <h3>Awesome Aroma</h3>
                    <p>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div>
                    <div className="image">
                        <img src={ICON2} className='img-fluid' width={40} alt="" />
                    </div>
                    <h3>High Quality</h3>
                    <p>We served the coffee to you maintaining the best quality</p>
                </div>
                <div>
                    <div className="image">
                        <img src={ICON3} className='img-fluid' width={40} alt="" />
                    </div>
                    <h3>Pure Grades</h3>
                    <p>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div>
                    <div className="image">
                        <img src={ICON4} className='img-fluid' width={40} alt="" />
                    </div>
                    <h3>Proper Raosting</h3>
                    <p>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>

        </div>

    );
}

export default Features;
