# wpp-to-unknown
Little js script so you send a direct whatsapp message to a phone number copied to your clipboard.

## Tutorial

### Downloading app
1. Donwload the app from the code
2. Use it/Done!

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
