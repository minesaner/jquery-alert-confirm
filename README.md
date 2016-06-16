# jquery-alert-confirm

提供提示与确认功能的 `jQuery` 插件。

##构建源码
使用 git clone 代码到本地
```
git clone git@github.com:minesaner/jquery-alert-confirm.git
```
进入文件夹执行
```
npm install
```
然后执行 webpack 命令
```
node_modules/.bin/webpack 或 webpack（webpack 已全局安装）
```
执行完毕后会在 `./build` 目录下生成 `alert-confirm.min.js`  

#API

## `$.alert(content|options)`，`$.confirm(content|options)`

`content` - 弹出的提示文字

`options` - 配置对象  
>`header` - 提示标题  
`content` - 消息内容  
`confirmButtonText` - 确定按钮的文字  
`cancelButtonText` - 取消按钮的文字  
`confirm([e])` - 确定后的回调函数  
`cancel([e])` - 取消后的回调函数（alert 不需要）
##### 在回掉函数中调用 `e.preventDefault()` 阻止弹框消失

#示例

```javascript
$.alert('alert 内容');

$.confirm('confirm 内容');

$.confirm({
	header: 'header',
	content: 'content',
	cancel: function (e) {
		console.log('cancel');
		e.preventDefault();
	},
	confirm: function (e) {
		console.log('confirm');
	}
})
```

## `$(selector).alertconfirm([options|methodName])`


`options` - 配置对象  
>`showFunction()` - 显示弹窗调用的方法  
`hideFunction()` - 隐藏弹窗调用的方法  
##### 方法中的 `this` 指向 `jQuery` 的选择对象

`methodName` - 方法名称  
>`'show'` - 显示  
`'hide'` - 隐藏

## `$(selector).on(eventName)`

`eventName` - 可绑定的事件  
`'show.ms.alert'`  
`'shown.ms.alert'`  
`'hide.ms.alert'`  
`'hidden.ms.alert'`   
`'confirm.ms.alert'`  
`'cancel.ms.alert'`

#示例

### HTML 结构
```html
<div class="ms-alert">
  <div class="ms-alert-body">
    <div class="ms-alert-header">header</div>
    <div class="ms-alert-content">content</div>
    <div class="ms-alert-buttons">
      <div class="ms-alert-button confirm">confirm text</div>
      <div class="ms-alert-button cancel">cancel text</div>
    </div>
  </div>
</div>
```
或
```html
<div class="ms-alert">
  <div class="ms-alert-body">
    <div class="ms-alert-header">header</div>
    <div class="ms-alert-content">content</div>
    <div class="ms-alert-buttons">
      <div class="ms-alert-button confirm">confirm text</div>
    </div>
  </div>
</div>
```
### js

```javascript
$('.ms-alert').alertconfirm();
$('.ms-alert').on('show.ms.alert', function (e) {
  console.log('show');
});
$('.ms-alert').alertconfirm('show');
```

#License
MIT (http://www.opensource.org/licenses/mit-license.php)
