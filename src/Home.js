import React from 'react'

import Footer from './components/inc/Footer';
import Header from './components/inc/Header'
import TopNav from './components/inc/TopNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const home = () => {
    return (
        <>
            <TopNav />
            <Header />
            {/* ad view start */}
            <div class="widget-content">
                <a href="https://www.templateify.com/">Responsive Advertisement</a>
            </div>
            {/* ad view end */}
            {/* feedback start */}
            <div class="feedback-content">
                <div className='feedback'>
                    <div className='f-updates'>
                        <h5>trending</h5>
                        <p>Hello to CRICRING to more updates...</p>
                    </div>
                </div>
            </div>
            {/* feedback end */}
            {/* latest posts start */}
            <div class="latest-posts-content">
                <div className='latest-posts'>
                    <div className='posts'>
                        <div className='post-lay'>
                            <div className='post-details'>
                                <h1>Gawadar is great port for visiting</h1>
                                <div className='post-owns'>
                                    <p>Author name&nbsp;</p>
                                    <p>Sept 20, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='posts'>
                        <div className='post-lay'>
                            <div className='post-details'>
                                <h1>Gawadar is great port for visiting</h1>
                                <div className='post-owns'>
                                    <p>Author name&nbsp;</p>
                                    <p>Sept 20, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='posts'>
                        <div className='post-lay'>
                            <div className='post-details'>
                                <h1>Gawadar is great port for visiting</h1>
                                <div className='post-owns'>
                                    <p>Author name&nbsp;</p>
                                    <p>Sept 20, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* latest posts end */}

            {/* news start */}
            <div className='news-updates'>
                <div className='inner-widget'>
                    <div className='news-left'>
                        <div className='top-left'>
                            <div className='review'>
                                <h4>Review&nbsp;</h4>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </div>
                            <a href='/#'>View all</a>
                        </div>
                        <div className='post-body'>
                            <div className='post-body-left'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <a href='/#'><h2>Gawadar is great port for visiting...</h2></a>
                                <p>by <a href='/#'>Author name</a> 22 Sept 2022</p>
                            </div>
                            <div className='post-body-right'>
                                <div className='more-posts'>
                                    <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                    <div className='single-post-details'>
                                        <a href='/#'>Gawadar is great port for visiting...</a>
                                        <p>Sept 22, 2022</p>
                                    </div>
                                </div>
                                <div className='more-posts'>
                                    <a href='/#'><img src='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' alt='post' /></a>
                                    <div className='single-post-details'>
                                        <a href='/#'>Gawadar is great port for visiting...</a>
                                        <p>Sept 22, 2022</p>
                                    </div>
                                </div>
                                <div className='more-posts'>
                                    <a href='/#'><img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt='post' /></a>
                                    <div className='single-post-details'>
                                        <a href='/#'>Gawadar is great port for visiting...</a>
                                        <p>Sept 22, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='top-left'>
                            <div className='review'>
                                <h4>Latest videos&nbsp;</h4>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </div>
                            <a href='/#'>View all</a>
                        </div>
                        <div className='videos-links'>
                            <div className='videos-links-body'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <a href='/#'><h4>Gawadar is great port for visiting...</h4></a>
                                <p>22 Sept 2022</p>
                            </div>
                            <div className='videos-links-body'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <a href='/#'><h4>Gawadar is great port for visiting...</h4></a>
                                <p>22 Sept 2022</p>
                            </div>
                            <div className='videos-links-body'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <a href='/#'><h4>Gawadar is great port for visiting...</h4></a>
                                <p>22 Sept 2022</p>
                            </div>
                        </div>
                        {/* ad view start */}
                        <div className='inner-ad'>
                            <a href="https://www.templateify.com/">Responsive Advertisement</a>
                        </div>
                        {/* ad view end */}
                        <div className='top-left'>
                            <div className='review'>
                                <h4>Latest article&nbsp;</h4>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </div>
                            <a href='/#'>View all</a>
                        </div>
                        <div className='articles-post'>
                            <div className='more-articles'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <div className='single-article-details'>
                                    <a href='/#'>Lorem Ipsum is simply dummy text of the printing and typesetting industry…</a>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard…</p>
                                    <p>by <a href='/#'>Author name</a> 22 Sept 2022</p>
                                </div>
                            </div>
                            <div className='more-articles'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <div className='single-article-details'>
                                    <a href='/#'>Lorem Ipsum is simply dummy text of the printing and typesetting industry…</a>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard…</p>
                                    <p>by <a href='/#'>Author name</a> 22 Sept 2022</p>
                                </div>
                            </div>
                            <div className='more-articles'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <div className='single-article-details'>
                                    <a href='/#'>Lorem Ipsum is simply dummy text of the printing and typesetting industry…</a>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard…</p>
                                    <p>by <a href='/#'>Author name</a> 22 Sept 2022</p>
                                </div>
                            </div>
                        </div>
                        {/* ad view start */}
                        <div className='inner-ad'>
                            <a href="https://www.templateify.com/">Responsive Advertisement</a>
                        </div>
                        {/* ad view end */}
                        <div className='top-left'>
                            <div className='review'>
                                <h4>Live Chennels&nbsp;</h4>
                                <FontAwesomeIcon icon={faCaretRight} />
                            </div>
                            <a href='/#'>View all</a>
                        </div>
                        <div className='App-links'>
                            <div className='App-links-body'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <a href='/#'><h4>Gawadar is great port for visiting...</h4></a>
                                <p>22 Sept 2022</p>
                            </div>
                            <div className='App-links-body'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <a href='/#'><h4>Gawadar is great port for visiting...</h4></a>
                                <p>22 Sept 2022</p>
                            </div>
                            <div className='App-links-body'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <a href='/#'><h4>Gawadar is great port for visiting...</h4></a>
                                <p>22 Sept 2022</p>
                            </div>
                            <div className='App-links-body'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <a href='/#'><h4>Gawadar is great port for visiting...</h4></a>
                                <p>22 Sept 2022</p>
                            </div>
                        </div>
                        <div className='website-post'>
                            <div className='more-website'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <div className='single-website-details'>
                                    <a href='/#'>Lorem Ipsum is simply dummy text of the printing and typesetting industry…</a>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard…</p>
                                    <p>by <a href='/#'>Author name</a> 22 Sept 2022</p>
                                </div>
                            </div>
                            <div className='more-website'>
                                <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                <div className='single-website-details'>
                                    <a href='/#'>Lorem Ipsum is simply dummy text of the printing and typesetting industry…</a>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard…</p>
                                    <p>by <a href='/#'>Author name</a> 22 Sept 2022</p>
                                </div>
                            </div>
                        </div>
                        {/* ad view end */}
                        {/* ad view start */}
                        <div className='inner-ad'>
                            <a href="https://www.templateify.com/">Responsive Advertisement</a>
                        </div>
                        {/* ad view end */}
                    </div>
                    <div className='tags-right'>
                        <div className='more-social-links'>
                            <p>Follow us</p>
                            <div className='other-links'>
                                <a alt="facebook" className='facebook' href='/#' target="blank">
                                    <FontAwesomeIcon icon={faFacebookF} style={{ borderRadius: "50px", backgroundColor: 'white', fontSize: '12px', padding: '5px 8px', margin: '0px 8px' }} />
                                    <span className='text'>Facebook</span>
                                </a>
                                <a alt="facebook" className='twitter' href='/#' target="blank">
                                    <FontAwesomeIcon icon={faTwitter} style={{ borderRadius: "50px", backgroundColor: 'white', fontSize: '12px', padding: '5px 5px', margin: '0px 8px' }} />
                                    <span className='text'>Twitter</span>
                                </a>
                                <a alt="facebook" className='youtube' href='/#' target="blank">
                                    <FontAwesomeIcon icon={faYoutube} style={{ borderRadius: "50px", backgroundColor: 'white', fontSize: '12px', padding: '5px 5px', margin: '0px 8px' }} />
                                    <span className='text'>Youtube</span>
                                </a>
                                <a alt="facebook" className='instagram' href='/#' target="blank">
                                    <FontAwesomeIcon icon={faInstagram} style={{ borderRadius: "50px", backgroundColor: 'white', fontSize: '12px', padding: '5px 6px', margin: '0px 8px' }} />
                                    <span className='text'>Instagram</span>
                                </a>
                            </div>
                        </div>
                        <div className='popular-posts'>
                            <p>Popular posts</p>
                            <div className='other-pop-posts'>
                                <div className='pop-posts'>
                                    <a href='/#'><img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='post' /></a>
                                    <div className='pop-post-details'>
                                        <a href='/#'>Gawadar is great port for visiting...</a>
                                        <p>Sept 22, 2022</p>
                                    </div>
                                </div>
                                <div className='pop-posts'>
                                    <a href='/#'><img src='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' alt='post' /></a>
                                    <div className='pop-post-details'>
                                        <a href='/#'>Gawadar is great port for visiting...</a>
                                        <p>Sept 22, 2022</p>
                                    </div>
                                </div>
                                <div className='pop-posts'>
                                    <a href='/#'><img src='https://static.remove.bg/remove-bg-web/3ad3b721d276f1af1fb7121aff638a866139749a/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png' alt='post' /></a>
                                    <div className='pop-post-details'>
                                        <a href='/#'>Gawadar is great port for visiting...</a>
                                        <p>Sept 22, 2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='subscribe-youtube'>
                            <p>Subscribe us</p>
                            <div className='youtube-video' id='sqx7Pfk2wto'>
                                <iframe src="https://www.youtube.com/embed/sqx7Pfk2wto?" title='My Video' frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" __idm_id__="1040385">
                                </iframe>
                            </div>
                        </div>
                        <div className='comments'>
                            <p>Comments</p>
                            <div className='top-comments'>
                                <div className='inner-comments'>
                                    <a href='/#'><img src='https://4.bp.blogspot.com/-WYQBMs5mZUk/YIJClJFTAqI/AAAAAAAAAVk/ksQ5B60YhSIo3K7Qn8cPIwu9Cuj4smnlQCK4BGAYYCw/w39-h39-p-k-no-nu/Sora%2BBlogging%2BTips.jpg' alt='post' /></a>
                                    <div className='comments-details'>
                                        <a href='/#'>Lorem Ipsum is simply</a>
                                        <p>Lorem Ipsum is simply dummy text of</p>
                                    </div>
                                </div>
                                <div className='inner-comments'>
                                    <a href='/#'><img src='https://4.bp.blogspot.com/-WYQBMs5mZUk/YIJClJFTAqI/AAAAAAAAAVk/ksQ5B60YhSIo3K7Qn8cPIwu9Cuj4smnlQCK4BGAYYCw/w39-h39-p-k-no-nu/Sora%2BBlogging%2BTips.jpg' alt='post' /></a>
                                    <div className='comments-details'>
                                        <a href='/#'>Lorem Ipsum is simply</a>
                                        <p>Lorem Ipsum is simply dummy text of</p>
                                    </div>
                                </div>
                                <div className='inner-comments'>
                                    <a href='/#'><img src='https://4.bp.blogspot.com/-WYQBMs5mZUk/YIJClJFTAqI/AAAAAAAAAVk/ksQ5B60YhSIo3K7Qn8cPIwu9Cuj4smnlQCK4BGAYYCw/w39-h39-p-k-no-nu/Sora%2BBlogging%2BTips.jpg' alt='post' /></a>
                                    <div className='comments-details'>
                                        <a href='/#'>Lorem Ipsum is simply</a>
                                        <p>Lorem Ipsum is simply dummy text of</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='main-tags'>
                            <p>Main Tags</p>
                            <div className='top-tags'>
                                <div className='inner-tags'>
                                    <a href='/#'>Lorem</a>
                                </div>
                                <div className='inner-tags'>
                                    <a href='/#'>hel</a>
                                </div>
                                <div className='inner-tags'>
                                    <a href='/#'>Simply</a>
                                </div>
                                <div className='inner-tags'>
                                    <a href='/#'>okay</a>
                                </div>
                                <div className='inner-tags'>
                                    <a href='/#'>Ipsum</a>
                                </div>
                                <div className='inner-tags'>
                                    <a href='/#'>sun</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* news end */}
            <Footer />
        </>
    )
}

export default home;

