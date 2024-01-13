'use client'
import React, { use } from 'react'
import { usePathname,useSearchParams } from 'next/navigation'
import { useEffect } from 'react'


function AdsenseComp() {

    const path = usePathname();
    const searchParams = useSearchParams();

    if(process.env.NODE_ENV === 'development') {
        return <></>
    }
    
    useEffect(() => {
        
      const scriptElement = document.querySelector(
        'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7951236970634483"]'
      );

      const handleScriptLoad = () => {
        try {
          if(window.adsbygoogle){
            (window.adsbygoogle || []).push({});
            console.log("adsense loaded");
          }
          else {
            scriptElement!.addEventListener('load', handleScriptLoad);
            console.log("waiting untile adsense is loaded");
          }

        } catch (error) {
          console.log(error);
        }
      }

      handleScriptLoad();

      return ()=> {
        if(scriptElement){
          scriptElement.removeEventListener('load', handleScriptLoad);
        }
      };

    }, [path,searchParams]);

  return (
    <div className=''>
      Google Ad block
      <ins className="adsbygoogle"
        style={{display:"block"}}
        data-ad-client="ca-pub-7951236970634483"
        data-ad-slot="3847789206"
        data-ad-format="auto"
        data-full-width-responsive="true">
     </ins>
    </div>
  )
}

export default AdsenseComp

{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7951236970634483"
     crossorigin="anonymous"></script>
<!-- Vertical-Sidebar-Ads -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7951236970634483"
     data-ad-slot="3847789206"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script> */}