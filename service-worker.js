self.addEventListener("install",(installing)=>{
    console.log("Service Worker: I am being installed, hello world!");
  });
  
  self.addEventListener("activate",(activating)=>{	
    console.log("Service Worker: All systems online, ready to go!");
  });
  
  self.addEventListener("fetch",(fetching)=>{   
    console.log("Service Worker: User threw a ball, I need to fetch it!");
  });
  
  self.addEventListener("push",(pushing)=>{
      console.log("Service Worker: I received some push data, but because I am still very simple I don't know what to do with it :(");
      if(push.data){
        pushdata=JSON.parse(push.data.text());		
        console.log("Service Worker: I received this:",pushdata);
        if((pushdata["title"]!="")&&(pushdata["message"]!="")){			
          const options={ body:pushdata["message"] }
          self.registration.showNotification(pushdata["title"],options);
          console.log("Service Worker: I made a notification for the user");
        } else {
          console.log("Service Worker: I didn't make a notification for the user, not all the info was there :(");			
        }
      }
      
  })  