const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const uploadFile = document.getElementById('file-upload');
uploadFile.addEventListener('change', function(e) {
	const file = this.files[0];
	document.getElementById('custom-label').innerHTML = file.name;

	const reader = new FileReader();
	if (file) {
		fileName = file.name;
		reader.readAsDataURL(file);
	}
	reader.addEventListener('load', () => {
		img = new Image();
		img.src = reader.result;
		img.onload = function() {
			canvas.width = img.width;
			canvas.height = img.height;
			ctx.drawImage(img, 0, 0, img.width, img.height);
			canvas.removeAttribute('data-caman-id');
		};
	});
});
