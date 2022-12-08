#!/usr/bin/env sh
###
 # @Author: zhangliangcai leancai@126.com
 # @Date: 2022-12-08 18:04:20
 # @LastEditors: zhangliangcai leancai@126.com
 # @LastEditTime: 2022-12-08 18:04:59
 # @FilePath: \VuePressDemo\deploy.sh
 # @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
git push -f git@github.com:LeanCai/VuePressDemo.git master:gh-pages

cd -
