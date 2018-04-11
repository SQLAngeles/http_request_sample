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