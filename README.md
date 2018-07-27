# express_wechat_demo
express微信公众号开发：涉及微信公众号接入，Jssdk接入，用户信息获取。

#### 1、微信测试号申请链接：
 http://mp.weixin.qq.com/debug/cgi-bin/sandbox?t=sandbox/login   扫描二维码进入：
 
#### 2、内外网穿透用 natapp  将本地80端口映射出去

#### 3、导入项目
    3.1 修改config.json中的"token": "appID": "appScrect"，为自己公众测试号中的信息。
    3.2 修改菜单中两个url链接，为自己的natapp的链接。
#### 4、启动express项目，在微信公众号中设置接口配置信息修改、JS接口安全域名修改、JS接口安全域名修改（列表中）总共三个地方，注意ls接口安全域名不需要填http://
                       

#### 5、扫描微信公众号就可以查看效果。