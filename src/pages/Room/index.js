import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
const RoomPage = () => {
    const {roomId}=useParams()
    console.log("hello i am executing")
     console.log(roomId)
    let myMeeting = async (element) => {
        // generate Kit Token
         const appID =1616841528 ;
         const serverSecret = "5ec0ba22366b6617cba8db2dd48e9035";
         const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId,  Date.now().toString(),'jayakrishna');
         const zp = ZegoUIKitPrebuilt.create(kitToken);

         zp.joinRoom({
            container: element,
            sharedLinks: [
              {
                name: 'copy link link',
                url:`https://zecloudbackend-r1hmzh488-jayakrishnapanga.vercel.app/room/${roomId}`
                 
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
            },
            showScreenSharingButton:true
          });
    }

  return (
    <div>
      <div ref={myMeeting}/>
    </div>
  )
}

export default RoomPage
