# 查看进程

- 当我们运行程序时，Linux会为程序创建一个特殊的环境，该环境包含程序运行需要的所有资源，以保证程序能够独立运行，不受其他程序的干扰。这个特殊的环境就称为进程。
- 系统通过一个五位数字跟踪程序的运行状态，这个数字称为 pid 或进程ID。每个进程都拥有唯一的 pid。

## 通过 ps 命令查看运行中的进程

- -a	显示所有用户的所有进程。
- -x	显示无终端的进程。
- -u	显示更多信息，类似于 -f 选项。
- -e	显示所有进程。


## 终止进程 kill
kill process_id
## 如果进程忽略 kill 命令，那么可以通过 kill -9 来结束：
kill -9 process_id


## 父进程和子进程
- 每个 Linux 进程会包含两个进程ID：当前进程ID(pid)和父进程ID(ppid)。可以暂时认为所有的进程都有父进程。

- 由用户运行的大部分命令都将 Shell 作为父进程，使用 ps -f 命令可以查看当前进程ID和父进程ID。

###僵尸进程和孤儿进程
- 正常情况下，子进程被终止时会通过 SIGCHLD 信号通知父进程，父进程可以做一些清理工作或者重新启动一个新的进程。但在某些情况下，父进程会在子进程之前被终止，那么这些子进程就没有了“父亲”，被称为孤儿进程。

- **init 进程会成为所有孤儿进程的父进程。init 的 pid 为1，是Linux系统的第一个进程，也是所有进程的父进程。**

- 如果一个进程被终止了，但是使用 ps 命令仍然可以查看该进程，并且状态为 Z，那么这就是一个僵尸进程。僵尸进程虽然被终止了，但是仍然存在于进程列表中。一般僵尸进程很难杀掉，你可以先杀死他们的父进程，让他们变成孤儿进程，**init 进程会自动清理僵尸进程**。
