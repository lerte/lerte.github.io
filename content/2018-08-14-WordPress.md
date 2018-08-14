注册新的 REST 接口
```php
<?php

function lerte_rest_hello_callback() {
  return 'hello ~';
}

function lerte_rest_register_route() {
  register_rest_route( 'wp/v2', 'hello', [
    'methods'   => 'GET',
    'callback'  => 'lerte_rest_hello_callback'
  ]);
}
```
如果要接受参数，可以这样
```php
function lerte_rest_hello_callback( $request ) {
  $id = $request['id'];
  return 'hello ~ ' . $id;
}

register_rest_route( 'wp/v2', 'hello/(?P<id>[\d]+)', [
   'methods' => 'GET',
   'callback' => 'lerte_rest_hello_callback'
]);
```
最后不要忘了add_action
```php
add_action( 'rest_api_init', 'lerte_rest_register_route');
```
这样就可以通过 wp/v2/hello来访问了
