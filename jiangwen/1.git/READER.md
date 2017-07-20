## git 命令使用练习

    - 新建文件夹
        > mkdir 文件夹名称
    - 创建文件
        > touch index.js
    - 查看文件内容
        > cat index.js
    - 编辑文件
        > vi index.js

## git 分区管理
    - 添加到暂存区
        > git add .
    - 从暂存区添加到历史区
        > git commit -m'提交日志'
    - 查看文件提交状态
        > git status (红色是在工作区文件，绿色是在暂存区的文件，历史区：nothing to commit, working tree clean)
    - 查看提交日志
        > git log

## 回滚
    - 代码提交到了暂存区 此时 工作区与暂存区代码统一 文件状态是绿色
        > git reset HEAD index.js  将暂存区的代码变成上次 add状态 此时工作区与暂存区代码不一致 文件状态是红色的
        > git checkout index.js    将暂存区的代码覆盖掉工作区 此时工作区代码与暂存区一致 文件是绿色的
        > git reset --hard 版本号  将工作区、暂存区、历史区代码统一到文件的提交版本号 此操作容易把其他文件也改变掉 慎用

## 分支管理
    - 查看分支
        > git branch
    - 创建分支
        > git branch dev(分支名)
    - 切换分支
        > git checkout dev
    - 创建并切换分支
        > git checkout -b dev

    - 合并分支
        > git merge dev (必须在master主干上去合并，此时如果有冲突需要手动修改冲突再次提交)
## 提交到github上
    - 在github上新建一个项目
    - 获取到链接地址
    > git remote add origin(链接名称) 获取到链接地址
    > git remote -v 查看链接是否链接成功
    > git push origin master (如果想让github赠送个链接可以用gh-pages 分支[这个分支下必须有个html文件]进行提交，在项目setting下可以看到页面地址)
## 克隆别人的代码
    > git clone github上的项目地址 (克隆下来的项目 直接把链接可以copy下来了)
    > git pull origin master （别人改了代码 ，可以直接更新啦）
