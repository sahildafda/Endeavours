    self.onmessage = function (event) {
        const file = event.data;
    
        createImageBitmap(file)
        .then(function (bitmap) {
            const width = bitmap.width;
            const height = bitmap.height;
            const calculatedAspectRatio = width / height;
            let result = "";
    
            if (Math.abs(calculatedAspectRatio - (1/1)) < 0.01) {
            // Image meets all the requirements
            result = "Image uploaded successfully!";
    
            // Create a canvas element
            const canvas = new OffscreenCanvas(width, height);
            const ctx = canvas.getContext("2d");
    
            // Draw the image on the canvas
            ctx.drawImage(bitmap, 0, 0);
    
            // Convert the image to black and white
            const imageData = ctx.getImageData(0, 0, width, height);
            const data = imageData.data;
    
            for (let i = 0; i < data.length; i += 4) {
                // Get the average of red, green, and blue values
                const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    
                // Set the red, green, and blue values to the average
                data[i] = avg; // Red
                data[i + 1] = avg; // Green
                data[i + 2] = avg; // Blue
    
                // Set the alpha value to 255 (fully opaque)
                data[i + 3] = 255;
            }
    
            // Update the canvas with the modified image data
            ctx.putImageData(imageData, 0, 0);
    
            // Get the converted image as a Blob
            canvas.convertToBlob().then(function (blob) {
                const convertedImageURL = URL.createObjectURL(blob);
                self.postMessage({ result, convertedImageURL });
            });
            } else {
            // Image aspect ratio is not 16:9
            result = "Please upload an landscape image with a 16:9 aspect ratio.";
            self.postMessage({ result });
            }
        })
        .catch(function (error) {
            console.error(error);
        });
    };
    