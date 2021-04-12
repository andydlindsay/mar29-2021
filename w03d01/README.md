# W03D01 - Web Servers 101

### To Do
- [x] Web Servers
- [x] Express
- [x] Middleware

### Web Server
* server is a computer
* web server:
  * listening to http requests
  * respond with HTML, CSS, JS, JSON
* where does it live? domain/host: localhost
* what address is it at? port 65,535
* 80 http, 443 https, 22 ssh, 3000/8080/8000, 5432

http://localhost:8080/urls

* what is the diff between net and http
* net === tcp

tcp/udp
http is built on top of tcp
request/response protocol


### Request
* a verb/method: GET, POST
* a path/url: `/about`, `/products`, `/products/1`
* method + path === route (has to be unique)
* GET /products
* GET /users
* POST /products

### Response
* status code: 200, 201, 404, 500
* 1xx, 2xx

```js
if (responseCode >= 200 && responseCode < 400) {
  // everything is okay
}
```
* optional payload/data

### Middleware
* software/programming logic that sits between the request and the response
