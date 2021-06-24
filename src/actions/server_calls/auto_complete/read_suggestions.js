import axios from 'axios';

import {ReadSuggestMocks} from '../auto_complete/mocks';
import {getAutoCompleteData} from '../../app';

ReadSuggestMocks.startMock(axios);

export function call_auto_complete(partial_name)
{
    console.log("in server call method for auto complete details::" + partial_name);

    return (dispatch) => {
         
        dispatch(getAutoCompleteData([]))

        axios({
            method: 'get',
            //url: '/autocomplete'
            url: 'http://localhost:8083/powerschool/rest/v1.0/census/autocomplete?partial_name='+partial_name
        })
        .then(function (response) {
            
            //handle success
            dispatch(getAutoCompleteData(response.data))

        })
        .catch(function (response) {

            alert(response);
            console.log(response);

        });

    }
    
}