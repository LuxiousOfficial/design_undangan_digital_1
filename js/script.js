

		var imageno1 =1;
		displayimg1(imageno1);

		function nextimg1(n) {
			displayimg1(imageno1 += n)
		}

		function currentSlide1(n) {
			displayimg1(imageno1 = n)
		}

		function displayimg1(n) {
			var i;
			var image1 = document.getElementsByClassName("image1");
			var dots1 = document.getElementsByClassName("dot1");

			if(n > image1.length) {
				imageno1 = 1;
			}

			if (n < 1) {
				imageno1 = image1.length; 
			}

			for(i=0; i < image1.length; i++) {
				image1[i].style.display = "none";
			}

			for(i=0; i < dots1.length; i++) {
				dots1[i].className = dots1[i].className.replace(" active", "");
			}

			image1[imageno1 - 1].style.display ="block";
			dots1[imageno1 - 1].className += " active";
		}


		var imageno2 =1;
		displayimg2(imageno2);

		function nextimg2(n) {
			displayimg2(imageno2 += n)
		}

		function currentSlide2(n) {
			displayimg2(imageno2 = n)
		}

		function displayimg2(n) {
			var i;
			var image2 = document.getElementsByClassName("image2");
			var dots2 = document.getElementsByClassName("dot2");

			if(n > image2.length) {
				imageno2 = 1;
			}

			if (n < 1) {
				imageno2 = image2.length; 
			}

			for(i=0; i < image2.length; i++) {
				image2[i].style.display = "none";
			}

			for(i=0; i < dots2.length; i++) {
				dots2[i].className = dots2[i].className.replace(" active", "");
			}

			image2[imageno2 - 1].style.display ="block";
			dots2[imageno2 - 1].className += " active";
		}


		var imageno3 =1;
		displayimg3(imageno3);

		function nextimg3(n) {
			displayimg3(imageno3 += n)
		}

		function currentSlide3(n) {
			displayimg3(imageno3 = n)
		}

		function displayimg3(n) {
			var i;
			var image3 = document.getElementsByClassName("image3");
			var dots3 = document.getElementsByClassName("dot3");

			if(n > image3.length) {
				imageno3 = 1;
			}

			if (n < 1) {
				imageno3 = image3.length; 
			}

			for(i=0; i < image3.length; i++) {
				image3[i].style.display = "none";
			}

			for(i=0; i < dots3.length; i++) {
				dots3[i].className = dots3[i].className.replace(" active", "");
			}

			image3[imageno3 - 1].style.display ="block";
			dots3[imageno3 - 1].className += " active";
		}


		var imageno4 =1;
		displayimg4(imageno4);

		function nextimg4(n) {
			displayimg4(imageno4 += n)
		}

		function currentSlide4(n) {
			displayimg4(imageno4 = n)
		}

		function displayimg4(n) {
			var i;
			var image4 = document.getElementsByClassName("image4");
			var dots4 = document.getElementsByClassName("dot4");

			if(n > image4.length) {
				imageno4 = 1;
			}

			if (n < 1) {
				imageno4 = image4.length; 
			}

			for(i=0; i < image4.length; i++) {
				image4[i].style.display = "none";
			}

			for(i=0; i < dots4.length; i++) {
				dots4[i].className = dots4[i].className.replace(" active", "");
			}

			image4[imageno4 - 1].style.display ="block";
			dots4[imageno4 - 1].className += " active";
		}

		// open koding untuk audio

		window.addEventListener('click', () => {
			document.getElementById("song").play();
		})

		// close koding untuk audio
