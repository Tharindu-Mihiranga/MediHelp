// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Authentication',
    type: 'group',
    children: [
        {
            id: 'login1',
            title: 'Login',
            type: 'item',
            url: '#',
            // url: '/login',
            target: false
        },
        {
            id: 'register1',
            title: 'Register',
            type: 'item',
            url: '#',
            // url: '/register',
            target: false
        }
    ]
};

export default pages;
