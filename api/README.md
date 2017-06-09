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

数据
