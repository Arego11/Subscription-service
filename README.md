
<p class="has-line-data" data-line-start="0" data-line-end="1">Subscription Management System API</p>
<p class="has-line-data" data-line-start="2" data-line-end="3">This is a real-world subscription management system API that handles real users and real business logic.</p>
<p class="has-line-data" data-line-start="4" data-line-end="5">It authenticates users using JWTs, connects and saves credentials to a database, has models, schemas, and is integrated with object-relational mapping (this is for interacting with a database using objects instead of writing raw SQL queries).</p>
<p class="has-line-data" data-line-start="7" data-line-end="13">Features<br>
•   Arcjet – Used for protection against spam HTTP requests and bots.<br>
•   MongoDB – Used as a database.<br>
•   JWT Authentication – User CRUD operations and subscription management.<br>
•   Qstash – Used for email reminders and scheduling automation.<br>
•   And many more, including code architecture and reusability.</p>
<p class="has-line-data" data-line-start="15" data-line-end="16">How to use</p>
<p class="has-line-data" data-line-start="17" data-line-end="18">install prerequisites</p>
<p class="has-line-data" data-line-start="19" data-line-end="22"><a href="https://git-scm.com/downloads">git</a><br>
<a href="https://nodejs.org/en/download">node.js</a><br>
<a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">npm</a></p>
<p class="has-line-data" data-line-start="23" data-line-end="24">install the project dependencies using</p>
<p class="has-line-data" data-line-start="25" data-line-end="26">npm install</p>
<p class="has-line-data" data-line-start="27" data-line-end="28">links for tools</p>
<p class="has-line-data" data-line-start="29" data-line-end="32">Arcjet - <a href="https://arcjet.com/">https://arcjet.com/</a><br>
Upstash - <a href="https://upstash.com/">https://upstash.com/</a><br>
Mongo - <a href="https://www.mongodb.com/">https://www.mongodb.com/</a></p>

<p class="has-line-data" data-line-start="0" data-line-end="1">Use the app using the following JSON format (for httpie, swagger, etc)</p>
<p class="has-line-data" data-line-start="2" data-line-end="3">sign up</p>
<p class="has-line-data" data-line-start="4" data-line-end="11">v1/api/auth/sign-up<br>
{<br>
“name”: “test”,<br>
“email”: <a href="mailto:%22test@gmail.com">&quot;test@gmail.com</a>&quot;,<br>
“password”: “test”<br>
}<br>
sign in</p>
<p class="has-line-data" data-line-start="12" data-line-end="17">v1/api/auth/sign-in<br>
{<br>
“email”: <a href="mailto:%22test@gmail.com">&quot;test@gmail.com</a>&quot;,<br>
“password”: “test”<br>
}</p>
<p class="has-line-data" data-line-start="18" data-line-end="19">subscribe</p>
<p class="has-line-data" data-line-start="20" data-line-end="21">v1/api/subscribe</p>
<p class="has-line-data" data-line-start="22" data-line-end="31">{<br>
“name”: “Netflix Premium”,<br>
“price”: “15.99”,<br>
“currency”: “USD”,<br>
“frequency”: “monthly”,<br>
“category”: “sports”,<br>
“startDate”: “2025-03-01T00:00:00.000Z”,<br>
“paymentMethod”: “credit_card”<br>
}</p>
<p class="has-line-data" data-line-start="32" data-line-end="33">you should receive the email after this</p>