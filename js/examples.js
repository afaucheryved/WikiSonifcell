// ─────────────────────────────────────────────────────────────
// examples.js
// Contains the data for all examples shown in the wiki.
// This file is loaded by both examples-list.js and examples-page.js.
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
// EXAMPLES DATA
// To add a new example:
//   1. Add a new entry below with a unique key (e.g. "myexample")
//   2. Fill in: title, description, steps, fonctions, image, download
//   3. Add the key to the listeExemples array in examples-list.js
//   4. Place the image file in assets/ and the download file in assets/downloads/
//
// Fields:
//   title       : display name of the example
//   description : short paragraph explaining what the program does
//   steps       : array of strings, one instruction per step
//   fonctions   : array of function names used (must match keys in definition.js)
//   image       : filename of the screenshot in assets/ (or null)
//   download    : filename of the downloadable file in assets/downloads/ (or null)
//   code        : optional code block shown on the page (e.g. Python script)
// ─────────────────────────────────────────────────────────────
const exemples = {
    "condition": {
        title: "Condition Example",
        description: "The user enters 2 numbers and a TXT file. The program checks if the numbers are equal. If they are, the number is converted to a frequency and played as a sound. If not, the TXT file is read slice by slice and each value is played as a note.",
        steps: [
            "Place two Number blocks for the user to enter values",
            "Connect both Number blocks to an Equal (=) block to compare them",
            "Place a Load TXT block and connect it to a Serve Slice block",
            "Connect the Equal block, one Number block, and the Serve Slice block to an If-then-else block",
            "Connect the If-then-else output to a MIDI to Frequency block",
            "Connect MIDI to Frequency to a CosineWave block to play the sound",
            "Don't forget to connect the sound output"
        ],
        fonctions: ["Number", "Equal", "Load TXT", "Serve slice", "If-then-else", "MIDI to Frequency", "CosineWave"],
        image: "exemplecondition.jpeg",
        download: null
    },
    "deviation": {
        title: "Deviation from Reference",
        description: "The user loads a CSV file containing numbers in the first column, and enters a reference number. The program plays a note for each number in the file — the frequency is proportional to the deviation from the reference value.",
        steps: [
            "Place a Load CSV block and load your file",
            "Connect the CSV output to a Serve Slice block",
            "Place a Number block for the reference value",
            "Connect both to a subtraction (-) block to compute the deviation",
            "Connect the result to a MIDI to Frequency block",
            "Connect MIDI to Frequency to a SineWave block",
            "Don't forget to connect the sound output",
            "Tip: right-click the top-right corner of any block to visualize its output value in real time"
        ],
        fonctions: ["Load CSV", "Serve slice", "Number", "-", "MIDI to Frequency", "SineWave"],
        image: "reference.jpeg",
        download: null
    },
    "scale": {
        title: "Play a Scale",
        description: "The user loads a CSV file containing the 8 MIDI values of a scale (60, 62, 64, 65, 67, 69, 71, 72), and enters an octave offset number. The program plays the full scale at the desired pitch.",
        steps: [
            "Create a CSV file with the values: 60, 62, 64, 65, 67, 69, 71, 72",
            "Place a Load CSV block and load your file",
            "Connect it to a Serve Slice block",
            "Place a Number block for the octave offset",
            "Connect both to a multiplication (×) block",
            "Connect the result to a MIDI to Frequency block",
            "Connect MIDI to Frequency to a CosineWave block",
            "Don't forget to connect the sound output"
        ],
        fonctions: ["Load CSV", "Serve slice", "Number", "×", "MIDI to Frequency", "CosineWave"],
        image: null,
        download: null
    },
    "mouse": {
        title: "Mouse Sonification",
        description: "The program plays a note based on the horizontal position of the mouse. A Python script reads the mouse X position in real time and sends it via UDP to Sonifcell.",
        steps: [
            "Install the required Python library: pip install pyautogui",
            "Run the Python script below to send mouse position via UDP",
            "In Sonifcell, place a UDP block and set IPv4 to 127.0.0.1 and Port to 49153",
            "Place a Range block in the Parameters zone",
            "Connect the UDP output to a multiplication (×) block",
            "Connect to a MIDI to Frequency block",
            "Connect MIDI to Frequency to a SineWave block",
            "Don't forget to connect the sound output"
        ],
        fonctions: ["UDP", "Range", "×", "MIDI to Frequency", "SineWave"],
        code: `import socket\nimport pyautogui\nimport time\n\nUDP_IP = "127.0.0.1"\nUDP_PORT = 49153\nsock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)\n\nwhile True:\n    x, y = pyautogui.position()\n    sock.sendto(str(x).encode(), (UDP_IP, UDP_PORT))\n    time.sleep(0.01)\n    print(x, y)`,
        image: "mouse.jpeg",
        download: null
    },
    "morse": {
        title: "Morse Code",
        description: "A CSV file filled with 0s and 1s is loaded. Each value is read every 0.1 seconds — if it's a 1, a sound is played, otherwise silence.",
        steps: [
            "Create a CSV file filled with 0s and 1s representing your morse code",
            "Place a Load CSV block and load your file",
            "Connect it to a Serve Slice block with a period of 100ms",
            "Place three Number blocks for the frequency, and the two comparison values (0 and 1)",
            "Connect Serve Slice to an Equal (=) block to check if value is 1",
            "Connect the Equal block to an If-then-else block",
            "If true: connect a Number block with a frequency value",
            "If false: connect a Number block with value 0",
            "Connect the If-then-else output to a SineWave block",
            "Don't forget to connect the sound output"
        ],
        fonctions: ["Load CSV", "Serve slice", "Number", "Equal", "If-then-else", "SineWave"],
        image: "morse.jpeg",
        download: null
    }
};