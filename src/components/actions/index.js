//Action Creators
//Because we import '* as actions' in ListItem component we don't specify "default" when exporting from here:
export const selectLibrary = (libraryId) => {
    return{
        type: 'select_library', 
        payload: libraryId
    }    

}