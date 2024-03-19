function init() {
  // Update the state of the animation
  // ...

  // Draw the next frame
  // ...

  // Schedule the next frame
  window.requestAnimationFrame(init);
}

// Start the animation
window.requestAnimationFrame(init);
