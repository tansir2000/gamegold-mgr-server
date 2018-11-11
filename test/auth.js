/**
 * 单元测试：注册登录
 * Creted by liub 2017.3.24
 */

let {gameconn} = require('gamegoldtoolkit');

//创建连接器对象
let remote = new gameconn(gameconn.CommMode.ws, {
    "UrlHead": "http",              //协议选择: http/https
    "webserver": {
        "host": "127.0.0.1",        //远程主机地址
        "port": 9901                //远程主机端口
    },
    "auth": {
        "openid": "18681223392",
        "openkey": "18681223392",
        "domain": "tx.IOS",
    }
}).setFetch(require('node-fetch')); //设置node环境下兼容的fetch函数

describe('认证', function() {
    /**
     * 一个单元测试，可使用 skip only 修饰
     * 和负载均衡相关的单元测试，首先连接9901端口，发送config.getServerInfo请求，携带 "stype":"IOS", "oemInfo":{"openid":'helloworl'} 等参数，返回值：data.newbie:是否新注册用户 data.ip:服务器IP, data.port:服务器端口号
     */
    it.only('注册并登录 - 自动负载均衡'/*单元测试的标题*/, /*单元测试的函数体，书写测试流程*/done =>{
        remote.auth({openid: `${Math.random()*1000000000 | 0}`}, msg => {
            remote.isSuccess(msg); //使用断言，对返回值进行合理性判定，如判定失败则抛出异常，下面的 done 就不会被执行
            done();
        });
    });
});
