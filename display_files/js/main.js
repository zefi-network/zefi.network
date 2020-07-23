
$(document).ready(function () {
	var reward_table = [];
	var txns;
	$.getJSON( "https://rest.zslp.org/v2/address/transactions/t1ZefiGenesisBootstrapBURNxxxyfs71k", function( json ) {
    txns = json["txs"];
		var txnlen = txns.length;
		for (var i = 0; i < txnlen; i++) {
				var reward = []
		    reward[0] = txns[i].vin[0].addr
				var voutlen = txns[i].vout.length;
				for (var j=0; j < voutlen; j++){
					if ( txns[i].vout[j].scriptPubKey.addresses[0] === "t1ZefiGenesisBootstrapBURNxxxyfs71k"){
						reward[1] = txns[i].vout[j].value
						var credit = parseFloat(reward[1])
						credit = credit * 2000;
						credit = credit.toString();
						reward[2] = credit;
					}
				}
				reward_table.push(reward)
		}
		var rlen = reward_table.length;
		for (var i = 0; i < rlen; i++) {
			$("#rewards").find('tbody')
			    .append($('<tr>')
			        .append($('<td>'+ reward_table[i][0] + '</td>' + '<td>'+ reward_table[i][1] + '</td>' + '<td>'+ reward_table[i][2] + '</td>')
			        )
			    );



		}

		console.log(reward_table);
 	});

	var counterData = choose_mounth + " " + choose_day +", "+ choose_year;
	var counterTime = new Date(counterData + " " + choose_hour);
	$('#counter').countdown({
	until: counterTime,
	serverSync: Date.now(),
	layout: '<div id="counter_bkg"><span class="marg"></span><span class="num{d100}"></span><span class="num{d10}"></span><span class="num{d1}"></span><span class="sep"></span><span class="num{h10}"></span><span class="num{h1}"></span><span class="sep"></span><span class="num{m10}"></span><span class="num{m1}"></span><span class="sep"></span><span class="num{s10}"></span><span class="num{s1}"></span><span class="marg"></span></div><ul class="labels"><li class="lrg">{dl}</li><li>{hl}</li><li>{ml}</li><li>{sl}</li></ul><div id="glass"></div> ',
	expiryText:'<div class="expiry">' + counterExpiryText + '</div>',
	alwaysExpire: true
	});


	$('.msg').hide();

	var number_style   = "num_style" + choose_numbers_style;
	var url_number_style = "display_files/images/numbers/" + number_style + ".png";
	$("body").addClass(choose_background );
	$("body").addClass(choose_style);
	$("<style>#counter_bkg { background-color: " + choose_numbers_color + ";}#counter span{background-image: url(" + url_number_style + ");}</style>").appendTo("head");
	$("span.date").text(counterData);

	if (choose_background == "image") {
		// Slideshow for Background Slideshow theme
		$.supersized({
						slide_interval          : choose_slide_interval,
						transition              : choose_transition,
						transition_speed		: choose_transition_speed,
						slides 					: slidesArray
					});
	}else{
		var background_texture = choose_background + choose_texture;
		var url_background = "display_files/images/textures/" + background_texture + ".png";
		$("body").css("background-image","url(" + url_background + ")");
	}


});
