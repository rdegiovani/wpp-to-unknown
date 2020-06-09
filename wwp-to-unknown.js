function run(input, parameters) {
	
	var countryCode = "55";
	var phoneNumber = input[0].replace(/\D+/g, '')
	var whastappLink = "https://api.whatsapp.com/send?phone="
	if (phoneNumber.startsWith(countryCode)) {
		phoneNumber = phoneNumber.substr(0,13)
	}
	else {
		phoneNumber = countryCode + phoneNumber.substr(0,11)
	}
	input = whastappLink + phoneNumber

	return input;
}