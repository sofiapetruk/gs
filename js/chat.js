window.watsonAssistantChatOptions = {
    integrationID: "80f741fb-49af-40a2-ae51-916f23341fba", // The ID of this integration.
    region: "us-south", // The region your integration is hosted in.
    serviceInstanceID: "077bc520-e9dd-420e-b5db-fc1ec03356ea", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
};
setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
});