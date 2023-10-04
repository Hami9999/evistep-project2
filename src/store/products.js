
export const products = {
    namespaced: true,

    state: {
        isError:false,
        products:[
            {
                id:1,name:'WZRD #5555',prdImg:'image.png',titlle:'WZRDS',prdSecImg:'image47.png'},
            {
                id:2,name:'WZRD #6567',prdImg:'image346.png',titlle:'WZRDS',prdSecImg:'image47.png'},
            {
                id:3,name:'We are All Going to Die #4547',prdImg:'5.png',titlle:'We Are All Going to Die ',prdSecImg:'image47.png'},
            {
                id:4,name:'HOWLERZ #3775',prdImg:'im4.png',titlle:'HOWLERZ',prdSecImg:'image47.png'},
            {
                id:5,name:'#1801',prdImg:'im3.png',titlle:'Moonbirds',prdSecImg:'image47.png'},
            // {
            //   id:6,name:'WZRD #5555',prdImg:'image.png',titlle:'WZRDS',prdSecImg:'image47.png'},
        ],
        emptyProducts: {
            emptyImg:'Group.svg',emptyTitle:'Unfortunately your wallet does not own any NFTs.'
        }
    },
    actions: {},
    mutations: {

        productError(state, payload) {
            state.isError = payload;
        },

    },
    getters: {
        getProductError(store) {
            return store.isError;
        },

    }
};