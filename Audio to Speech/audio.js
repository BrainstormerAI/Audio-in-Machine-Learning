// Variables
let recognition;
let isListening = false;

// Initialize speech recognition
function initializeSpeechRecognition() {
  // Create a new SpeechRecognition object
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  
  // Event listeners
  recognition.onresult = handleSpeechRecognitionResult;
  recognition.onerror = handleSpeechRecognitionError;
}

// Start listening for speech
function startListening() {
  // Check if speech recognition is available
  if ('webkitSpeechRecognition' in window) {
    if (!recognition) {
      // Initialize speech recognition if not already done
      initializeSpeechRecognition();
    }

    // Start listening
    recognition.start();
    isListening = true;
  } else {
    alert('Speech recognition is not supported in this browser.');
  }
}

// Stop listening for speech
function stopListening() {
  if (recognition && isListening) {
    recognition.stop();
    isListening = false;
  }
}

// Handle speech recognition result
function handleSpeechRecognitionResult(event) {
  const transcriptDiv = document.getElementById('transcript');
  const result = event.results[event.results.length - 1];
  const transcript = result[0].transcript;
  
  // Display the transcript
  transcriptDiv.textContent = transcript;
  
  // Call your TensorFlow.js speech recognition model here
  // with the transcript for further processing or analysis
}

// Handle speech recognition error
function handleSpeechRecognitionError(event) {
  console.error('Speech recognition error:', event.error);
  stopListening();
}

// Call the initializeSpeechRecognition function when the page loads
window.addEventListener('load', initializeSpeechRecognition);

