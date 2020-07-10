import {writable} from 'svelte/store';
import exhibits from './exhibits';


const auctionStore = writable({
    exhibits: exhibits,
    onSaleId: '1',
    currentUser: {
        id: '666',
        name: 'Devil'
    }
});

export default auctionStore;