import React from 'react'

export default function CS25() {
  return (
    <div className='section'>
      <div className='masthead-image' id='master-container'>
        <div className='content center'>
            <h1 id='master'>
                <div> Introducing </div>
                 <div>  our pre-project.</div>
                <div> One of members is</div>

                <div id='master-container-scroller'>
                    <div className='master-container-scroller_item'>
                        김정민
                    </div>
                    <div className='master-container-scroller_item'>
                        김효준
                    </div>
                    <div className='master-container-scroller_item'>
                        허준오
                    </div>
                    <div className='master-container-scroller_item'>
                        김민성
                    </div>
                    <div className='master-container-scroller_item'>
                        안지수
                    </div>
                    <div className='master-container-scroller_item'>
                        윤세연
                    </div>
                    <div className='master-container-scroller_item'>
                        편범준
                    </div>
                    <div className='master-container-scroller_item'>
                        김정민
                    </div>
   
                </div>
                <div>Nice to see you</div>
            </h1>

        </div>

      </div>
        <style jsx>{`
        .section {
            background-color: rgb(49,53,56);
            
        }
        #master{
            font-family: "Helvetica Neue", Arial, Helvetica, sans-serif;
            font-size: 60px;
            line-height: 1;
            font-weight: bold;
            letter-spacing: 0;
            -webkit-font-smoothing: inherit
        }
        #master {
           text-rendering: optimizeLegibility;
           display: flex;
           flex-direction: column;
           align-items: center;
           color: white;
        }
        .content {
            display: flex;
        }
        #master-container {
     -webkit-animation: master-container-bg 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
      animation: master-container-bg 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      height: 100vmin;
      min-height: 0;
      max-height: 100%;
     } 
  #master-container .content {
      height: auto;
      margin-left: inherit;
      margin-right: inherit
  }
  @media screen and (max-width: 615px) {
      #master-container {
          -webkit-animation: master-container-bg-mobile 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
          animation: master-container-bg-mobile 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite
      }
  }
      @media screen and (max-width: 615px) {
      #master {
          font-size: 40px;
          font-line: 1.2;
      }
  }
  #master-container-scroller {
      height: 66px;
      margin-bottom: -6px;

      overflow: hidden;
      position: relative
  }
  #master-container-scroller .master-container-scroller_item {
      display: block;
      padding-bottom: 6px;
      -webkit-animation: scroll 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
      animation: scroll 15s cubic-bezier(0.645, 0.045, 0.355, 1) infinite
  }
  #master-container-scroller .master-container-scroller_item:nth-child(1),
  #master-container-scroller .master-container-scroller_item:nth-child(1) a {
      color: #E65F48
  }
  #master-container-scroller .master-container-scroller_item:nth-child(2),
  #master-container-scroller .master-container-scroller_item:nth-child(2) a {
      color: #e99485
  }

  #master-container-scroller .master-container-scroller_item:nth-child(3),
  #master-container-scroller .master-container-scroller_item:nth-child(3) a {
      color: #76BCAD
  }

  #master-container-scroller .master-container-scroller_item:nth-child(4),
  #master-container-scroller .master-container-scroller_item:nth-child(4) a {
      color: #84719f
  }

  #master-container-scroller .master-container-scroller_item:nth-child(5),
  #master-container-scroller .master-container-scroller_item:nth-child(5) a {
      color: #d47787
  }

  #master-container-scroller .master-container-scroller_item:nth-child(6),
  #master-container-scroller .master-container-scroller_item:nth-child(6) a {
      color: #F09551
  }

  #master-container-scroller .master-container-scroller_item:nth-child(7),
  #master-container-scroller .master-container-scroller_item:nth-child(7) a {
      color: #349AB5
  }
  #master-container-scroller .master-container-scroller_item:nth-child(8),
  #master-container-scroller .master-container-scroller_item:nth-child(8) a {
      color: #E65F48
  }


  @-webkit-keyframes scroll {
    0.0% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px)
      }
      5% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px)
      }
      13% {
          -webkit-transform: translateY(-66px);
          transform: translateY(-66px)
      }
      19% {
          -webkit-transform: translateY(-66px);
          transform: translateY(-66px)
      }
      27% {
          -webkit-transform: translateY(-132px);
          transform: translateY(-132px)
      }
      35% {
          -webkit-transform: translateY(-132px);
          transform: translateY(-132px)
      }
      40% {
          -webkit-transform: translateY(-198px);
          transform: translateY(-198px)
      }
      46% {
          -webkit-transform: translateY(-198px);
          transform: translateY(-198px)
      }
      53% {
          -webkit-transform: translateY(-264px);
          transform: translateY(-264px)
      }
      60% {
          -webkit-transform: translateY(-264px);
          transform: translateY(-264px)
      }
     66% {
          -webkit-transform: translateY(-330px);
          transform: translateY(-330px)
      }
      72% {
          -webkit-transform: translateY(-330px);
          transform: translateY(-330px)
      }
      80% {
          -webkit-transform: translateY(-396px);
          transform: translateY(-396px)
      }
      88% {
          -webkit-transform: translateY(-396px);
          transform: translateY(-396px)
      }
      100% {
          -webkit-transform: translateY(-462px);
          transform: translateY(-462px)
      }
    
  }
  @keyframes scroll {
      0.0% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px)
      }
      5% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px)
      }
      13% {
          -webkit-transform: translateY(-66px);
          transform: translateY(-66px)
      }
      19% {
          -webkit-transform: translateY(-66px);
          transform: translateY(-66px)
      }
      27% {
          -webkit-transform: translateY(-132px);
          transform: translateY(-132px)
      }
      35% {
          -webkit-transform: translateY(-132px);
          transform: translateY(-132px)
      }
      40% {
          -webkit-transform: translateY(-198px);
          transform: translateY(-198px)
      }
      46% {
          -webkit-transform: translateY(-198px);
          transform: translateY(-198px)
      }
      53% {
          -webkit-transform: translateY(-264px);
          transform: translateY(-264px)
      }
      60% {
          -webkit-transform: translateY(-264px);
          transform: translateY(-264px)
      }
     66% {
          -webkit-transform: translateY(-330px);
          transform: translateY(-330px)
      }
      72% {
          -webkit-transform: translateY(-330px);
          transform: translateY(-330px)
      }
      80% {
          -webkit-transform: translateY(-396px);
          transform: translateY(-396px)
      }
      88% {
          -webkit-transform: translateY(-396px);
          transform: translateY(-396px)
      }
      95% {
          -webkit-transform: translateY(-462px);
          transform: translateY(-462px)
      }
     100% {
          -webkit-transform: translateY(-494px);
          transform: translateY(-494px)
      }
  
      
  }
  @keyframes scroll {
    0.0% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px)
      }
      5% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px)
      }
      13% {
          -webkit-transform: translateY(-66px);
          transform: translateY(-66px)
      }
      19% {
          -webkit-transform: translateY(-66px);
          transform: translateY(-66px)
      }
      27% {
          -webkit-transform: translateY(-132px);
          transform: translateY(-132px)
      }
      35% {
          -webkit-transform: translateY(-132px);
          transform: translateY(-132px)
      }
      40% {
          -webkit-transform: translateY(-198px);
          transform: translateY(-198px)
      }
      46% {
          -webkit-transform: translateY(-198px);
          transform: translateY(-198px)
      }
      53% {
          -webkit-transform: translateY(-264px);
          transform: translateY(-264px)
      }
      60% {
          -webkit-transform: translateY(-264px);
          transform: translateY(-264px)
      }
     66% {
          -webkit-transform: translateY(-330px);
          transform: translateY(-330px)
      }
      72% {
          -webkit-transform: translateY(-330px);
          transform: translateY(-330px)
      }
      80% {
          -webkit-transform: translateY(-396px);
          transform: translateY(-396px)
      }
      88% {
          -webkit-transform: translateY(-396px);
          transform: translateY(-396px)
      }
      100% {
          -webkit-transform: translateY(-462px);
          transform: translateY(-462px)
      }

  }

  @-webkit-keyframes scroll-mobile {
      0.0% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px)
      }
      3.7037037037037037% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px)
      }
      11.11111111111111% {
          -webkit-transform: translateY(-48px);
          transform: translateY(-48px)
      }
      14.814814814814815% {
          -webkit-transform: translateY(-48px);
          transform: translateY(-48px)
      }
      22.22222222222222% {
          -webkit-transform: translateY(-96px);
          transform: translateY(-96px)
      }
      25.925925925925927% {
          -webkit-transform: translateY(-96px);
          transform: translateY(-96px)
      }
      33.333333333333336% {
          -webkit-transform: translateY(-144px);
          transform: translateY(-144px)
      }
      37.03703703703704% {
          -webkit-transform: translateY(-144px);
          transform: translateY(-144px)
      }
      44.44444444444444% {
          -webkit-transform: translateY(-192px);
          transform: translateY(-192px)
      }
      48.148148148148145% {
          -webkit-transform: translateY(-192px);
          transform: translateY(-192px)
      }
      55.55555555555556% {
          -webkit-transform: translateY(-240px);
          transform: translateY(-240px)
      }
      59.25925925925926% {
          -webkit-transform: translateY(-240px);
          transform: translateY(-240px)
      }
      66.66666666666667% {
          -webkit-transform: translateY(-288px);
          transform: translateY(-288px)
      }
      70.37037037037037% {
          -webkit-transform: translateY(-288px);
          transform: translateY(-288px)
      }
      77.77777777777777% {
          -webkit-transform: translateY(-336px);
          transform: translateY(-336px)
      }
      81.48148148148148% {
          -webkit-transform: translateY(-336px);
          transform: translateY(-336px)
      }
      88.88888888888889% {
          -webkit-transform: translateY(-384px);
          transform: translateY(-384px)
      }
      92.5925925925926% {
          -webkit-transform: translateY(-384px);
          transform: translateY(-384px)
      }
      100.0% {
          -webkit-transform: translateY(-432px);
          transform: translateY(-432px)
      }
  }

  @keyframes scroll-mobile {
      0.0% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px)
      }
      3.7037037037037037% {
          -webkit-transform: translateY(0px);
          transform: translateY(0px)
      }
      11.11111111111111% {
          -webkit-transform: translateY(-48px);
          transform: translateY(-48px)
      }
      14.814814814814815% {
          -webkit-transform: translateY(-48px);
          transform: translateY(-48px)
      }
      22.22222222222222% {
          -webkit-transform: translateY(-96px);
          transform: translateY(-96px)
      }
      25.925925925925927% {
          -webkit-transform: translateY(-96px);
          transform: translateY(-96px)
      }
      33.333333333333336% {
          -webkit-transform: translateY(-144px);
          transform: translateY(-144px)
      }
      37.03703703703704% {
          -webkit-transform: translateY(-144px);
          transform: translateY(-144px)
      }
      44.44444444444444% {
          -webkit-transform: translateY(-192px);
          transform: translateY(-192px)
      }
      48.148148148148145% {
          -webkit-transform: translateY(-192px);
          transform: translateY(-192px)
      }
      55.55555555555556% {
          -webkit-transform: translateY(-240px);
          transform: translateY(-240px)
      }
      59.25925925925926% {
          -webkit-transform: translateY(-240px);
          transform: translateY(-240px)
      }
      66.66666666666667% {
          -webkit-transform: translateY(-288px);
          transform: translateY(-288px)
      }
      70.37037037037037% {
          -webkit-transform: translateY(-288px);
          transform: translateY(-288px)
      }
      77.77777777777777% {
          -webkit-transform: translateY(-336px);
          transform: translateY(-336px)
      }
      81.48148148148148% {
          -webkit-transform: translateY(-336px);
          transform: translateY(-336px)
      }
      88.88888888888889% {
          -webkit-transform: translateY(-384px);
          transform: translateY(-384px)
      }
      92.5925925925926% {
          -webkit-transform: translateY(-384px);
          transform: translateY(-384px)
      }
      100.0% {
          -webkit-transform: translateY(-432px);
          transform: translateY(-432px)
      }

    }
  

        `}</style>
    </div>
  )
}
