import React from 'react';
import './MainSection5.scss'

export default function MainSection5() {
    return (
        <div className='section_5_wrapper'>
            <img src="https://vladislavkiselov.github.io/Go_Surf//img/Shop_Image.png" alt="#" className='shop_image' />
            <div className=' section_5 container'>
                <div className='section5_top'>
                    <h2 className='anim_item'>Shop</h2>
                    <span>Shop</span>
                </div>
                <div className='wrapper_surfbord'>
                    <div className='surfbord_content'>
                        <h4>Style</h4>
                        <h3 className='name_product'>North Nugget TT Surfboard</h3>
                        <h4 className='price'>$799</h4>
                        <div className='btn_box'>
                            <h3>Drop</h3>
                            <button>In</button>
                            <svg width="25" height="21" viewBox="0 0 25 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="Shape Copy" d="M15.3689 19.5872L23.5825 11.4365C24.3349 10.6853 24.3349 9.46609 23.5825 8.71746L15.3689 0.561846C14.6102 -0.189295 13.3821 -0.185526 12.6235 0.561846C11.8723 1.31424 11.8723 2.52844 12.6235 3.28084L17.4286 8.04826L2.0144 8.04826C0.900896 8.04826 1.14441e-05 8.94789 1.14441e-05 10.0614C1.14441e-05 11.1736 0.900896 12.0745 2.0144 12.0745L17.4576 12.0745L12.6235 16.8671C11.8723 17.6182 11.8723 18.8337 12.6235 19.5848C13.3809 20.3372 14.6089 20.3385 15.3689 19.5873V19.5872Z" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <div className='surfbord'>
                        <img src="https://vladislavkiselov.github.io/Go_Surf//img/Surfboard.png" alt="surf" />
                    </div>
                    <div className='surfboard_accessories'>
                        <h3>Extras</h3>
                        <div className='wrapper_accessories'>
                            <div className='box_accessories'>
                                <div className='accessory'>
                                    <div className='box_img_accessory'>
                                        <img src="https://vladislavkiselov.github.io/Go_Surf//img/Wax.png" alt="#" />
                                    </div>
                                    <h4>Sex Wax</h4>
                                    <h5>$24.99</h5>
                                </div>
                            </div>
                            <div className='box_accessories'>
                                <div className='accessory'>
                                    <div className='box_img_accessory'>
                                        <img src="https://vladislavkiselov.github.io/Go_Surf//img/Bracelet.png" alt="#" />
                                    </div>
                                    <h4>Pura Vida</h4>
                                    <h5>$27.99</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
