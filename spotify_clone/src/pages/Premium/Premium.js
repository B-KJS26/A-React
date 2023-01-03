import React from 'react';
import '../../styles/Premium/Premium.scss'
import Preset1 from './preset/Preset1';
import Preset2 from './preset/Preset2';
import Preset3 from './preset/Preset3';
import Preset4 from './preset/Preset4';
export default function Premium() {
    return(
        <div>
            <Preset1/>
            <Preset2/>
            <Preset3/>
            <Preset4/>
        </div>
    )
}