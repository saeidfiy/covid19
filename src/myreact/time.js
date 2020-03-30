import React from "react";

import moment from '../../node_modules/moment-jalaali';

import PersianText from './fanumber';



function Time_info(){

    return(
        <div>
            <PersianText>
            
            {moment().format('jYYYY/jM/jD')}
            
            </PersianText>
            
        </div>
    );
}

export default Time_info

