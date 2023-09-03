//     var stop = false;
//     var frameCount = 0;
//     var fps, fpsInterval, startTime, now, then, elapsed;
//     
//     
//     // initialize the timer variables and start the animation
//     
//     function startAnimating(fps) {
//         fpsInterval = 1000 / fps;
//         then = Date.now();
//         startTime = then;
//         animate();
//     }

//     function animate() {
//         requestAnimationFrame(animate);
//    
//         now = Date.now();
//         elapsed = now - then;
//     
//         // if enough time has elapsed, draw the next frame
//     
//         if (elapsed > fpsInterval) {
//             // Get ready for next frame by setting then=now, but also adjust for your
//             // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
//             then = now - (elapsed % fpsInterval);
//             // Put your drawing code here
//             ctx.clearRect(0, 0, canvas.width, canvas.height);
//             game.update(elapsed);
//             game.draw(ctx);
//     
//         }
//     }

//     startAnimating(60);