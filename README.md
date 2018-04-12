# HTTP request sample

### Requirements
* node and npm [link](https://www.npmjs.com/get-npm)
* git
### Install
```
$git clone https://github.com/SQLAngeles/http_request_sample
$npm install
$node index.js
```
### How to test
You can run example code by checking out git branch like `git checkout master`. and access `http://localhost:3000`.

Avaiable Branch
* master: default http request
* domain_sharing: domain sharing example
  * to test this example, you have add following domain in your hosts file
  example hosts file
  ```
  127.0.0.1 a.com
  127.0.0.1 b.com
  127.0.0.1 c.com
  127.0.0.1 d.com
  127.0.0.1 e.com
  127.0.0.1 f.com
  127.0.0.1 g.com
  ```
* image_spliting: spliting image example
* uri_scheme: base64 image exmaple
* http2: http2 simple reqeust
  * turn off security for localhost in chrome
  input `chrome://flags/#allow-insecure-localhost` and toggle "Allow invalid certificates for resources loaded from localhost" option to `enable`
  
  #### Generate Keys and Certs
  ```
  $openssl genrsa -des3 -passout pass:x -out server.pass.key 2048
  $openssl rsa -passin pass:x -in server.pass.key -out server.key
  $rm server.pass.key
  $openssl req -new -key server.key -out server.csr
  $openssl x509 -req -sha256 -days 365 -in server.csr -signkey server.key -out server.crt
  ```
* http2_multiplexed_streams: http2 requests multiple resouces
