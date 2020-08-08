
$(document).ready(function () {

	function addressJSON(latest_block){
		var reward_table = [];
		var txns;

		$.getJSON( "https://rest.zslp.org/v2/address/transactions/t1ZefiGenesisBootstrapBURNxxxyfs71k", function( json ) {
	    txns = json["txs"];

			var block_change = 846490;
	//		var block_change = 840090;
			var more_blocks = 50;


			if (latest_block > block_change) {
				if ((latest_block % 50) == 0) {
					more_blocks = 50;
				} else {
					more_blocks = latest_block % 50;
				}

				var after = latest_block - block_change;
				var rounds = Math.floor(after / 50);
				var rewards = 2000 - rounds;
				$('#rate').html(rewards);

			} else {
				more_blocks = block_change - latest_block;
			}
			var moreSeconds = (more_blocks) * 70;

			var counterTime = new Date();
			var secondsSinceEpoch = counterTime.getSeconds();


			counterTime.setSeconds(secondsSinceEpoch + moreSeconds);
			$('#counter').countdown({
				until: counterTime,
				serverSync: Date.now(),
				layout: '<div id="counter_bkg"><span class="marg"></span><span class="num{d100}"></span><span class="num{d10}"></span><span class="num{d1}"></span><span class="sep"></span><span class="num{h10}"></span><span class="num{h1}"></span><span class="sep"></span><span class="num{m10}"></span><span class="num{m1}"></span><span class="sep"></span><span class="num{s10}"></span><span class="num{s1}"></span><span class="marg"></span></div><ul class="labels"><li class="lrg">{dl}</li><li>{hl}</li><li>{ml}</li><li>{sl}</li></ul><div id="glass"></div> ',
				expiryText:'<div class="expiry">' + counterExpiryText + '</div>',
				alwaysExpire: true
			});



			var txnlen = txns.length;
			for (var i = 0; i < txnlen; i++) {
					var reward = []
			    reward[0] = txns[i].vin[0].addr
					var voutlen = txns[i].vout.length;
					for (var j=0; j < voutlen; j++){
						if ( txns[i].vout[j].scriptPubKey.addresses[0] === "t1ZefiGenesisBootstrapBURNxxxyfs71k"){
							reward[1] = txns[i].vout[j].value
							var credit = parseFloat(reward[1])



							var block_change = 846490;
				//			var block_change = 840090;
							var more_blocks = 50;
							var rate = 2000;
							console.log(txns[i].blockheight);
							if (txns[i].blockheight > block_change) {
								if ((txns[i].blockheight % 50) == 0) {
									more_blocks = 50;
								} else {
									more_blocks = txns[i].blockheight % 50;
								}
								var after = txns[i].blockheight - block_change;
								var rounds = Math.floor(after / 50);
								rate = 2000 - rounds;
							}



							credit = credit * rate;
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

	 	});


		$('.msg').hide();

		var number_style   = "num_style" + choose_numbers_style;
		var url_number_style = "display_files/images/numbers/" + number_style + ".png";
		$("body").addClass(choose_background );
		$("body").addClass(choose_style);
		$("<style>#counter_bkg { background-color: " + choose_numbers_color + ";}#counter span{background-image: url(" + url_number_style + ");}</style>").appendTo("head");

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



	}



	var jqXHR = $.getJSON('https://rest.zslp.org/v2/blockchain/getblockcount');
	jqXHR.complete(function(response) {
		addressJSON(response.responseJSON);
	});







});
