const initState = {
    projects: [
        { id: '1', title: 'test', content: 'test' },
        { id: '2', title: 'test', content: 'test' },
        { id: '3', title: 'test', content: 'test' }
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('created project error', action.err);
            return state;
        default:
            return state;
    }

}

export default projectReducer