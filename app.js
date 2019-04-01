const fileUpload = document.getElementById('fileUpload');
const btnSubmit = document.getElementById('submit');
const redirectsArea= document.getElementById('redirectsArea');
new ClipboardJS('.copy');

function parseOn() {
	if (fileUpload.value) {
		parseFile();
	} else {
		alert('Please upload a file');
	}
}

// Papa Parse config + extras
Papa.DefaultDelimiter = ' ';

function parseFile() {
	console.log('---Starting gerneration function---');
	btnSubmit.disabled = true;
	// let data = null;
	let file = fileUpload.files[0];
	console.log('---Hello '+file.name+'---');
	Papa.parse(file, {
		// delimiter: ' ',
		header: false,
		skipEmptyLines: true,
		complete: function(results) {
			console.log(results);
			let data = results.data;
			console.log('---Beautiful redirects array---');
			console.log(data);
			generateRedirects(data);
		}
	});
	btnSubmit.disabled = false;
}
function generateRedirects(data) {
	let nginxRedirects = [];
	// doing it this way to get an index number for each row
	for (let i in data) {
		let o = new Url(data[i][0]);
		o = o.path.toString();
		if (!o.endsWith('/')) {
			o+='/';
		}
		// Url Constroctor takes a boolean for noTransform "do not transform to absolute URL"
		let d = new Url(data[i][1], true);
		// console.log("row #"+i);
		// console.log("origin = "+o);
		// console.log("destination = "+d);
		let r = 'rewrite ^'+o+'?$ '+d+' permanent;';
		nginxRedirects.push(r);
		redirectsArea.append(r+'\n')
	}
	// console.table(nginxRedirects);
	// return nginxRedirects;
}