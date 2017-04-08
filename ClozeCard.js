function ClozeCard(text, cloze){
	if(this instanceof ClozeCard == false){
		return new ClozeCard(text, cloze);
	}

	if(!text.includes(cloze)){
		throw 'Cloze not found in text';
	}

	this.cloze = cloze;
	this.text = text;
	this.partial = text.replace(cloze, "...");
}

module.exports = ClozeCard;