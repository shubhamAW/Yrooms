'use client';


    import { useEffect } from 'react';

    const WebBot = () => {
      useEffect(() => {
        const chatbotId = "LIp-Ia_tH4q7_jIrJwdMR";
    
        const addChatScript = () => {
          const script = document.createElement("script");
          script.src = "https://www.chatbase.co/embed.min.js";
          script.id = chatbotId;
          script.defer = true;
          document.body.appendChild(script);
        };
    
        const removeChatScript = () => {
          const script = document.getElementById(chatbotId);
          if (script) {
            document.body.removeChild(script);
          }
        };
    
        addChatScript();
    
        return () => {
          removeChatScript();
        };
      }, []);
    
      return (
        <div>
          {/* Your component JSX */}
        </div>
      );
    };
    
    export default WebBot;
    
