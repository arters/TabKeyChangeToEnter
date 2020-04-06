# TabKeyChangeToEnter
Pressing the enter key causes focus to go to the "next" form, last element trigger submit in JavaScript(JS).

當光標 focus 於輸入框時，透過鍵盤Tab、Enter可跳至下一格；
並當 focus 在最後一個輸入框時，按壓 Enter 鍵即完成存檔

Example:
```HTML
輸入後按下ENTER可跳至下一格，最後格按下Enter則觸發送出
<form class="use-tab-enter" action="https://github.com/arters/TabKeyChangeToEnter/" method="get">
  <div>
    <input type="text" name="firstname" placeholder="在這邊輸入後按下ENTER">
  </div>
  <div class="form-group">
    <input type="text" name="lastname" placeholder="在這邊輸入後按下ENTER">
  </div>

  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>
```javascript

在需要的表單上，其 Class 增加 "use-tab-enter" 即可註冊此行為。


#### Online Demo:
https://jsfiddle.net/awvu2kd3/
