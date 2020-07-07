# Send whatsapp message to any number
Little *MacOS Automator App* & *js script* so you can send a direct whatsapp message to a phone number copied to your clipboard.

## Installation

### Downloading app
1. Donwload `WPP to Unknow.app` from the repository
2. Use it!

### Copying the code
1. Create a MacOS Automator App
2. Add a **Get Contents of Clipboard** variable
3. Add a **Run Javascript** node
4. Paste the code inside the script
5. Add a **Display Webpages** node
6. Done!

## Results
You should be able to copy a phonenumber to your clipboard or drop the string onto the app and be able to send a message through whatsapp to that number.

## Constraints
The phone number format is **CCYYNNNNNNNNN** where
- CC = Country code (2 digits)
- SS = City code (2 digits)
- NNNNNNNNN = Phonenumber (9 digits)

The country code is set by `var contryCode`

## Roadmap
- **Number auth:** Check if the number is the correct lenght. If not, display a warning, with option to correct it.
- **Location Identification:** An interface, displayed on first use, that collects your country code and area code, to add when not present. Area code insertion should display a warning to the user, since it's a more case dependent situation.
- **Interface:** An interface, accessible by some action from the user, where you can access and change country code, area code and future features.
- **Message Automator:** The user inputs a set of phone number, adds a text, and the app sends the text message to all the phone numbers.