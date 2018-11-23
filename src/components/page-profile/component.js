import React, { Component } from 'react';
import { Header } from '../libraries/header/component';
import '../../App.css';

export class PageProfile extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <div class="container">
              <div class="row">
                  <div class="col-md-8">
                      <div class="box">
                          <div class="box-container">
                            <div className="main-profile">
                              <div className="bg-profile"></div>
                              <div className="pv-profile">
                                <img src="images/hantze-sudarma.jpg" alt="" title="" className="rounded-circle" />
                              </div>
                              <div className="pv-desc">
                                <div>
                                  <h1>Hantze Sudarma <span>2nd</span></h1>
                                  <h2>Laboratory Coordinator</h2>
                                  <span>Indonesia</span>
                                  <div>
                                    <button className="btn-connect">Connect</button>
                                    <button className="btn-inmail">InMail</button>
                                    <button className="btn-more">More...</button>
                                  </div>
                                </div>
                                <ul>
                                  <li>
                                    <span>
                                      <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className="univeristy-def img-fluid" alt="" title="" />
                                    </span>
                                    <strong>Binus International University</strong>
                                  </li>
                                  <li>
                                    <span>
                                      <img src="https://media.licdn.com/dms/image/C4E0BAQG46LuIrhnInA/company-logo_200_200/0?e=1550102400&v=beta&t=LHhBhVPTsv1HfTPHkjARMuKwQQeDWF5hJXPG75pyjbI" className="img-fluid" alt="" title="" />
                                    </span>
                                    <strong>Universitas Bina Nusantara</strong>
                                  </li>
                                  <li>
                                    <span>
                                      <svg viewBox="0 0 24 24" width="24" height="24" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false">
                                        <path d="M16,15H10a3.24,3.24,0,0,1,1.79-2.89L12,12h2l0.21,0.11A3.24,3.24,0,0,1,16,15ZM13,8h0a2,2,0,0,0-2,2h0a2,2,0,0,0,2,2h0a2,2,0,0,0,2-2h0A2,2,0,0,0,13,8Zm8-4V20a2,2,0,0,1-2,2H5V19H3V17H5V13H3V11H5V7H3V5H5V2H19A2,2,0,0,1,21,4ZM19,4H7V20H19V4Z" className="large-icon" style={{ fill: '#7f7f7f' }}></path>
                                      </svg>
                                    </span>
                                    <strong>see contact info</strong>
                                  </li>
                                  <li>
                                    <span>
                                      <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon" focusable="false">
                                        <path d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z" className="large-icon" style={{ fill: '#7f7f7f' }}></path>
                                      </svg>
                                    </span>
                                    <span>500+ connections</span>
                                  </li>
                                </ul>
                              </div>
                              <p className="pl-4 pr-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu suscipit massa, consectetur consectetur arcu. Nunc iaculis ante at ultrices auctor. Praesent magna ligula, pulvinar in semper lobortis, iaculis ac dui. Ut pretium mi id turpis tristique, lacinia placerat libero lacinia. Duis ornare pellentesque magna at lacinia. Phasellus vitae mi odio. Praesent sagittis imperdiet justo. Aenean ut libero tellus. Mauris vitae vulputate purus. Praesent malesuada, risus sed ornare dignissim, dolor neque luctus mi, quis tincidunt tellus massa et metus. Mauris a justo ligula. Praesent posuere pulvinar nisi, vitae sodales metus consectetur nec. Pellentesque ornare vehicula orci, sit amet dignissim metus pretium at. Suspendisse laoreet nisi vel rhoncus ultrices</p>
                            </div>
                            <div className="show-more text-center">
                              <a href="#">Show more <i class="fas fa-angle-down"></i></a>
                            </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4">
                    <div class="viewed">
                      <h1>People Also Viewed</h1>
                      <ul>
                        <li>
                          <a href="#">
                            <span><img src="images/max-levchin.jpg" alt="" title="" className="rounded-circle" /></span>
                            <div className="item-desc">
                              <h3>Max Levchin <span>2nd</span></h3>
                              <span>Co-Founder &amp; CEO at Affirm, Inc</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span><img src="images/ahmad-zikri.jpg" alt="" title="" className="rounded-circle" /></span>
                            <div className="item-desc">
                              <h3>Ahmad Zikri <span>1nd</span></h3>
                              <span>Product Design, UI/UX</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span><img src="images/andoko-chandra.jpg" alt="" title="" className="rounded-circle" /></span>
                            <div className="item-desc">
                              <h3>Andoko Chandra <span>2nd</span></h3>
                              <span>CTO at Weekend, Inc</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span><img src="images/richard-fang.jpg" alt="" title="" className="rounded-circle" /></span>
                            <div className="item-desc">
                              <h3>Richard Fang <span>2nd</span></h3>
                              <span>CEO at Moselo</span>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PageProfile;
