import axios from 'axios';

import {WriteNameMocks} from '../auto_complete/mocks';
import {getWriteStatus} from '../../app';

WriteNameMocks.startMock(axios);

export function call_save_name(full_name)
{
    console.log("in server call method for  details::" + full_name);

    return (dispatch) => {
         
        dispatch(getWriteStatus(null))

        axios({
            method: 'post',
            //url: '/add'
            url: 'http://localhost:8083/powerschool/rest/v1.0/census/add?full_name='+full_name
        })
        .then(function (response) {
            
            //handle success
            if(response.status===200)
                dispatch(getWriteStatus(true))
            else
                dispatch(getWriteStatus(false))

        })
        .catch(function (response) {

            //alert(response);
            console.log(response);
            dispatch(getWriteStatus(false))

        });

    }
    
}