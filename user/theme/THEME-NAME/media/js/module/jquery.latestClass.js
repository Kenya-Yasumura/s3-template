(function(a){a.fn.latestClass=function(c){var e={daySelector:".date",addClass:"new",diff_num:7,separator:".",month:false};var d=a.extend(e,c);var b=new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate(),0,0,0);this.children().each(function(){var g=a(this).find(d.daySelector).text().split(d.separator);var f=new Date(g[0],g[1]-1,g[2],0,0,0);var j=0;if(!d.month){j=(b-f)/1000/60/60/24;j=Math.floor(j)}else{var i=(b.getMonth()-f.getMonth());var h=(b.getFullYear()-f.getFullYear());j=i+h*12}if(j>=0&&j<=d.diff_num){a(this).addClass(d.addClass)}});return(this)}})(jQuery);
