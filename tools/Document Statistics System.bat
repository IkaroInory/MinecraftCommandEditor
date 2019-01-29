::文件统计系统
@echo off
title Document Statistics System - Minecraft Command Editor

::返回上级目录并进入\history
cd ..\history

::遍历history\中所有文件名并输出到list.txt
echo 在 history\ 中已找到以下文件：
dir *.* /b

pause