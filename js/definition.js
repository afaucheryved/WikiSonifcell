let params = new URLSearchParams(window.location.search);
let nomFonction = params.get("fonction");
console.log(nomFonction);

const fonctions = {
    "Null": { 
        description: "Null value. Generates no signal and takes no input.", 
        input: [], 
        output: "" 
    },
    "Custom": { 
        description: "Allows you to code your own function using a slightly modified JavaScript syntax. You can get inspiration from other functions by clicking on the desired function block, then 'advanced'.", 
        input: [], 
        output: "" 
    },
    "Pass": { 
        description: "Passes the information through without modifying it. Useful to route a signal without transformation.", 
        input: ["(all type) — any value or signal to pass through"], 
        output: "(all type) — the same value, unchanged" 
    },
    "Console Log": { 
        description: "Passes the information through and displays it in the console. Access the console with Ctrl + Alt + I. Useful for debugging.", 
        input: ["(all type) — any value or signal to display"], 
        output: "(all type) — the same value, unchanged" 
    },
    "Get component": { 
        description: "Returns an element from an array, indexed by an integer or a name.", 
        input: ["(1d vector) vector — the array to extract from", "(int or string) index — the position or key of the element to retrieve"], 
        output: "(type of the element) — the value at the given index" 
    },
    "Length": { 
        description: "Returns the length of a list, array or vector.", 
        input: ["(1d vector) array — the array whose length you want to measure"], 
        output: "(int) — the number of elements in the array" 
    },
    "Serve slice": { 
        description: "Returns an input slice by slice at regular intervals. Useful for streaming 2D data progressively.", 
        input: ["(2d array) 2D array — the table to slice", "(int) start — index of the first row/column to return", "(bool) row(0) or col(1) — slice direction", "(int) period (ms) — time interval between two slices", "(bool) Loop — whether to restart from the beginning when the last slice is reached"], 
        output: "(1d vector) — one row or column of the array at a time" 
    },
    "Mono to all channels": { 
        description: "Distributes a single-channel input across all audio channels. For example with a stereo output, creates a vector of 2 identical values.", 
        input: ["(all type) — the value to distribute across all channels"], 
        output: "(vector) — a vector with the input value repeated across all audio channels" 
    },
    "Several to Mono": { 
        description: "Transforms a multi-channel input into a single output by combining the values.", 
        input: ["(vector) — one or more input variables"], 
        output: "(int or float) — a combination of the input values" 
    },
    "Two to Stereo": { 
        description: "Transforms two separate input values into a stereo vector of two values.", 
        input: ["(int or float) — left channel value", "(int or float) — right channel value"], 
        output: "(int[2] or float[2]) — a two-element vector representing the stereo signal" 
    },
    "Degrees to radian": { 
        description: "Converts an angle from degrees to radians.", 
        input: ["(double) x0 — angle in degrees"], 
        output: "(double) — angle in radians" 
    },
    "MIDI to Frequency": { 
        description: "Maps a MIDI pitch number to its fundamental frequency in Hz. Formula: output = 440 * ((input-69)/12)²", 
        input: ["(int) Pitch — MIDI pitch number (0 to 127, where 69 = A4 = 440 Hz)"], 
        output: "(double) — frequency in Hz corresponding to the MIDI pitch" 
    },
    "Radian to degrees": { 
        description: "Converts an angle from radians to degrees.", 
        input: ["(double) x0 — angle in radians"], 
        output: "(double) — angle in degrees" 
    },
    "Str to ASCII": { 
        description: "Converts a string into a vector of integers giving its ASCII encoding.", 
        input: ["(String) String — the text string to convert"], 
        output: "(Char[] or int[]) — array of integers representing each character's ASCII code" 
    },
    "ADSR": { 
        description: "Generates a parameterizable volume envelope composed of 4 parts: Attack (rise from 0), Decay (initial decrease), Sustain (maintained level), Release (decrease to 0).", 
        input: ["(float) Sound — the audio signal to apply the envelope to", "(bool) trigger start — triggers the envelope if non-zero and not already running", "(int) Attack (ms) — duration of the attack phase", "(int) Decay (ms) — duration of the decay phase", "(int) Sustain (ms) — duration of the sustain phase", "(int) Release (ms) — duration of the release phase"], 
        output: "(float) — the audio signal with the envelope applied" 
    },
    "Fade In": { 
        description: "Before activation: returns 0. During activation: signal rises from 0. After: works like a Pass. Equivalent to the Attack phase of ADSR.", 
        input: ["(float) Sound — the audio signal", "(bool) Activation — triggers the fade in when non-zero", "(int) Duration (ms) — duration of the fade in"], 
        output: "(float) — the audio signal with fade in applied" 
    },
    "Fade Out": { 
        description: "Before activation: works like a Pass. During: signal drops to 0. After: returns 0. Equivalent to the Release phase of ADSR.", 
        input: ["(float) Sound — the audio signal", "(bool) Activation — triggers the fade out when non-zero", "(int) Duration (ms) — duration of the fade out"], 
        output: "(float) — the audio signal with fade out applied" 
    },
    "Click": { 
        description: "Metronome, generates a punctual signal at regular intervals.", 
        input: ["(int) period (ms) — time interval between each tick in milliseconds"], 
        output: "(int) — returns 1 at each tick, 0 otherwise" 
    },
    "Brownian Noise": { 
        description: "Generates Brownian noise, a random signal where each value depends on the previous one. Creates a smooth random walk.", 
        input: ["(float) factor previous val — weight of the previous value in the calculation", "(float) factor next val — weight of the new random value"], 
        output: "(int) — a Brownian noise signal" 
    },
    "White Noise": { 
        description: "Generates uniform random noise across the entire sound spectrum. Each value is fully independent. Formula: output = 2*random()-1", 
        input: [], 
        output: "(float) — a random value between -1 and 1" 
    },
    "CosineWave": { 
        description: "Generates a cosine signal at a given frequency and amplitude.", 
        input: ["(float) gain (dB) — amplitude of the signal in decibels", "(float) frequency (Hz) — frequency of the cosine wave in Hertz"], 
        output: "(float) — a cosine audio signal" 
    },
    "Modulate Sine": { 
        description: "Generates a sinusoidal signal with modulatable gain and frequency, allowing dynamic variation of both parameters.", 
        input: ["(float) gain — base gain of the signal", "(float) add gain — additional variation applied to the gain", "(float) frequency — base frequency of the signal", "(float) add frequency — additional variation applied to the frequency"], 
        output: "(float) — a modulated sinusoidal audio signal" 
    },
    "SawTooth": { 
        description: "Generates a sawtooth signal, characterized by progressive linear rises and abrupt drops. Rich in harmonics.", 
        input: ["(float) gain (dB) — amplitude of the signal", "(float) frequency (Hz) — frequency of the sawtooth wave"], 
        output: "(float) — a sawtooth audio signal" 
    },
    "SineWave": { 
        description: "Generates a pure sinusoidal signal. The most basic and smooth waveform.", 
        input: ["(double) Gain (dB) — amplitude of the signal in decibels", "(double) Frequency (Hz) — frequency of the sine wave in Hertz"], 
        output: "(float) — a pure sinusoidal audio signal" 
    },
    "Square": { 
        description: "Generates a square wave signal. The signal switches abruptly between a high and a low value. Rich in odd harmonics.", 
        input: ["(double) Gain (dB) — amplitude of the signal", "(double) Frequency (Hz) — frequency of the square wave"], 
        output: "(float) — a square audio signal" 
    },
    "TanWave": { 
        description: "Periodic signal based on the trigonometric tangent function. Produces a distinctive bright and sharp timbre.", 
        input: ["(double) Gain (dB) — amplitude of the signal", "(double) Frequency (Hz) — frequency of the wave"], 
        output: "(float) — a tangent-based audio signal" 
    },
    "Triangle": { 
        description: "Generates a triangular signal. The signal rises and falls in a linear and symmetrical manner. Softer than sawtooth.", 
        input: ["(double) Gain (dB) — amplitude of the signal", "(double) Frequency (Hz) — frequency of the triangle wave"], 
        output: "(float) — a triangular audio signal" 
    },
    "Load Audio": { 
        description: "Loads an audio file and plays it back.", 
        input: ["File — path to the audio file to load", "(bool) Start — boolean indicating when the file should be played", "(bool) Loop — boolean indicating if the file should loop when finished"], 
        output: "(float) — the audio signal from the loaded file" 
    },
    "Load CSV": { 
        description: "Loads tabular data from a CSV file.", 
        input: ["File — path to the CSV file", "(char) Separator — the character used to separate values (e.g. ',' or ';')"], 
        output: "(2d array) — a 2D array containing the file data" 
    },
    "Load Image": { 
        description: "Loads an image and converts its pixels into numerical data.", 
        input: ["File — path to the image file"], 
        output: "(2d array) — a 2D array of pixel values" 
    },
    "Load TXT": { 
        description: "Loads a plain text file.", 
        input: ["File — path to the text file"], 
        output: "(string) — the content of the text file as a string" 
    },
    "Load XLSX": { 
        description: "Loads tabular data from an Excel file.", 
        input: ["File — path to the Excel file"], 
        output: "(2d array) — a 2D array containing the spreadsheet data" 
    },
    "Number": { 
        description: "Allows you to manually enter a fixed numerical value within a defined range.", 
        input: ["(float) Number — the value to set", "(float) Min — minimum allowed value", "(float) Max — maximum allowed value", "(float) Step — increment step between values"], 
        output: "(float) — the entered numerical value" 
    },
    "Range": { 
        description: "Displays a slider to select a value within a defined interval.", 
        input: ["(float) Number — current value of the slider", "(float) Min — minimum value of the slider", "(float) Max — maximum value of the slider", "(float) Step — increment step of the slider"], 
        output: "(float) — the value selected by the slider" 
    },
    "Text": { 
        description: "Field allowing you to enter a string of characters.", 
        input: ["(string) Text — the text string to enter"], 
        output: "(string) — the entered text string" 
    },
    "HTTP Text": { 
        description: "Retrieves text resources directly from the Internet via a URL at regular intervals.", 
        input: ["(string) URL — the web address to fetch", "(int) Period (ms) — interval in ms between each request"], 
        output: "(string) — the text content retrieved from the URL" 
    },
    "HTTP Audio": { 
        description: "Retrieves audio resources directly from the Internet via a URL.", 
        input: ["(string) URL — the web address of the audio resource", "(bool) Start — boolean indicating if the retrieved audio should play", "(bool) Loop — boolean indicating if the audio should loop"], 
        output: "(float) — the audio signal from the retrieved resource" 
    },
    "TCP": { 
        description: "Network communication channel for receiving or sending data. TCP is used for secure, lossless data transmission.", 
        input: ["IPv4 — IP address of the target machine", "Port — communication port number", "(0 or 1) Bind to port — whether to listen on the port", "(int) Period — interval between requests in ms", "(0 or 1) Raw — whether to send/receive raw bytes"], 
        output: "(any type) — data received from the TCP connection" 
    },
    "UDP": { 
        description: "Network communication channel for receiving or sending data. UDP is used for fast transmission without guarantee of delivery.", 
        input: ["IPv4 — IP address of the target machine", "Port — communication port number", "(0 or 1) Bind to port — whether to listen on the port", "(int) Period — interval between requests in ms", "(0 or 1) Raw — whether to send/receive raw bytes"], 
        output: "(any type) — data received from the UDP connection" 
    },
    "If-then-else": { 
        description: "Control structure: If [condition] then [result A] else [result B].", 
        input: ["(bool) Condition — the condition to evaluate", "(all type) Value Then — value returned if condition is true", "(all type) Value Else — value returned if condition is false"], 
        output: "(all type) — Value Then or Value Else depending on the condition" 
    },
    "HigherThan": { 
        description: "Compares two values and returns true if the first is strictly greater than the second.", 
        input: ["(float) x0 — first value to compare", "(float) x1 — second value to compare"], 
        output: "(bool) — 1 if x0 > x1, 0 otherwise" 
    },
    "GreaterOrEqual": { 
        description: "Compares two values and returns true if the first is greater than or equal to the second.", 
        input: ["(float) x0 — first value to compare", "(float) x1 — second value to compare"], 
        output: "(bool) — 1 if x0 >= x1, 0 otherwise" 
    },
    "LowerThan": { 
        description: "Compares two values and returns true if the first is strictly less than the second.", 
        input: ["(float) x0 — first value to compare", "(float) x1 — second value to compare"], 
        output: "(bool) — 1 if x0 < x1, 0 otherwise" 
    },
    "Equal": { 
        description: "Checks if two values are exactly equal.", 
        input: ["(float) x0 — first value", "(float) x1 — second value"], 
        output: "(bool) — 1 if x0 = x1, 0 otherwise" 
    },
    "NotEqual": { 
        description: "Checks if two values are different.", 
        input: ["(float) x0 — first value", "(float) x1 — second value"], 
        output: "(bool) — 1 if x0 ≠ x1, 0 otherwise" 
    },
    "And": { 
        description: "Combines multiple conditions. Returns true only if all conditions are true.", 
        input: ["(bool) x0 — first condition", "(bool) x1 — second condition"], 
        output: "(bool) — 1 if x0 AND x1 are both true, 0 otherwise" 
    },
    "Or": { 
        description: "Combines multiple conditions. Returns true if at least one condition is true.", 
        input: ["(bool) x0 — first condition", "(bool) x1 — second condition"], 
        output: "(bool) — 1 if x0 OR x1 is true, 0 otherwise" 
    },
    "Not": { 
        description: "Inverts the result. True becomes False, False becomes True.", 
        input: ["(bool) x0 — the condition to invert"], 
        output: "(bool) — 1 if x0 is false, 0 if x0 is true" 
    },
    "Linear": { 
        description: "Affine function (y=ax+b) allowing a range of input values to be mapped to an output range. Useful for rescaling any signal.", 
        input: ["(float) val — the input value to transform", "(float) xmin — minimum of the expected input range", "(float) xmax — maximum of the expected input range", "(float) ymin — output value corresponding to xmin", "(float) ymax — output value corresponding to xmax"], 
        output: "(float) — the remapped value in the [ymin, ymax] range" 
    },
    "Abs": { 
        description: "Returns the absolute value. Converts negative numbers to positive.", 
        input: ["(float) Value — the number to take the absolute value of"], 
        output: "(float) — the absolute value, always positive or zero" 
    },
    "Ceil": { 
        description: "Rounds up to the nearest integer.", 
        input: ["(float) Value — the number to round up"], 
        output: "(int) — the smallest integer greater than or equal to the input" 
    },
    "Floor": { 
        description: "Rounds down to the nearest integer.", 
        input: ["(float) Value — the number to round down"], 
        output: "(int) — the largest integer less than or equal to the input" 
    },
    "Power": { 
        description: "Raises a value to a given exponent.", 
        input: ["(float) Value — the base number", "(float) Exponent — the power to raise the base to"], 
        output: "(float) — Value raised to the power of Exponent" 
    },
    "Round": { 
        description: "Mathematical rounding to the nearest integer.", 
        input: ["(float) Value — the number to round"], 
        output: "(int) — the nearest integer to the input value" 
    },
    "Sign": { 
        description: "Gets the sign of the input.", 
        input: ["(float) Value — the number to get the sign of"], 
        output: "(int) — -1 if negative, 0 if zero, 1 if positive" 
    },
    "Sqrt": { 
        description: "Computes the square root of a value.", 
        input: ["(float) Value — the number to compute the square root of (must be positive)"], 
        output: "(float) — the square root of the input value" 
    },
    "Acos": { 
        description: "Computes the arc cosine (inverse of cosine). Returns an angle in radians.", 
        input: ["(float) x0 — a value between -1 and 1"], 
        output: "(float) — the arc cosine in radians, between 0 and π" 
    },
    "Asin": { 
        description: "Computes the arc sine (inverse of sine). Returns an angle in radians.", 
        input: ["(float) x0 — a value between -1 and 1"], 
        output: "(float) — the arc sine in radians, between -π/2 and π/2" 
    },
    "Atan": { 
        description: "Computes the arc tangent (inverse of tangent). Returns an angle in radians.", 
        input: ["(float) x0 — any real number"], 
        output: "(float) — the arc tangent in radians, between -π/2 and π/2" 
    },
    "Atan2": { 
        description: "Computes the arc tangent using two arguments, allowing the full 360° range. More precise than Atan for angles.", 
        input: ["(float) x0 — the y coordinate", "(float) x1 — the x coordinate"], 
        output: "(float) — the arc tangent in radians, between -π and π" 
    },
    "Cos": { 
        description: "Computes the cosine of an angle in radians.", 
        input: ["(float) x0 — angle in radians"], 
        output: "(float) — cosine value, between -1 and 1" 
    },
    "Sin": { 
        description: "Computes the sine of an angle in radians.", 
        input: ["(float) x0 — angle in radians"], 
        output: "(float) — sine value, between -1 and 1" 
    },
    "Tan": { 
        description: "Computes the tangent of an angle in radians.", 
        input: ["(float) x0 — angle in radians (avoid π/2 + kπ where tangent is undefined)"], 
        output: "(float) — tangent value" 
    },
    "+": { 
        description: "Adds two input values together.", 
        input: ["(float) x0 — first value", "(float) x1 — second value"], 
        output: "(float) — x0 + x1" 
    },
    "-": { 
        description: "Subtracts the second input from the first.", 
        input: ["(float) x0 — value to subtract from", "(float) x1 — value to subtract"], 
        output: "(float) — x0 - x1" 
    },
    "×": { 
        description: "Multiplies two input values.", 
        input: ["(float) x0 — first value", "(float) x1 — second value"], 
        output: "(float) — x0 × x1" 
    },
    "÷": { 
        description: "Divides the first input by the second.", 
        input: ["(float) x0 — value to divide", "(float) x1 — divisor (must not be zero)"], 
        output: "(float) — x0 ÷ x1" 
    },
    "Parse Float": { 
        description: "Converts a string into a decimal number (float).", 
        input: ["(string) x0 — a string representing a decimal number, e.g. '3.14'"], 
        output: "(float) — the corresponding decimal number" 
    },
    "Parse Int": { 
        description: "Converts a string into an integer.", 
        input: ["(string) x0 — a string representing an integer, e.g. '42'"], 
        output: "(int) — the corresponding integer" 
    },
    "Parse JSON": { 
        description: "Parses a JSON-formatted string and transforms it into a manipulable object or data array.", 
        input: ["(string) x0 — a valid JSON string, e.g. '{\"key\": \"value\"}'"], 
        output: "(object or array) — the parsed JavaScript object or array" 
    },
    "Parse OSC": { 
        description: "Decodes a data packet in Open Sound Control (OSC) format, a communication standard used in music computing.", 
        input: ["(bytes[]) Bytes — a byte array encoding an OSC message"], 
        output: "(OSC message) — the decoded OSC data" 
    },
    "Diff": { 
        description: "Computes the difference between the current input value and the previous one. Useful to detect changes.", 
        input: ["(float) Value — the current value"], 
        output: "(float) — the difference between the current and previous value" 
    },
    "Retain Max": { 
        description: "Continuously retains and outputs the largest value encountered since the start.", 
        input: ["(float) x0 — the current value to compare"], 
        output: "(float) — the maximum value seen so far" 
    },
    "Retain Min": { 
        description: "Continuously retains and outputs the smallest value encountered since the start.", 
        input: ["(float) x0 — the current value to compare"], 
        output: "(float) — the minimum value seen so far" 
    },
    "Retain Value": { 
        description: "Continuously returns the last retained value. Retains a new value only when the boolean parameter 'change' becomes true.", 
        input: ["(bool) change — when true, retains the current value of x0", "(float) x0 — the value to potentially retain"], 
        output: "(float) — the last retained value" 
    },
    "Smooth": { 
        description: "Smooths abrupt transitions between two values by progressively interpolating between them.", 
        input: ["(float) Value — the current value, potentially changing abruptly"], 
        output: "(float) — a smoothed version of the input, with gradual transitions" 
    },
    "Speed Multiplier": { 
        description: "Modifies the execution speed of the input operation branch. Value > 1 to speed up, between 0 and 1 to slow down.", 
        input: ["(any type) Stream — a value evolving over time through a sequence of operations", "(float) Multiplier — speed factor (> 1 to accelerate, 0-1 to slow down)"], 
        output: "(any type) — the same stream executed at the modified speed" 
    }
};

let breadcrumb = document.createElement("div");
breadcrumb.style.fontSize = "11px";
breadcrumb.style.letterSpacing = "0.1em";
breadcrumb.style.marginBottom = "32px";
breadcrumb.style.opacity = "0.5";

let lienAccueil = document.createElement("a");
lienAccueil.textContent = "Home";
lienAccueil.href = "../index.html";

let lienListe = document.createElement("a");
lienListe.textContent = "Function List";
lienListe.href = "liste-fonctions.html";

let separateur1 = document.createElement("span");
separateur1.textContent = " — ";

let separateur2 = document.createElement("span");
separateur2.textContent = " — ";

let courant = document.createElement("span");
courant.textContent = nomFonction;

breadcrumb.appendChild(lienAccueil);
breadcrumb.appendChild(separateur1);
breadcrumb.appendChild(lienListe);
breadcrumb.appendChild(separateur2);
breadcrumb.appendChild(courant);

document.querySelector(".content").appendChild(breadcrumb);

let definition = fonctions[nomFonction];

let titre = document.createElement("h1");
titre.textContent = nomFonction;

let description = document.createElement("p");
description.textContent = fonctions[nomFonction].description;
document.querySelector(".content").appendChild(titre);
document.querySelector(".content").appendChild(description);


let f = fonctions[nomFonction];

if(f.input.length > 0) {
    let titreInput = document.createElement("h3");
    titreInput.textContent = "Inputs";
    let listeInput = document.createElement("ul");
    f.input.forEach(i => {
        let li = document.createElement("li");
        li.textContent = i;
        listeInput.appendChild(li);
    });
    document.querySelector(".content").appendChild(titreInput);
    document.querySelector(".content").appendChild(listeInput);
}


if(f.output) {
    let titreOutput = document.createElement("h3");
    titreOutput.textContent = "Output";
    let listeOutput = document.createElement("ul");
    let li = document.createElement("li");
    li.textContent = f.output;
    listeOutput.appendChild(li);
    document.querySelector(".content").appendChild(titreOutput);
    document.querySelector(".content").appendChild(listeOutput);
}