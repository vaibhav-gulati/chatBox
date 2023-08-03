<template>
    <div :class="{'message-entry': true, 'sent': isSent, 'received': !isSent}">
      <div
        v-if="isSent"
        class="current-user-thumbnail sent-thumbnail"
        :title="currentUser.firstName"
      >
 
        <div class="message-bubble current-user-message-bubble">
          {{ text }}
        </div>
        <svg
          class="user-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
        </svg>
      </div>
  
      <div v-else class="sender-thumbnail received-thumbnail" :title="from.fistName">
        <svg
          class="user-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
        </svg>
        <div class="message-bubble sender-message-bubble">
          {{ text }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
      },
      from: {
        type: Object,
      },
      currentUser: {
        type: Object,
      },
    },
    computed: {
      isSent() {
        return this.from.id === this.currentUser.id;
      },
    },
  };
  </script>
  
  <style>
.message-entry {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
}
.current-user-thumbnail{
 margin-left: 40%;
}

.current-user-thumbnail,
.sender-thumbnail {
  display: flex;
  align-items: center;
}

.user-svg {
  width: 24px;
  height: 24px;
  fill: currentColor;
  cursor: pointer;
  margin-right: 12px;
}

.current-user-message-bubble,
.sender-message-bubble {
  border-radius: 8px;
  padding: 8px;
  word-wrap: break-word;
  max-width: 60%;
  word-break: break-word;
  font-size: 14px;
  line-height: 1.5;
  max-width: 60%;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.current-user-message-bubble {
  background-color: #007bff;
  color: #fff;
}

.sender-message-bubble {
  background-color: #f0f0f0;
  color: #333;
}

.current-user-thumbnail:before,
.sender-thumbnail:before {
  content: attr(title);
  position: absolute;
  background: #333;
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  font-size: 12px;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s, visibility 0.3s;
}

.current-user-thumbnail:hover:before,
.sender-thumbnail:hover:before {
  visibility: visible;
  opacity: 1;
}

.sent-thumbnail .current-user-message-bubble {
  align-self: flex-end;
}

.received-thumbnail .sender-message-bubble {
  align-self: flex-start;
}

  </style>
  