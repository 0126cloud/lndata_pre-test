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
 
## Task2
players.json內為nba球員名單，請以此份資料，搭配文件中的示意圖，以「React.js + ES6」實作一個球員名單查詢系統。

### 系統介面佈局
1. Header：左邊顯示LnData的logo(https://www.lndata.com/images/logo/logo_160.png)，右邊顯示Avatar示意圖
2. Menu選單：顯示「Player List」功能
3. Main Content：主畫面中有搜尋條件及表格兩個區塊，在搜尋條件中設定搜尋條件後送出，表格內會顯示相對應的資料。
![](https://i.imgur.com/vOp928r.png)

### 系統需求
1. 表格可排序，排序欄位如示意圖所示，預設以Points欄位排序，最高的在最前面，資料預設為顯示全部球員名單。
2. 表格需有分頁功能，每頁顯示15筆資料，顯示欄位如示意圖所示。
3. 搜尋條件如下：
 + Team -> 球隊名稱，可選擇ALL或是單一球隊，球隊名稱請從附件資料中整理出來。
 + keywords -> 可輸入關鍵字比對球員名稱(部分比對)
4. 按下「Search」按鈕後依照搜尋條件顯示符合條件的資料於表格中。
5. 按下每筆資料的Detail圖示，會跳至另一頁面顯示該球員的所有詳細資料，如以下示意圖，顯示的欄位名稱與資料key值對應關係請參閱下方對應表。
![](https://i.imgur.com/o76uYrR.png)

6. 按下「Show Charts」按鈕後，會跳出視窗，以圓餅圖或柱狀圖(會是其他形式的圖表)，顯示球員人數在15人以下(含15人)的球隊的統計資料。
![](https://i.imgur.com/yXpRQSq.png)

7. 請依照您的喜好與標準美化系統介面, 色彩樣式不拘。


### 資料格式與介面顯示對照表：

|排序 |      JSON欄位名稱              |     介面顯示  | 
|--- |          -----                |     -----    | 
| 1  | name                          |   Name       | 
| 2  | team_acronym                  |   Team       |
| 3  | team_name                     |   TeamName   |
| 4  | games_played                  |   Games      |
| 5  | minutes_per_game              |   MPG        |
| 6  | field_goals_attempted_per_game|   FGA        |
| 7  | field_goals_made_per_game     |   FGM        |
| 8  | field_goal_percentage         |   FG%        |
| 9  | free_throw_percentage         |   FT%        |
| 10 | three_point_attempted_per_game|   3PA        |
| 11 | three_point_made_per_game     |   3PM        |
| 12 | three_point_percentage        |   3PT%       |
| 13 | points_per_game               |   Points     |
| 14 | offensive_rebounds_per_game   |   ORebounds  |
| 15 | defensive_rebounds_per_game   |   DRebounds  |
| 16 | rebounds_per_game             |   Rebounds   |
| 17 | assists_per_game              |   Assists    |
| 18 | steals_per_game               |   Steals     |
| 19 | blocks_per_game               |   Blocks     |
| 20 | turnovers_per_game            |   Turnovers  |
| 21 | player_efficiency_rating      |   Efficiency |

EX.頁面上的「Team」欄位請顯示json資料中的team_acronym ...，以此類推。

----
### 注意事項：
1. 請以React.js + ES6 完成此專案
2. 不限制使用的函式庫及程式編寫方式
3. 程式需可執行，並提供簡單的程式說明文件
----
完成後請將project及文件打包寄至 rick.chen@lndata.com<br>
Please send back your project and document to rick.chen@lndata.com