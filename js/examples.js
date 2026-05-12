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
        image: null,
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
        image: null,
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
        code: `import socket
import pyautogui
import time

UDP_IP = "127.0.0.1"
UDP_PORT = 49153
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

while True:
    x, y = pyautogui.position()
    sock.sendto(str(x).encode(), (UDP_IP, UDP_PORT))
    time.sleep(0.01)
    print(x, y)`,
        image: null,
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
        image: null,
        download: null
    }
};