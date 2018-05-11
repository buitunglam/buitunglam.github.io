//vẽ bảng
var obj1 = {
			name : 'ULTRA BOOST 4.0 "TRIPLE BLACK"',
			image : 'images/sale1.jpg',
			unit_price : '200$',
			amount : '1',
			money: '200$',
			blank: 'images/clear.png'
		}
		var obj2 = {
			name : 'NMD R1 PK "JAPAN BOOST"',
			image : 'images/sale2.jpg',
			unit_price : '200$',
			amount : '1',
			money: '200$',
			blank: 'images/clear.png'
		}
		var obj3 = {
			name : 'YEEZY BOOST 350 V2 "BELUGA"',
			image : 'images/sale3.jpg',
			unit_price : '200$',
			amount : '1',
			money: '200$',
			blank: 'images/clear.png'
		}

		var arr = [obj1,obj2,obj3]

		
		for(i=0;i<11;i++){
			$("#myTable table tbody").append('<tr>'+
				'<td>'+ arr[i].name +'</td>'+
				'<td class="avatar">'+'<img src=' + arr[i].image +'>' +'</td>'+
				'<td>'+ arr[i].unit_price +'</td>'+
				'<td>'+ arr[i].amount +'</td>'+
				'<td>'+ arr[i].money +'</td>'+
				'<td class="clear-icon">'+'<img src=' + arr[i].blank +'>' +'</td>'+
				'</tr>');
		}