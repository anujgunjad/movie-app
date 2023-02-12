import React from 'react';
import './Sidebar.scss';
import profileImage from '../../assets/profile.png';
import SearchIcon from '@mui/icons-material/Search';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import TvIcon from '@mui/icons-material/Tv';
import ListIcon from '@mui/icons-material/List';
import UpdateIcon from '@mui/icons-material/Update';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const listConfig = {
    genralList: [
        {
            name: 'Discover',
            icon: <SearchIcon />,
            isSelect: 'selected',
        },
        {
            name: 'Playlist',
            icon: <PlaylistPlayIcon />,
            isSelect: false,
        },
        {
            name: 'Movie',
            icon: <LiveTvIcon />,
            isSelect: false,
        },
        {
            name: 'TV Show',
            icon: <TvIcon />,
            isSelect: false,
        },
        {
            name: 'My List',
            icon: <ListIcon />,
            isSelect: false,
        },
    ]
}

function Sidebar(props) {
    return (
        <div className={'sidebar' + (props.isSideDrawer ? ' open' : '')} >
           
            <div className='sidebar_profile'>
                <div className='sidebar_profile_image'>
                    <img loading='lazy' src={profileImage} alt="profile" />
                </div>
                <span className='font-20 fw600 ln27'>Eric Hoffman</span>
            </div>
            <div className='division_line'></div>
            <nav className='sidebar_content'>
                <ul>
                    {listConfig.genralList.map((item, i) => {
                        return (
                            <li key={i}>
                                <a className={`list_item d-flex align-center ${item.isSelect}`} tabIndex="0" href="/">
                                    <span className="list_item-icon light-color smright14">
                                        {item.icon}
                                    </span>
                                    <span className="list_item-txt light-color font-15 fw600 ln37">{item.name}</span>

                                </a>
                            </li>
                        )
                    })}
                    <div className='division_line'></div>

                    <li>
                        <a className="list_item d-flex align-center" tabIndex="0" href="/">
                            <span className="list_item-icon light-color smright14">
                                <UpdateIcon />
                            </span>
                            <span className="list_item-txt light-color font-15 fw600 ln37">Watch Later</span>

                        </a>
                    </li>
                    <li>
                        <a className="list_item d-flex align-center" tabIndex="0" href="/">
                            <span className="list_item-icon light-color smright14">
                                <FavoriteBorderIcon />
                            </span>
                            <span className="list_item-txt light-color font-15 fw600 ln37">Recommended</span>

                        </a>
                    </li>

                    <div className='division_line'></div>

                    <li>
                        <a className="list_item d-flex align-center" tabIndex="0" href="/">
                            <span className="list_item-icon light-color smright14">
                                <SettingsOutlinedIcon />
                            </span>
                            <span className="list_item-txt light-color font-15 fw600 ln37">Settings</span>

                        </a>
                    </li>
                    <li>
                        <a className="list_item d-flex align-center" tabIndex="0" href="/">
                            <span className="list_item-icon light-color smright14">
                                <LogoutOutlinedIcon />
                            </span>
                            <span className="list_item-txt light-color font-15 fw600 ln37">Logout</span>

                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;