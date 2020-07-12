js# LnData Web Engineer Pre-Test

## Task1

MySQL內有一Table名稱為Staff，欄位名稱及資料如下：

Table Name：Staff

| ID  |  Name | DeptId| Age | Gender | Salary |
| --- |  ---  |  ---  | --- |  ---   | ------ |
| 001 | Jay   | 001   | 50  |   M    | 56000  |
| 002 | Jenny | 001   | 30  |   F    | 47000  |
| 003 | Rick  | 002   | 45  |   M    | 50000  |
| 004 | David | 003   | 47  |   M    | 45000  |
| 005 | Jake  | 002   | 32  |   M    | 55000  |
| 006 | Abby  | 001   | 25  |   F    | 40000  |
| 007 | Trump | 003   | 80  |   M    | 90000  |
| 008 | Eric  | 001   | 26  |   M    | 85000  |

請嘗試完成以下SQL語法取得所需資料。

```
1.取得所有Staff資料，並依照薪資排序，薪資越高越先列出

SELECT * FROM `Staff` ORDER BY `Salary` DESC


2.依部門編號(DeptId)列出每個部門內的員工數量，並依數量大小排序，數量越多的先列出

SELECT `DeptId`, COUNT(ID) FROM `Staff` GROUP BY `DeptId` ORDER BY COUNT(ID) DESC


3.取得性別為男性(M)的薪資總合

SELECT SUM(Salary) FROM `Staff` WHERE `Gender` = 'M'


4.取得年齡40歲以下的員工之薪資平均值

SELECT AVG(Salary) FROM `Staff` WHERE `Age` < 40


5.幫每位員工加薪10%，並更新到資料庫中

UPDATE `Staff` SET `Salary` = (`Salary` * 1.1) WHERE 1

```

## Task2 程式執行說明

1. 開啟兩個terminal，都cd切換至專案資料夾

2. 一個執行npm install，一個執行npm install -dev

3. install完成後，一個執行npm run db，一個執行npm start

<img width="964" alt="LnData_pre-test website photo" src="https://github.com/0126cloud/LnData_pre-test/blob/master/task2.png">

