import { writable } from 'svelte/store';
import exhibits from './exhibits';
import { BidDetails } from './exhibit.model';


const basicStore = writable({
    exhibits: exhibits,
    onSaleId: '1',
    currentUser: {
        id: '666',
        name: 'Devil'
    }
});


const auctionStore = {
    subscribe: basicStore.subscribe,
    updateAuction: (details: any) => {
        basicStore.update(store => {
            const { userId: bidderId, id: exhibitId, bid } = details;

            const foundIndex = store.exhibits.findIndex(exhibit => exhibit.id === exhibitId);
            const found = store.exhibits[foundIndex];
            if (found) {
                found.currentBid = bid;
                found.bidCount = found.bidCount === undefined ? 1 : found.bidCount + 1;
                found.bidderId = bidderId;

                if (found.bidCount === 3) {
                    store.exhibits.forEach(exhibit => {
                        exhibit.isOnSale = false;

                    })

                    store.exhibits[foundIndex].isSold = true;
                    store.exhibits[foundIndex + 1].isOnSale = true;

                }
            }
            console.log('==>Updating')
            return {
                ...store, exhibits: [...store.exhibits]
            }
        })
    }
}

export default auctionStore;