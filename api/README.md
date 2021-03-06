# 后台 API

- [用户注册](https://github.com/happypeter/petpetgo/tree/master/api#用户注册)
- [用户登录](#用户登录)
- [读取用户信息](#读取用户信息)

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
curl -X POST -H 'Content-Type: application/json' -d '{"username": "happypeter", "password": "111111"}' http://petapi.haoduoshipin.com/user/signup
{"userId":"593a1067d0d0dba391139e0a","username":"happypeter","msg":"注册成功"}%
```

如果用户名已经存在，返回

```
curl -X POST -H 'Content-Type: application/json' -d '{"username": "happypeter", "password": "111111"}' http://petapi.haoduoshipin.com/user/signup
{"msg":"用户名重复，请重新注册"}%
```

### 用户登录

curl 测试

```
$ curl -X POST -H 'Content-Type: application/json' -d '{"username": "happypeter", "password": "111111"}' http://petapi.haoduoshipin.com/user/signin

curl -X POST -H 'Content-Type: application/json' -d '{"username": "happyper", "password": "111111"}' http://petapi.haoduoshipin.com/user/signin
{"msg":"登陆失败，用户名不存在"}%

$ curl -X POST -H 'Content-Type: application/json' -d '{"username": "happypeter", "password": "1111"}' http://petapi.haoduoshipin.com/user/signin

{"msg":"密码错误，请核对后重试"}%
```

### 读取用户信息

根据 id 读取 user 信息

```
$ curl http://petapi.haoduoshipin.com/user/593a110767f1411805a6fcb3

{"msg":"读取用户成功","user":{"username":"happypeter"}}%
```


### 提交店面

```
$ curl -X POST -H 'Content-Type: application/json' -d '{"name": "如意山海饭店"}' http://petapi.haoduoshipin.com/shop/new

{"shopId":"593f3d2f32fc1015523f8d31","name":"如意山海饭店","msg":"保存成功"}%
```


### 列出所有店面

```
$ curl http://petapi.haoduoshipin.com/shops

{"shops":[{"_id":"593f3d2f32fc1015523f8d31","name":"如意山海饭店","__v":0},{"_id":"593f3da032fc1015523f8d32","name":"山海关饭店","__v":0}]}%
```

### 搜索店面

```
curl -X POST -H 'Content-Type: application/json' -d '{"key": "山"}' http://petapi.haoduoshipin.com/shop/search
{"shops":[{"_id":"593f3d2f32fc1015523f8d31","name":"如意山海饭店","__v":0},{"_id":"593f3da032fc1015523f8d32","name":"山海关饭店","__v":0}]}%
```
