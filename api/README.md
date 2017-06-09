# 后台 API

- [用户注册](https://github.com/happypeter/petpetgo/tree/master/api#用户注册)
- [用户登录](#用户登录)

### 用户注册

```
POST /user
```

接收数据

```js
username String # 用户名
password String # 密码
```


用户名不可重复，重复返回403错误

```js
{
  msg: '用户名重复，请重新注册'
}
```

添加成功返回

```js
{
  userId: user._id,
  username: user.username,
  msg: '注册成功'
}
```

curl 测试

```
curl -X POST -H 'Content-Type: application/json' -d '{"username": "happypeter", "password": "111111"}' http://petapi.haoduoshipin.com:3008/user/signup
{"userId":"593a1067d0d0dba391139e0a","username":"happypeter","msg":"注册成功"}%
```

### 用户登录

curl 测试

```
$ curl -X POST -H 'Content-Type: application/json' -d '{"username": "happypeter", "password": "111111"}' http://petapi.haoduoshipin.com:3008/user/signin

{"userId":"593a110767f1411805a6fcb3","user":"happypeter","msg":"登陆成功"}%                                     ➜  api git:(master) ✗

$ curl -X POST -H 'Content-Type: application/json' -d '{"username": "happypeter", "password": "1111"}' http://petapi.haoduoshipin.com:3008/user/signin

{"msg":"密码错误，请核对后重试"}%
```

### 根据 id 读取 user 信息

curl

```
$ curl localhost:3008/user/593a1067d0d0dba391139e0a

{"msg":"读取用户成功","user":{"_id":"593a1067d0d0dba391139e0a","updatedAt":"2017-06-09T03:05:11.876Z","createdAt":"2017-06-09T03:05:11.876Z","username":"happypeter","password":"$2a$10$e.FGICr67W0LQ23LiPSYQ.I8bMg1EnuQoY7p6TvK5EHqQ63g8ZOaS","__v":0,"carts":[],"role":0}}%
```
