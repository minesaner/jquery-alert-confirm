$(function () {
	var $alert = $('#alert')
	var $confirm = $('#confirm')
	var $text = $('#text')
	var $header = $('#header')

	$alert.on('click', function () {
		$.alert({
			content:$text.val() || 'content',
			header: $header.val() || 'header',
			confirm:function () {
				console.log('alert')
			}
		})
	})

	$confirm.on('click', function () {
		$.confirm({content:$text.val(),
			header: $header.val(),
			confirm:function () {
				console.log('confirm')
			},
			cancel:function () {
				e.preventDefault()
				console.log('cancel')
			}
		})
	})
	
	// .ms-alert 为页面上的元素
	$('.ms-alert').alertconfirm({
		showFunction: function () {
			this.removeClass('hidden')
		},
		hideFunction: function () {
			this.addClass('hidden')
		}
	})
	$('#page').on('click', function () {
		$('.ms-alert').alertconfirm('show')
	})

	// js 创建
	function handler(e) {console.log(e.type)}
	$('#js').on('click', function () {
		var a=$('<div class="ms-alert">' +
			'<div class="ms-alert-body">' +
				'<div class="ms-alert-header">阻止弹框消失</div>' +
				'<div class="ms-alert-content">点击确定时调用 e.preventDefault() 组织弹窗消失</div>' +
				'<div class="ms-alert-buttons">' +
					'<div class="ms-alert-button confirm">确定</div>' +
					'<div class="ms-alert-button cancel">取消</div>' +
				'</div>' +
			'</div>' +
		'</div>').alertconfirm()
		
		a.on('confirm.ms.alert', function (e) {
			alert('阻止隐藏')
			e.preventDefault()
		}).on('show.ms.alert shown.ms.alert hide.ms.alert hidden.ms.alert', handler)
		a.alertconfirm('show')
	})
})
