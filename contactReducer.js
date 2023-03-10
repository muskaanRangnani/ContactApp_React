const initialState = [
    {
        id:0,
        name:"Muskaan Rangnani",
        number:8669402430,
        email:"rangnanimuskan22@gmail.com",
    },
    {
        id:1,
        name:"abc",
        number:9822474622,
        email:"abc22@gmail.com",
    },
];

const contactReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD-CONTACT" :
            state = [...state, action.payload];
            return state;
        
        case "UPDATE-CONTACT" :
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
            return state;

        case "DELETE-CONTACT" :
            const filterContact = state.filter((contact) => contact.id !== action.payload && contact);
            state = filterContact;
            return state;

        default: 
            return state;
    }
};


export default contactReducer;