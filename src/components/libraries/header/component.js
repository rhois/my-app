import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { styles } from './styles';

export class Header extends Component {
    constructor(props) { //eslint-disable-line
        super(props);
        this.state = {
          isShow: false,
        };
    }
    render() {
        let searchForm = '';
        let boxOver = '';
        let placehold = 'Search';
        let btnShow = '';
        let ico = (<i className="fas fa-search"></i>);
        if(this.state.isShow) {
            searchForm = (
                <div>
                    <div style={styles.boxSearch}>
                        <h3 style={styles.titleSearch}>Search for</h3>
                        <ul className="search-for">
                            <li>
                                <a href="#">
                                    <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16,17.85V20a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V17.85a4,4,0,0,1,2.55-3.73l2.95-1.2V11.71l-0.73-1.3A6,6,0,0,1,4,7.47V6a4,4,0,0,1,4.39-4A4.12,4.12,0,0,1,12,6.21V7.47a6,6,0,0,1-.77,2.94l-0.73,1.3v1.21l2.95,1.2A4,4,0,0,1,16,17.85Zm4.75-3.65L19,13.53v-1a6,6,0,0,0,1-3.31V9a3,3,0,0,0-6,0V9.18a6,6,0,0,0,.61,2.58A3.61,3.61,0,0,0,16,13a3.62,3.62,0,0,1,2,3.24V21h4a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.75,14.2Z" className="active-item" style={{ fillOpacity: 1, fill: '#fff' }}></path>
                                        <path d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z" className="inactive-item" style={{ fill: '#0273b1' }}></path>
                                    </svg>
                                    <span>People</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2,13H22v6a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V13ZM22,8v4H2V8A1,1,0,0,1,3,7H7V6a3,3,0,0,1,3-3h4a3,3,0,0,1,3,3V7h4A1,1,0,0,1,22,8ZM15,6a1,1,0,0,0-1-1H10A1,1,0,0,0,9,6V7h6V6Z" className="active-item" style={{ fillOpacity: 1, fill: '#fff' }}></path>
                                        <path d="M21,7H17V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6V7H3A1,1,0,0,0,2,8V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7ZM9,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H9V6ZM20,18H4V13H20v5Zm0-6H4V9H20v3Z" className="inactive-item" style={{ fill: '#0273b1' }}></path>
                                    </svg>
                                    <span>Jobs</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon" focusable="false">
                                        <path d="M14,2H2A1,1,0,0,0,1,3V13a1,1,0,0,0,1,1H14a1,1,0,0,0,1-1V3A1,1,0,0,0,14,2ZM13,12H3V4H13v8ZM8,8H4v3H8V8ZM7,10H5V9H7v1ZM9,8h3V9H9V8Zm0,2h3v1H9V10Zm3-3H4V5h8V7Z" className="small-icon" style={{ fillOpacity: 1, fill: '#0273b1' }}></path>
                                    </svg>
                                    <span>Content</span>
                                </a>
                            </li>
                        </ul>
                        <div style={styles.boxRecent}>
                            <h3 style={{ fontSize: '16px' }}>Recent</h3>
                            <a href="#" style={{ color: '#000', fontWeight: '600', fontSize: '16px' }}>Clear</a>
                        </div>
                        <ul className="recent">
                            <li>
                                <Link to="/profile">
                                    <img src="images/hantze-sudarma.jpg" alt="" title="" className="rounded-circle" />
                                    <span>Hantze Sudarma</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    <img src="images/ahmad-zikri.jpg" alt="" title="" className="rounded-circle" />
                                    <span>Ahmad Zikri</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    <img src="images/andoko-chandra.jpg" alt="" title="" className="rounded-circle" />
                                    <span>Andoko Chandra</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    <img src="images/richard-fang.jpg" alt="" title="" className="rounded-circle" />
                                    <span>Richard Fang</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    <img src="images/siska-felicia.jpg" alt="" title="" className="rounded-circle" />
                                    <span>Siska Felicia</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    <img src="images/saras-meini.jpg" alt="" title="" className="rounded-circle" />
                                    <span>Saras Meini</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    <img src="images/andrew-mawikere.jpg" alt="" title="" className="rounded-circle" />
                                    <span>Andrew Mawikere</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile">
                                    <img src="images/alvin-ashari.jpg" alt="" title="" className="rounded-circle" />
                                    <span>Alvin Ashari</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            );

            boxOver = (<div className="box-over" onClick={() => this.setState({ isShow: false })}></div>);

            placehold = '';
            btnShow = (<button type="submit"><i className="fas fa-search"></i></button>);
            ico = '';
        }
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="header-left">
                                <Link to="/" className="logo">
                                    <img src="images/logo.png" alt="" title="" className="img-fluid" />
                                </Link>
                                <form>
                                    <div className="input-text">
                                        {ico}
                                        <input type="text" placeholder={placehold} name="search" onClick={() => this.setState({ isShow: true })} />
                                    </div>
                                    {btnShow}
                                    {searchForm}
                                </form>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="header-right">
                                <ul className="nav-main">
                                    <li>
                                        <a href="#" className="active">
                                            <span>
                                                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22,8.45L12.85,2.26a1.5,1.5,0,0,0-1.69,0L2,8.45,3.06,10,4,9.37V19a1,1,0,0,0,1,1h5V15h4v5h5a1,1,0,0,0,1-1V9.37L20.94,10Z" className="active-item" style={{ fillOpacity: 1, fill: '#fff' }}></path>
                                                    <path d="M22,9.45L12.85,3.26a1.5,1.5,0,0,0-1.69,0L2,9.45,3.06,11,4,10.37V20a1,1,0,0,0,1,1h6V16h2v5h6a1,1,0,0,0,1-1V10.37L20.94,11ZM18,19H15V15a1,1,0,0,0-1-1H10a1,1,0,0,0-1,1v4H6V8.89l6-4,6,4V19Z" className="inactive-item" style={{ fill: '#fff' }}></path>
                                                </svg>
                                            </span>
                                            <span>Home</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>
                                                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16,17.85V20a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V17.85a4,4,0,0,1,2.55-3.73l2.95-1.2V11.71l-0.73-1.3A6,6,0,0,1,4,7.47V6a4,4,0,0,1,4.39-4A4.12,4.12,0,0,1,12,6.21V7.47a6,6,0,0,1-.77,2.94l-0.73,1.3v1.21l2.95,1.2A4,4,0,0,1,16,17.85Zm4.75-3.65L19,13.53v-1a6,6,0,0,0,1-3.31V9a3,3,0,0,0-6,0V9.18a6,6,0,0,0,.61,2.58A3.61,3.61,0,0,0,16,13a3.62,3.62,0,0,1,2,3.24V21h4a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.75,14.2Z" className="active-item" style={{ fillOpacity: 1 }}></path>
                                                    <path d="M20.74,14.2L19,13.54V12.86l0.25-.41A5,5,0,0,0,20,9.82V9a3,3,0,0,0-6,0V9.82a5,5,0,0,0,.75,2.63L15,12.86v0.68l-1,.37a4,4,0,0,0-.58-0.28l-2.45-1V10.83A8,8,0,0,0,12,7V6A4,4,0,0,0,4,6V7a8,8,0,0,0,1,3.86v1.84l-2.45,1A4,4,0,0,0,0,17.35V20a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V17.47A3.5,3.5,0,0,0,20.74,14.2ZM16,8.75a1,1,0,0,1,2,0v1.44a3,3,0,0,1-.38,1.46l-0.33.6a0.25,0.25,0,0,1-.22.13H16.93a0.25,0.25,0,0,1-.22-0.13l-0.33-.6A3,3,0,0,1,16,10.19V8.75ZM6,5.85a2,2,0,0,1,4,0V7.28a6,6,0,0,1-.71,2.83L9,10.72a1,1,0,0,1-.88.53H7.92A1,1,0,0,1,7,10.72l-0.33-.61A6,6,0,0,1,6,7.28V5.85ZM14,19H2V17.25a2,2,0,0,1,1.26-1.86L7,13.92v-1a3,3,0,0,0,1,.18H8a3,3,0,0,0,1-.18v1l3.72,1.42A2,2,0,0,1,14,17.21V19Zm7,0H16V17.35a4,4,0,0,0-.55-2l1.05-.4V14.07a2,2,0,0,0,.4.05h0.2a2,2,0,0,0,.4-0.05v0.88l2.53,1a1.5,1.5,0,0,1,1,1.4V19Z" className="inactive-item" style={{ fill: '#c9d1d8' }}></path>
                                                </svg>
                                            </span>
                                            <span>My Network</span>
                                            <span className="notif">1</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>
                                                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M2,13H22v6a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V13ZM22,8v4H2V8A1,1,0,0,1,3,7H7V6a3,3,0,0,1,3-3h4a3,3,0,0,1,3,3V7h4A1,1,0,0,1,22,8ZM15,6a1,1,0,0,0-1-1H10A1,1,0,0,0,9,6V7h6V6Z" className="active-item" style={{ fillOpacity: 1 }}></path>
                                                    <path d="M21,7H17V6a3,3,0,0,0-3-3H10A3,3,0,0,0,7,6V7H3A1,1,0,0,0,2,8V19a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V8A1,1,0,0,0,21,7ZM9,6a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V7H9V6ZM20,18H4V13H20v5Zm0-6H4V9H20v3Z" className="inactive-item" style={{ fill: '#c9d1d8' }}></path>
                                                </svg>
                                            </span>
                                            <span>Jobs</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>
                                                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21,9H8a1,1,0,0,0-1,1V20a1,1,0,0,0,1,1H18l4,3V10A1,1,0,0,0,21,9Zm-4,8H12V16h5v1Zm1-3H11V13h7v1ZM17,5V7H6A1,1,0,0,0,5,8v8H3a1,1,0,0,1-1-1V5A1,1,0,0,1,3,4H16A1,1,0,0,1,17,5Z" className="active-item" style={{ fillOpacity: 1 }}></path>
                                                    <path d="M21,8H8A1,1,0,0,0,7,9V19a1,1,0,0,0,1,1H18l4,3V9A1,1,0,0,0,21,8ZM20,19.11L18.52,18H9V10H20v9.11ZM12,15h5v1H12V15ZM4,13H5v2H3a1,1,0,0,1-1-1V4A1,1,0,0,1,3,3H16a1,1,0,0,1,1,1V6H15V5H4v8Zm14,0H11V12h7v1Z" className="inactive-item" style={{ fill: '#c9d1d8' }}></path>
                                                </svg>
                                            </span>
                                            <span>Messaging</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>
                                                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="nav-icon" focusable="false" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M18.94,14H5.06L5.79,8.44A6.26,6.26,0,0,1,12,3h0a6.26,6.26,0,0,1,6.21,5.44Zm2,5-1.71-4H4.78L3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19Z" className="active-item" style={{ fillOpacity: 1 }}></path>
                                                    <path d="M20.94,19L19,14.49s-0.41-3.06-.8-6.06A6.26,6.26,0,0,0,12,3h0A6.26,6.26,0,0,0,5.79,8.44L5,14.49,3.06,19a0.71,0.71,0,0,0-.06.28,0.75,0.75,0,0,0,.75.76H10a2,2,0,1,0,4,0h6.27A0.74,0.74,0,0,0,20.94,19ZM12,4.75h0a4.39,4.39,0,0,1,4.35,3.81c0.28,2.1.56,4.35,0.7,5.44H7L7.65,8.56A4.39,4.39,0,0,1,12,4.75ZM5.52,18l1.3-3H17.18l1.3,3h-13Z" className="inactive-item" style={{ fill: '#c9d1d8' }}></path>
                                                </svg>
                                            </span>
                                            <span>Notifications</span>
                                            <span className="notif">4</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span>
                                                <img src="images/christian.jpg" className="rounded rounded-circle" />
                                            </span>
                                            <span>Me <i className="fas fa-caret-down"></i></span>
                                        </a>
                                    </li>
                                </ul>
                                <ul className="nav-side">
                                    <li>
                                        <a href="#">
                                            <span>
                                                <svg viewBox="0 0 24 24" width="24px" height="24px" x="0" y="0" preserveAspectRatio="xMinYMin meet" className="artdeco-icon" focusable="false">
                                                    <path d="M10,10h4v4H10V10Zm0,11h4V17H10v4ZM3,14H7V10H3v4Zm0,7H7V17H3v4ZM3,7H7V3H3V7Zm14,7h4V10H17v4ZM17,3V7h4V3H17ZM10,7h4V3H10V7Zm7,14h4V17H17v4Z" className="large-icon" style={{ fill: '#c9d1d8' }}></path>
                                                </svg>
                                            </span>
                                            <span>Work <i className="fas fa-caret-down"></i></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="text-center">Free Upgrade to Premium</span> 
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {boxOver}
            </header>
        )
    }
}

Header.propTypes = {
    close: PropTypes.bool.isRequired,
};
  
Header.defaultProps = {
    close: false,
};

export default Header;