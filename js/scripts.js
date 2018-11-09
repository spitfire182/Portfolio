function castParallax() {

	const opThresh = 350;
	const opFactor = 750;

	window.addEventListener("scroll", function(event){

		const top = this.pageYOffset;

        const layers = document.getElementsByClassName("parallax__scroll");
		let layer, speed, yPos;
		for (let i = 0; i < layers.length; i++) {
			layer = layers[i];
			speed = layer.getAttribute('data-speed');
			let yPos = -(top * speed / 100);
			layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');

		}
	});
}

document.onload = castParallax();