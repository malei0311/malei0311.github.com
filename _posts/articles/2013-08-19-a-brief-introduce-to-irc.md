---
layout: articles
title: A Brief Introduction to IRC
description: thanks @jianingy
category: articles
keywords: ubuntu
tags: [ubuntu]
---
## 声明

thanks [@jianingy](http://weibo.com/jianingy) 的总结&教程，以下正文:

## 简介

IRC 的全称是 Internet Relay Chat。它是一个多人、多频道实时聊天系统。通
俗地讲就是我们平常说的“网络聊天室”。功能上类似于腾讯的“QQ群”。然而 IRC
开放的通讯协议不但使得它可以被广泛使用于各个平台的系统，也让它的周边软
件和生态系统变得非常繁茂。

目前全球有很多免费的 IRC 服务网络，例如 freenode, oftc 等等。因此你不
用花费任何额外的费用就能和全球各地的朋友在大家感兴趣的频道里畅所欲言。

## 起源
IRC 的发明人是芬兰小伙 Jarkko Oikarinen。
他在 Oulu 读大学的时候受到一个叫 Bitnet Relay 聊天系统的启发，开发了
IRC 系统。

## 架构

IRC 是一个 CS 模式的系统（服务器、客户端模式）。你需要一个专用的客户端
软件连接到 IRC 服务器上。如今，这类客户端软件已经发展到几十种，其中不乏
非常优秀的开源软件。本文下面的内容会基于一个叫做 /Irssi/
(http://irssi.org/) 的客户端软件进行介绍。

IRC 名字中的 Relay 暗示了其服务端是以消息中继形态构成的。用户的消息可以
在一个 IRC 网络中的多个 IRC 服务器之间进行转发。这样做的好处是无论你登陆
该网络的哪个 IRC 服务器，你都可以和所有其他用户进行交流。例如：你登陆了新加坡
的 brooks.freenode.net 而你的朋友登陆了巴黎的 barjavel.freenode.net，你
们仍然可以在一个频道里聊天。

## 基本操作

### 安装客户端软件

在我们进行下面的讲解之前，你首先需要安装一下 /irssi/ 这个客户端软件。下
面我会给出几种主流系统的客户端软件安装方法。

#### Ubuntu Linux / Debian Linux

````
sudo apt-get install irssi
````

#### Fedora / CentOS / Redhat Linux

````
sudo yum install irssi
````

#### MacOSX

````
brew install irssi
````

### IRSSI 的界面布局

首先我们在命令行下键入 /irssi/ 来启动这个客户端程序，你会看到如下的界面：

{{http://upload.wikimedia.org/wikipedia/commons/c/c2/IRSSI_screenshot.png?640}}

靠下方蓝色的部分是状态条，他把屏幕分成其上方的主区域和命令区域两个部分。
我们在主区域里会看到聊天的内容以及服务器发送的信息。在命令区域里输入我
们想发送的内容或者是以 "/" 开头的 IRC 命令。

### 登陆 IRC 服务器

下面让我们来登陆一个 IRC 服务器。在命令区域输入 `/connect
irc.freenode.net` 。连接成功后，我们会看到服务器返回的 MOTD 信息。
/irssi/ 会自动用你登陆用户的用户名作为昵称登陆服务器。如果你看到下面的
信息，则说明你的昵称已经有人使用了。这时 /irssi/ 会为你自动生成一个昵称。

````
16:52 -!- Irssi: Your nick is owned by Jianing Yang [~jianingy@106.3.xx.yy]
````

### 设置昵称
默认的昵称是你的 linux 登录名，如果你用虚拟机登录，很可能是 ubuntu 或 root 之类。使用 `/nick <yourname>` 来更改昵称。后面有教程教你注册昵称确保这个昵称只是你在使用。

### 加入、创建聊天频道

使用命令 `/join` 来加入一个频道。如果该频道还不存在，那么系统会自动创建
一个新的频道。频道名一般都是以 `#` 开头的。例如：要加入 openstack 频道，
我们可以使用

````
/join #openstack
````

加入频道后，在主区域会看到频道中已有用户的信息、以及频道的主题（topic）。
你可以持续使用 join 命令加入多个频道。`/irssi/` 会为每一个频道分配一个窗
口（window），每个窗口会有一个窗口编号。我们可以使用 `/win` 命令来切换不
同的窗口。例如：

````
/win 3
````

如果窗口太多，或者你忘记了窗口号码，也可以用 `/join` 命令来切换到相应的频
道。

### 信息提示

如果你所加入的频道有新的消息，那么频道号码会以高亮方式显示出来。这时可
以使用 `/win` 切换过去读新的消息。如果频道好码以红色高亮，说明有人在该频
道里提到了你的名字，这时你需要特别关注一下。

### 表情

IRC 并不是真正支持发送什么表情，它只是提供一种专门用来做表情的命令
`/me + 表情` 。当你使用这个命令发送信息时，大部分客户端都会以缩进或高亮
的方式来消息。当你看到表情消息时，你只能脑补一下了。

````
17:18  * jianingy is confused
````

### 私聊

IRC 鼓励大家在公开频道聊天。任何问题的讨论对每一个在频道里的人都是透明
的。然而，你还是偶尔可能想跟某个人单独对话。这个时候可以使用 `/query` 命令。例如：你想要单独和 /jianingy/ 聊两句

````
/query jianingy
````

irssi 会为你俩创建一个单独的窗口。聊天的内容只有你俩能看到。但是千万不
要以为这是你发送密码的好手段。因为 IRC 的协议是明文的，因此你所发送的
内容还是会被网络上的嗅探器看到[fn:1]。

[fn:1] 如果你使用的是基于 SSL 协议的 IRC 这个问题到不用特别担心。

### 离开频道

当你决定要退出一个频道时，使用 `/leave + 频道名称` 命令退出频道。如果
当前窗口就是你所在的频道，那么这个命令就可以简写为 `/leave` 。

## 阶进操作

### 挂机

如果你经常出没于 freenode 等 IRC ，你会发现很多人常年在线从未退出过。这
是因为他们使用了一个叫做 /screen/ 的工具挂机。下面简单介绍一下这种挂机
的方法。然而这并不是一个讨论 /screen/ 的专题，因此这里仅仅介绍一些基本
的用法。

首先，你需要找一个常年开机的服务器或者 VPS 虚拟机 。在这台服务器上通过
/screen/ 命令启动一个 /irssi/ 程序，

````
screen irssi
````

当你离开时，你可以直接关掉终端窗口或者使用快捷键 `Control + a d` 退出
/screen/ 。这时 /irssi/ 仍然会以后台方式运行在 /screen/ 中。当你再次登
录的时候，可以使用下面的命令重新回到之前的 /irssi/ 操作界面。

````
screen -R
````

如此一来你将不用担心漏掉 IRC 上的消息。你可以告诉朋友们：“给我在 IRC
上留言”。你可以在任何能够登录你服务器的地方看到那些未读的消息。

### 注册昵称

在 IRC 的世界里，别人主要靠昵称来认识你。因此保护自己那特有的昵称不被占
用是非常重要的。IRC 网络通过一个叫 NickServ 的机器人来管理用户的昵
称。当需要注册昵称时，你只需要跟 NickServ 这个机器人私聊两句就可以了。

首先， 通过 `/query NickServ` 进入和 NickServ 私聊的模式并通过
`register` 命令给出一个密码和你的邮箱。

````
21:15 <jianingy> register mypassword mail@example.com
21:15 -NickServ(NickServ@services.)- An email containing nickname activation instructions has been sent to mail@example.com
21:15 -NickServ(NickServ@services.)- If you do not complete registration within one day, your nickname will expire.
21:15 -NickServ(NickServ@services.)- jianingy is now registered to mail@example.com, with the password mypassword.
21:15 -NickServ(NickServ@services.)-
21:15 -NickServ(NickServ@services.)- For frequently-asked questions about the network, please see the
21:15 -NickServ(NickServ@services.)- FAQ page (http://freenode.net/faq.shtml). Should you need more
21:15 -NickServ(NickServ@services.)- help you can /join #freenode to find network staff.
````

接下来，正如 NickServ 说，下面的步骤在他发给你的邮件中。这里我们剧透一
下，下一步需要做的就是讲邮件里的验证码通过 `verify register` 命令告诉
NickServ:

````
21:17 <jianingy> VERIFY REGISTER jianingy raufkqeuugns
21:17 -NickServ(NickServ@services.)- jianingy has now been verified.
21:17 -NickServ(NickServ@services.)- Thank you for verifying your e-mail address! You have taken steps in ensuring that your registrations are not exploited.
````

昵称注册成功后，如果你发现别人占用了你的昵称，你可以通过 `ghost` 命令
强制对方下线，在通过 `/nick` 命令要回自己的昵称。 `ghost` 命令的用法如
下:

````
21:34 <jianingy> ghost jianingy mypassword
21:34 -NickServ(NickServ@services.)- jianingy has been ghosted.
21:34 -NickServ(NickServ@services.)- This nickname is registered. Please choose a different nickname, or identify via /msg NickServ identify <password>.
21:34 <jianingy> identify mypassword
21:34 -NickServ(NickServ@services.)- You are now identified for jianingy.
````
### UI 主题
别看 /Irssi/ 只是一款 CLI 软件，他也是有换肤支持的。网络上有很多爱好者
给 /Irssi/ 开发皮肤。皮肤文件是一个以 `.theme` 结尾的文本文件。更换皮
肤的方法是，将下载好的皮肤文件放到 `~/.irssi/` 这个目录下，然后运行如
下命令：

````
/set theme 皮肤名称（即皮肤文件名去掉.theme）
````

如果你决定长久使用这款皮肤，就要通过 `/save` 命令保存设置。

这里给出两个 /irssi/ 的皮肤下载站：

* [http://www.irssi.org/themes](http://www.irssi.org/themes)
* [http://dotshare.it/category/chat/irssi/](http://dotshare.it/category/chat/irssi/)

### 使用 Irssi 插件 

毫无疑问像 /irssi/ 这么具有黑客范儿的程序一定是支持插件的。这些插件让
/irssi/ 的功能更为全面、强大。你可以在 [http://scripts.irssi.org](http://scripts.irssi.org) 找到很
多有用的插件。

加载插件的方法是：把插件文件下载到 `~/.irssi/scripts` 里面，然后在
/irssi/ 里执行命令：

````
/script load 插件名称
````

如果你想让一个插件在 /irssi/ 启动的时候就被自动加载，就做一个符号链接
把该插件链接到 `~/.irssi/scripts/autorun` 这个目录里面。

其他和插件相关的命令还有：

* `/script unload` : 卸载一个插件。
* `/script` : 列出当前加载的插件。
* `/script reset` : 卸载所有插件，并且重置插件的 Perl 解释器。

接下来介绍几个非常实用的插件：

#### adv_windowlist 

下载地址：
[http://anti.teamidiot.de/static/nei/*/Code/Irssi/adv_windowlist.pl](http://anti.teamidiot.de/static/nei/*/Code/Irssi/adv_windowlist.pl)

默认的 window list 只能显示一行。用了这个插件后 window list 可以显示多
行。特别适合那些加入频道比较多的朋友。

#### screen away

下载地址：[http://scripts.irssi.org/scripts/screen_away.pl](http://scripts.irssi.org/scripts/screen_away.pl)

在你 detach screen 的时候把你的 IRC 状态设置为 away。当你 attach 回来
时，将 away 状态取消。让频道里的人了解你是在挂机中还是在线中。

#### nickcolor

下载地址：[http://scripts.irssi.org/scripts/nickcolor.pl](http://scripts.irssi.org/scripts/nickcolor.pl)

给频道里每个人的名字以不同颜色显示出来。方便你认清每一个人。

#### go 

下载地址：[http://scripts.irssi.org/scripts/go.pl](http://scripts.irssi.org/scripts/go.pl)

使用 =/win= 命令切换窗口需要自己记住窗口号码和频道之间的关系。 =go= 让
我们可以直接使用频道名字切换窗口，并且还支持自动补齐功能。

#### trackbar 

下载地址：[http://scripts.irssi.org/scripts/trackbar.pl](http://scripts.irssi.org/scripts/trackbar.pl)

在你上次浏览内容下方画一道横线。如果你同时看多个频道的话，这个插件非常
有用。他能帮你了解该频道自你上次浏览后有哪些新内容。

#### queryresume 

下载地址：[http://scripts.irssi.org/scripts/queryresume.pl](http://scripts.irssi.org/scripts/queryresume.pl)


每次跟人私聊的时候先显示上次你俩聊天时的最后几行。

## 小技巧

### 命令别名

给命令设置短别名能极大提高我们的使用效率。 /irssi/ 中有一些内置的别名，
例如：

````
别名      全称
/q       /query
/wc      /windowclose
/j       /join
````

当然， /irssi/ 也支持用户自定义别名。比如：我们要给 `/window list` 命
令起个别名，就可以用

````
/alias wl window list
````

### 彩色文字

作为一个 CLI 程序，当然要支持最具表现力的彩色文字了。要想让你的话富有
色彩，先按下 `Control + C` 看到输入区域出现一个反白的字母“C”之后输入一
个颜色数码，之后再输入的内容就可以带有相应的颜色了。

### 其他

* [http://www.irssi.org/documentation/tips](http://www.irssi.org/documentation/tips)