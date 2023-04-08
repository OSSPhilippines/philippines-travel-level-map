import React, { useEffect  } from 'react';

const AdsComponent = (props) => {
    const { dataAdSlot } = props;  



    useEffect(() => {

        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }

        catch (e) {

        }

    },[]);



    return (
        <>
        
        <ins class="adsbygoogle"
     style={{display:'block'}}
     data-ad-client="ca-pub-1919396112849413"
     data-ad-slot="8658257981"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
        </>
    );
};

export default AdsComponent;