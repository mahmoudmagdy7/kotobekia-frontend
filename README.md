# User badges

First post badge = A1
More than 5 posts badge = A2

---

User got more 10 love to his posts badge = A3

---

## Money Supporters badges

20 EGP to 100 EGP badge = B1
100 EGP+ badge = B2
500 EGP+ badge = B3
1000 EGP+ badge = B4
10,000 EGP+ badge = B5

## the behavior

- The admin can give the user any badge depend on what the user did.
- The user takes the badge when he do the requirements of the badge.

---

<!--
## report type | report id | reporter id

## post | post id | user id |

## chat | chat id | user id |
-->

<!-- --- -->

### **Our pages**

- [ ] [LinkedIn](https://www.linkedin.com/company/kotobekia)
- [ ] [Twitter](https://twitter.com/kotobekia)
- [ ] [Youtube](https://www.youtube.com/@Kotobekia)
- [ ] [Facebook](https://www.facebook.com/kotobekia)
- [x] [Instagram](https://www.instagram.com/kotobekia)
- [x] [Telegram](https://t.me/kotobekia)
- [x] [WhatsApp](https://chat.whatsapp.com/HmNIZTOERoxGgF4e2g8oUY)

* current avatar
  <img src="/public/assets/images/socailmedia-logo.png" alt="OpenAI Logo" width="200" height="200">
  </div>

---

api-post

report type : post - chat,
id : postId - chatId,

<!-- reporter id : userId, -->

feedback: ""
reportedUser : userId

---

api-get

report_type : post - chat,
id : postId - chatId,
reporter_id : userId,
feedback: ""
reportedUser : userId
status : under review

---

api-change status

status : resolved - rejected
feedback : 'required'

+++++++++++++++++

sorting : latest and oldest
filters : all, resolved, rejected , under review

+++++++++++++++++

----------- Notifications --------------

Mojanad

api => get mojanad notifications
array of objects
{
title : string ,
body : sting,
status : string , optional
image : string , optional
isRead: boolean,
}

when the user click on the notification the status will change to read after sending the request to the backend

---

user model => chat count

current case -----------

lola in conversations with mojanad = >
lolo send a message to mojanad => unread messages ++

---

lol in conversation with mojanad => unread messages not plus

when lolo open the conversation with mojanad
conversation "sex" [lolo , mojanad]

conv_id = x

socket.on(x)

mojanad => emit(x)
lolo => emit(x)

join-conv = [conv_id, conv_id]
