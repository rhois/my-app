import React, { Component } from 'react';
import { Header } from '../libraries/header/component';

export class PageHome extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <div className="container">
              <div className="row">
                  <div className="col-md-3">
                      <div className="box">
                          <div className="box-container">
                              <div className="feed-identity text-center">
                                  <div className="member-bg"></div>
                                  <a href="#" className="feed-profile block">
                                      <img src="images/christian.jpg" className="rounded-circle" alt="" title="" />
                                  </a>
                                  <a href="#" className="identity-name block">Christian Hanggra</a>
                                  <p>Tech Enthusiast</p>
                              </div>
                              <div className="member-view text-center">
                                  <ul>
                                      <li>
                                          <a href="#">
                                              <span>80</span>
                                              <p>Who's viewed your profile</p>
                                          </a>
                                      </li>
                                      <li>
                                          <a href="#">
                                              <span>1,133</span>
                                              <p>Connections<br /><strong>Manage your network</strong></p>
                                          </a>
                                      </li>
                                  </ul>
                              </div>
                              <div className="exclusive-member text-center">
                                  <a href="#">
                                      <h2>Access exclusive tools &amp; insights</h2>
                                      <p>
                                          <span>
                                              <svg viewBox="0 0 24 24" width="24" height="24" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false">
                                                  <g className="large-icon">
                                                      <defs>
                                                          <clipPath id="hg1">
                                                          <rect x="2" y="2" width="20" height="20" rx="2.5" ry="2.5" style={{ fill: 'none' }}></rect>
                                                          </clipPath>
                                                      </defs>
                                                      <g style={{ clipPath: 'url(#hg1)' }}>
                                                          <polygon points="2 2 22 22 22 2 2 2" style={{ fill: '#c8b476' }}></polygon>
                                                          <polygon points="22 22 2 2 2 22 22 22" style={{ fill: '#b29a53' }}></polygon>
                                                      </g>
                                                  </g>
                                              </svg>
                                          </span>
                                          <strong>Free Upgrade to Premium</strong>
                                      </p>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-6">
                      <div className="box">
                          <div className="box-container">
                              <div className="feed-post">
                                  <div className="sharing-create">
                                      <textarea placeholder="Share an article, photo, video or idea"></textarea>
                                  </div>
                                  <div className="post-foot">
                                      <div>
                                          <button>
                                              <span>
                                                  <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon" focusable="false">
                                                      <path d="M11,8.75l2-2V13a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H9.25l-2,2H4v7h7V8.75ZM6,8.59L5,11l2.41-1L12.9,4.52,11.48,3.1Zm8.85-6.73-0.71-.71a0.5,0.5,0,0,0-.71,0L12.25,2.34l1.41,1.41,1.19-1.19A0.5,0.5,0,0,0,14.85,1.85Z" className="small-icon" style={{ fillOpacity: 1 }}></path>
                                                  </svg>
                                              </span>
                                              Write an article
                                          </button>
                                          <button>
                                              <span>
                                                  <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon" focusable="false"><path d="M21,6H18L16.5,3h-9L6,6H3A1,1,0,0,0,2,7V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V7A1,1,0,0,0,21,6ZM7.36,8l1.5-3h6.28l1.5,3H20v2H16.58a5,5,0,0,0-9.16,0H4V8H7.36Zm7.76,4A3.13,3.13,0,1,1,12,8.88,3.13,3.13,0,0,1,15.13,12ZM4,18V11H7.1a5,5,0,1,0,9.8,0H20v7H4Z" className="large-icon"></path></svg>
                                              </span>
                                              Images
                                          </button>
                                          <button>
                                              <span>
                                                  <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon" focusable="false"><path d="M21,5.92a1,1,0,0,0-.57.18L17,8.5V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7V17a1,1,0,0,0,1,1H16a1,1,0,0,0,1-1V15.5l3.43,2.4a1,1,0,0,0,.57.18,1,1,0,0,0,1-1V6.92A1,1,0,0,0,21,5.92ZM15,16H4V8H15v8Zm2-5.21,3-2.1v6.62l-3-2.1V10.79Z" className="large-icon"></path></svg>
                                              </span>
                                              Video
                                          </button>
                                      </div>
                                      <button>Post</button>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="line">
                          <hr />
                          <button>Sort by: Top <i className="fas fa-caret-down"></i></button>
                      </div>
                      <div className="box">
                          <div className="box-container">
                              <div className="top-feed">
                                  <div className="header-feed">
                                      <div className="feed-desc">
                                          <a href="#">
                                              <img src="images/wirjadi-lorens.jpg" alt="" title="" className="rounded-circle" />
                                          </a>
                                          <div className="feed-title">
                                              <h3>Wirjadi Lorens</h3>
                                              <span className="feed-jobs">Founder at OKTAGON</span>
                                              <span>1d</span>
                                          </div>
                                      </div>
                                      <div>
                                          <a href="#">
                                              <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon" focusable="false"><path d="M2,10H6v4H2V10Zm8,4h4V10H10v4Zm8-4v4h4V10H18Z" className="large-icon"></path></svg>
                                          </a>
                                      </div>
                                  </div>
                                  <article>
                                      <a href="#">
                                          <img src="images/ai.jpg" alt="" title="" className="img-fluid" />
                                          <h2>Artificial Intelligence ( AI ), Dari Teknologi Abstrak Hingga Jadi 'Otak' Bisnis</h2>
                                          <span>daily.oktagon.co.id</span>
                                      </a>
                                  </article>
                                  <div className="result-socmed">
                                      <span>1 Like</span>
                                  </div>
                                  <div className="footer-feed">
                                      <button>
                                          <span>
                                              <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon" focusable="false"><path d="M11.6,7L9.7,3.8C9.4,3.3,9.2,2.7,9,2.1L8.8,1c0,0,0,0,0,0H7C5.9,1,5,1.9,5,3v0.4C5,4,5.1,4.7,5.3,5.3L5.5,6c0,0,0,0,0,0l-3,0C1.7,6,1,6.7,1,7.5c0,0.4,0.1,0.7,0.4,1c0,0,0,0,0,0C1.1,8.8,1,9.1,1,9.5c0,0.5,0.3,1,0.7,1.3c0,0,0,0,0,0c-0.1,0.2-0.2,0.5-0.2,0.7c0,0.8,0.6,1.4,1.3,1.5c0,0,0,0,0,0c-0.1,0.3-0.1,0.6,0,1c0.2,0.6,0.9,1,1.5,1H7c0.9,0,1.5-0.1,2.1-0.3l2.1-0.7c0,0,0,0,0,0H14c0,0,0,0,0,0V7c0,0,0,0,0,0L11.6,7C11.6,7,11.6,7,11.6,7zM3.4,10.1L3,9.6C2.9,9.4,2.8,9.2,2.9,8.9L3,8c0,0,0,0,0,0l5.1,0c0,0,0,0,0,0L7,4.7C6.9,4.3,6.9,3.8,6.9,3.4V3.1c0-0.2,0.2-0.4,0.4-0.4c0,0,0.1,0,0.1,0c0.1,0.7,0.4,1.5,0.7,2L10.7,9c0,0,0,0,0,0H12c0,0,0,0,0,0v3c0,0,0,0,0,0h-0.6c0,0,0,0,0,0l-2.5,0.8C8.5,12.9,8.1,13,7.7,13H4.9c-0.2,0-0.4-0.2-0.5-0.4l-0.1-0.5l-0.6-0.5c-0.2-0.2-0.4-0.5-0.3-0.8L3.4,10.1z" className="small-icon" style={{ fillOpacity: 1 }}></path></svg>
                                          </span>
                                          <span>Like</span>
                                      </button>
                                      <button>
                                          <span>
                                              <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon" focusable="false"><path d="M14,3H2A1,1,0,0,0,1,4v7a1,1,0,0,0,1,1h9l4,3V4A1,1,0,0,0,14,3ZM3,10V5H13v6.11L11.52,10H3ZM5,7h6V8H5V7Z" className="small-icon" style={{ fillOpacity: 1 }}></path></svg>
                                          </span>
                                          <span>Comment</span>
                                      </button>
                                      <button>
                                          <span>
                                              <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon" focusable="false"><path d="M15.7,7.3L9,1v4H7c-3.9,0-7,3.1-7,7v3h1.4c0-2.2,1.9-4,4.1-4c0,0,0.1,0,0.1,0H9v4l0,0l6.7-6.3C16.1,8.4,16.1,7.7,15.7,7.3C15.7,7.3,15.7,7.3,15.7,7.3z M11,10.6V9H5.6c-1.2,0-2.4,0.4-3.4,1.1C3.1,8.2,4.9,7,7,7h4V5.4L13.7,8L11,10.6z" className="small-icon" style={{ fillOpacity: 1 }}></path></svg>
                                          </span>
                                          <span>Share</span>
                                      </button>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-md-3">
                      <div className="box">
                          <div className="box-container">
                              <div className="feed-follows">
                                  <h1>
                                      <span>Add to your feed</span> 
                                      <span><svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon" focusable="false"><path d="M7,7h2v5H7V7zM15,8c0,3.9-3.1,7-7,7c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7C11.9,1,15,4.1,15,8zM13.2,8c0-2.9-2.3-5.2-5.2-5.2C5.1,2.8,2.8,5.1,2.8,8c0,2.9,2.3,5.2,5.2,5.2C10.9,13.2,13.2,10.9,13.2,8zM7,6h2V4H7V6z" className="small-icon" style={{ fillOpacity: 1 }}></path></svg></span>
                                  </h1>
                                  <ul>
                                      <li>
                                          <div className="item-list">
                                              <a href="#">
                                                  <span><img src="images/max-levchin.jpg" alt="" title="" className="rounded-circle" /></span>
                                                  <div className="item-desc">
                                                      <h3>
                                                          Max Levchin 
                                                          <svg viewBox="0 0 40 40" width="40px" height="40px" x="0" y="0" preserveAspectRatio="xMinYMin meet" focusable="false">
                                                              <g className="app-icon">
                                                                  <g>
                                                                  <path style={{ fill: '#0077B5' }} d="M37,2.4v29.1C37,32.9,35.9,34,34.5,34H10l-7,6V2.4C3,1.1,4.2,0,5.6,0h29C35.9,0,37,1.1,37,2.4z"></path>
                                                                  <g>
                                                                      <path style={{ fill: '#FFFFFF' }} d="M8,13h5v16H8V13z"></path>
                                                                      <path style={{ fill: '#FFFFFF' }} d="M16,13h4.8v2.4c0.6-1.3,2.5-2.6,4.9-2.6c4.7,0,6.3,2.1,6.3,7.2V29h-5v-8c0-2.7-0.5-4.1-2.5-4.1c-2.6,0-3.5,2-3.5,4.1V29h-5V13z"></path>
                                                                      <circle style={{ fill: '#FFFFFF' }} cx="10.5" cy="7.5" r="3.05"></circle>
                                                                  </g>
                                                                  </g>
                                                              </g>
                                                          </svg>
                                                      </h3>
                                                      <span>Co-Founder &amp; CEO at Affirm, Inc</span>
                                                  </div>
                                              </a>
                                              <button>+ Follow</button>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="item-list">
                                              <a href="#">
                                                  <span><img src="images/shopee.jpg" alt="" title="" className="img-fluid" /></span>
                                                  <div className="item-desc">
                                                      <h3>Shopee</h3>
                                                      <span>Company - Internet</span>
                                                  </div>
                                              </a>
                                              <button>+ Follow</button>
                                          </div>
                                      </li>
                                      <li>
                                          <div className="item-list">
                                              <a href="#">
                                                  <span><img src="images/software-engineer.jpg" alt="" title="" className="img-fluid" /></span>
                                                  <div className="item-desc">
                                                      <h3>Software Engineering</h3>
                                                      <span>Topic</span>
                                                  </div>
                                              </a>
                                              <button>+ Follow</button>
                                          </div>
                                      </li>
                                  </ul>
                                  <a href="#">View all recommendations</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
}

export default PageHome;
