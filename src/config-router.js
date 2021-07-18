import React from 'react';

import ChangePass from "./pages/changePass";
import ChangeProfile from "./pages/changeProfile";
import Home from "./pages/home";
import Login from "./pages/login";
import PostDetail from "./pages/postDetail";
import PostPicture from "./pages/postPicture";
import Profile from "./pages/profile";
import Register from "./pages/register";



const routes = [
    { 
        path: '/change_password',
        exact: false,
        main: () => <ChangePass />
    },
    { 
        path: '/change_profile',
        exact: false,
        main: () => <ChangeProfile />
    },
    { 
        path: '/profile',
        exact: false,
        main: () => <Profile />
    },
    { 
        path: '/postpicture',
        exact: true,
        main: () => <PostPicture />
    },
    { 
        path: '/register',
        exact: true,
        main: () => <Register />
    },
    { 
        path: '/postdetail',
        exact: true,
        main: () => <PostDetail  />
    },
    { 
        path: '/login',
        exact: true,
        main: () => <Login  />
    },
    { 
        path: '/',
        exact: false,
        main: () => <Home />
    },
    // { 
    //     path: '/ModalUser',
    //     exact: false,
    //     main: () => <ModalUser />
    // },
    // { 
    //     path: '/Catalogue/all',
    //     exact: true,
    //     main: () => <ProductItem />
    // },
    // { 
    //     path: '',
    //     exact: true,
    //     main: () => <NotfoundPage />
    // },
];

export default routes;