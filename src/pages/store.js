import { reactive } from 'vue';

export const store = reactive({
    baseUrl: 'http://127.0.0.1:8000/api',
    menuItems: [
        {
            name: 'homepage',
            label: 'Home'
        },
        {
            name: 'portfolio',
            label: 'Portfolio'
        },
        {
            name: 'contacts',
            label: 'contatti'
        },
        {
            name: 'about',
            label: 'Chi sono'
        }
    ]
});
